/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
// import { OnStartEnd } from 'src/datatypes';

export type ChatDocument = HydratedDocument<Chat>;

@Schema()
export class Chat {

    @Prop()
    date?: number;

    @Prop()
    msg?: string; // Mensaje

    @Prop()
    PollGrp_id?: string; // Si "all"

    @Prop()
    pos?: number; // 1

    @Prop()
    staffId?: string;

    @Prop()
    type?: string; // T: tasker, W: Window, D: Comando la información viene en el mensaje

    @Prop()
    visible?: boolean;

    /*
    @Prop()
    pollGrp_Id: string;

    @Prop()
    pollResult_Id: string;

    @Prop()
    pollStaff_Id: string;

    @Prop()
    socket_id: string;

    @Prop()
    rol: string; // C: Controler  T: Tasker, M: Master

    @Prop()
    chats: object[]
    */
}

export const ChatSchema = SchemaFactory.createForClass(Chat);
