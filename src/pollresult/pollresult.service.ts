import { Inject, Injectable } from '@nestjs/common';
import { CreatePollresultDto } from './dto/create-pollresult.dto';
import { UpdatePollresultDto } from './dto/update-pollresult.dto';
import { PollResult } from './schemas/pollresult.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ChatGateway } from 'src/chat/chat.gateway';

@Injectable()
export class PollresultService {

  constructor(
    @InjectModel(PollResult.name) private pollResultModel: Model<PollResult>,
    @Inject(ChatGateway) private chatcmd: ChatGateway,
  ) { }

  async create(createPollresultDto: CreatePollresultDto) {
    const createdPlresult = await new this.pollResultModel(createPollresultDto);
    const { _id, staff__id, pollGrp_id, status } = createdPlresult;
    const adata = { status, pollGrp_id }
    await this.chatcmd.handleNotifCMD('pollresult', _id.toString(), staff__id, staff__id, adata);
    return createdPlresult.save();
  }

  async findByGroup(pollGrp_id: string): Promise<PollResult[]> {
    return await this.pollResultModel.find({ pollGrp_id: pollGrp_id }).exec();
  }

  async findByStatus(pollGrp_id: string, status: number, date_ini: number, date_end: number): Promise<PollResult[]> {
    if (date_ini === 0 && date_end === 0) {
      return await this.pollResultModel.find({ pollGrp_id: pollGrp_id, status: status }).exec();
    }
    return await this.pollResultModel.find({ pollGrp_id, status, date_ini: { '$gt': date_ini }, date_end: { '$lt': date_end } }).exec();
  }

  async findByDate(pollGrp_id: string, date_ini: number, date_end: number): Promise<PollResult[]> {
    return await this.pollResultModel.find({ pollGrp_id, date_ini, date_end }).exec();
  }

  findAll() {
    return `This action returns all pollresult`;
  }

  async findOne(id: string) {
    return await this.pollResultModel.findById(id).exec();
  }

  async update(id: string, updatePollresultDto: UpdatePollresultDto, user: any) {
    const { staff__id, pollGrp_id, status } = updatePollresultDto;
    const adata = { status, pollGrp_id }
    await this.chatcmd.handleNotifCMD('pollresult', id, user.staff__id, staff__id, adata);
    return await this.pollResultModel.findByIdAndUpdate(id, updatePollresultDto);
  }

  async updatePartial(id: string, data: any, user: any) {
    const { fieldName, staff__id, chats, status, pollGrp_id } = data;
    
    if (fieldName === 'status') {
      const adata = { status, pollGrp_id }
      await this.chatcmd.handleNotifCMD('pollresult', id, user.id, staff__id, adata);
    } else {
      const msg = chats[chats.length - 1];
      const adata = { status, pollGrp_id, msg }
      await this.chatcmd.handleNotifCMD('chat', id, user.id, staff__id, adata);
    }
    return await this.pollResultModel.findByIdAndUpdate(id, { $set: { chats, status } });
  }

  async remove(id: string) {
    return await this.pollResultModel.findByIdAndRemove(id);
  }

  async findByAnalitic(pollGrpList: string[], date_ini: number, date_end: number) {
    const result = [];
    const options = { status: { $gt: 2 } };
    if (date_ini > 0 && date_end > 0) {
      options['date_ini'] = { $gt: date_ini };
      options['date_end'] = { $lt: date_end };
    }
    if (pollGrpList.length > 0) {
      options['pollGrp_id'] = {$in: pollGrpList};
    }

    (await this.pollResultModel.find(options))
      .forEach(pr => {
        result.push({
          _id: pr._id,
          id: pr.id,
          date_ini: pr.date_ini,
          date_end: pr.date_end,
          pollGrp_id: pr.pollGrp_id,
          pollGrp_name: pr.pollGrpName,
          staff__id: pr.staff__id,
          staff_name: pr.staff_name
        })
      });


    /*
    if (date_ini === 0 && date_end === 0) {
      (await this.pollResultModel.find({ pollGrp_id: { $in: pollGrpList }, status: { $gt: 2 } }))
        .forEach(pr => {
          result.push({
            _id: pr._id,
            id: pr.id,
            date_ini: pr.date_ini,
            date_end: pr.date_end,
            pollGrp_id: pr.pollGrp_id,
            pollGrp_name: pr.pollGrpName,
            staff__id: pr.staff__id,
            staff_name: pr.staff_name
          })
        });
    } else {
      (await this.pollResultModel.find({ pollGrp_id: { $in: pollGrpList }, status: { $gt: 2 }, date_ini: { $gt: date_ini }, date_end: { '$lt': date_end } }))
        .forEach(pr => {
          result.push({
            _id: pr._id,
            id: pr.id,
            date_ini: pr.date_ini,
            date_end: pr.date_end,
            pollGrp_id: pr.pollGrp_id,
            pollGrp_name: pr.pollGrpName,
            staff__id: pr.staff__id,
            staff_name: pr.staff_name
          })
        });
    }
    */
    return { status: 200, data: result };
  }

  async getChat(id: string) {
    const plr = await this.pollResultModel.findById(id).exec();
    const json = plr.toJSON();
    // const {chats} = plr;
    return json.chats;
  }
}
