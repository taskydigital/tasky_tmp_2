import { Module } from '@nestjs/common';
import { PollresultService } from './pollresult.service';
import { PollresultController } from './pollresult.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PollResult, PollsResultSchema } from './schemas/pollresult.schema';
import { ChatModule } from 'src/chat/chat.module';
import { ConfigModule } from '@nestjs/config';
import { CrmModule } from 'src/crm/crm.module';
// import { CrmService } from 'src/crm/crm.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([{ name: PollResult.name, schema: PollsResultSchema }]),
    ChatModule,
    CrmModule
  ],
  controllers: [PollresultController],
  providers: [PollresultService],
})
export class PollresultModule {}
