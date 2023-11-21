import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Chat, ChatSchema } from './schemas/chat.schema';
import { ChatGateway } from './chat.gateway';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([{ name: Chat.name, schema: ChatSchema }])
  ],
  // controllers: [PollExecuteController],
  providers: [ChatGateway],
  exports: [ChatGateway]
})
export class ChatModule { }
