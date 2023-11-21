import { Module } from '@nestjs/common';
import { PollsGroupService } from './polls-group.service';
import { PollsGroupController } from './polls-group.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {PollGroups , PollsGrpSchema } from './schemas/prollsgroup.shemas';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([{ name: PollGroups.name, schema: PollsGrpSchema }]),
  ],
  controllers: [PollsGroupController],
  providers: [PollsGroupService],
})
export class PollsGroupModule {}
