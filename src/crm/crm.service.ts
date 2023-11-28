import { Injectable } from '@nestjs/common';
import { CreateCrmDto } from './dto/create-crm.dto';
// import { UpdateCrmDto } from './dto/update-crm.dto';
import { CRM } from './schemas/crm.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreatePollresultDto } from 'src/pollresult/dto/create-pollresult.dto';

@Injectable()
export class CrmService {

  constructor(@InjectModel(CRM.name) private crmModel: Model<CRM>) {}

  async create(createPollresultDto: CreatePollresultDto, pollresult_id: string) {
    const custom = createPollresultDto.crm['costumer'].split(':');
    const prod = createPollresultDto.crm['product'].split(':');
    const createCrmDto: CreateCrmDto = {
      costum_id: custom[0],
      costum_name: custom[1],
      date_end: createPollresultDto.date_end,
      date_ini: createPollresultDto.date_ini,
      pollgrp_name: createPollresultDto.pollGrpName,
      pollresult_id: pollresult_id,
      prod_id: prod[0],
      prod_name: prod[1],
      staff__id: createPollresultDto.staff__id,
      staff_name: createPollresultDto.staff_name
    } 
    const crmDoc = await new this.crmModel(createCrmDto);
    return crmDoc.save();
    
  }

  findAll() {
    return `This action returns all crm`;
  }

  findOne(id: number) {
    return `This action returns a #${id} crm`;
  }

  remove(id: number) {
    return `This action removes a #${id} crm`;
  }
}
