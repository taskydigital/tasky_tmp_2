import {
  // OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { NotifPayLoad } from './entities/notification.entity';

export interface CollectionNotification {
  collection?: string; // PollGroups, PollResult, ...
  field_id?: string; /// _id de el elemento en la colección
  // fieldId?: string; /// id de el elemento en la colección
  user_id?: string; // _id del origen del cambio
  usert_id?: string; // nombre del origen del cambio
  date?: number; // Fecha de la actualización
  data?: any;
}

// @WebSocketGateway(Number(process.env.CHAT_PORT), { cors: { origin: '*' } })
@WebSocketGateway()
export class ChatGateway {
 
  @WebSocketServer() server: Server;
  private notification: Array<NotifPayLoad> = [];

  // ................... MEMORY DATA BASE MEMORY DATA BASE MEMORY DATA BASE .....................

  getAllSocketId(): Array<string> {
    const result: string[] = [];
    this.notification.forEach((notif) => result.push(notif.socket_id));
    return result;
  }

  getAll(): Array<NotifPayLoad> {
    return this.notification;
  }

  getById(staff__id: string): NotifPayLoad {
    return this.notification.find((notif) => notif.staff__id === staff__id);
  }

  upCreated(idsocket_id: string, updateCard: any) {
    const indexToUpdate = this.notification.findIndex((notif) => notif.socket_id === idsocket_id);
    if (indexToUpdate >= 0) {
      this.notification[indexToUpdate] = {
        ...this.notification[indexToUpdate],
        ...updateCard,
      };
    } else {
      /// updateCard.id = Date.now();
      this.notification.push(updateCard);
    }
  }

  /*
  getByPollResult(pollresult_id: string): string[] {
    const result = [];
    this.notification.forEach(ntf => {
      if (ntf.pollresult_ids.includes(pollresult_id)) { result.push(ntf.socket_id) }
    });
    return result;
  }

  getByPollsGroup(pollsgrp_id: string): string[] {
    const result = [];
    this.notification.forEach(ntf => {
      if (ntf.pollresult_ids.includes(pollsgrp_id)) { result.push(ntf.socket_id) }
    });
    return result;
  }
  */

  create(notif: any) {
    notif.id = Date.now();
    notif.validDate = new Date().toLocaleDateString('ES');
    this.notification = [...this.notification, notif];
  }

  update(staff__id: string, updateCard: any) {
    const indexToUpdate = this.notification.findIndex((notif) => notif.staff__id === staff__id);

    if (indexToUpdate >= 0) {
      this.notification[indexToUpdate] = {
        ...this.notification[indexToUpdate],
        ...updateCard,
      };
    }
  }

  delete(socket_id: string) {
    const cardIndex = this.notification.findIndex((c) => c.socket_id === socket_id);
    if (cardIndex >= 0) {
      this.notification.splice(cardIndex, 1);
    }
  }

  // .............................................................

  /*
  afterInit(server: any) {
    console.log('Esto se ejecuta cuando inicia')
  }
  */

  handleConnection(client: any, ...args: any[]) {
    const updateCard: NotifPayLoad = {
      socket_id: client.id
    }
    this.upCreated(client.id, updateCard);
    console.log('Hola alguien se conecto al socket', client.id);
  }

  @SubscribeMessage('credential')
  handleCredential(client: Socket, data: any) {
    const updateCard: NotifPayLoad = {
      staff__id: data.staff__id,
      socket_id: client.id,
      rol: data.rol.split(',')
    }
    this.upCreated(client.id, updateCard)
  }

  handleDisconnect(client: any) {
    this.delete(client.id)
    // console.log('ALguien se fue', client.id)
  }

  /*
  @SubscribeMessage('event_join')
  handleJoinRoom(client: Socket, room: string) {
    client.join(`room_${room}`);
  }

  @SubscribeMessage('event_message') //TODO Backend
  handleIncommingMessage(
    client: Socket,
    payload: { room: string; message: string },
  ) {
    const { room, message } = payload;
    console.log(payload)
    this.server.to(`room_${room}`).emit('new_message', message);
  }

  @SubscribeMessage('event_leave')
  handleRoomLeave(client: Socket, room: string) {
    console.log(`chao room_${room}`)
    client.leave(`room_${room}`);
  }
  */

  // ..............................................................................................

  handleNotifCMD(
    collection: string,
    field_id: string,
    user_id: string,
    usert_id: string, // Staff a quien se dirige la accion
    data: any
  ) {
    // Get list of subscriber clients
    let soketList: string[] = [];
    // TODO: TEMPORAL
    soketList = this.getAllSocketId()
    /*
    soketList = this.getByPollResult(pollResult_id);
    soketList = [...soketList, ...this.getByPollsGroup(pollGrp_id)];
    */
    if (soketList.length > 0) {
      const payload: CollectionNotification = {
        collection, field_id, user_id, usert_id,
        date: Date.now(),
        data
      }
      this.server.emit('dtb-notification', payload);
      /*
      soketList.forEach(sock_id => {
        this.server.to(sock_id).emit('dtb-notification', payload);
      })
      */
    }
  }

}