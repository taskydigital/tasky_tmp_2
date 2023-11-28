import { Controller, Get, Param, Delete } from '@nestjs/common';
import { CrmService } from './crm.service';
// import { CreateCrmDto } from './dto/create-crm.dto';
// import { UpdateCrmDto } from './dto/update-crm.dto';

@Controller('crm')
export class CrmController {
  constructor(private readonly crmService: CrmService) {}

  @Get()
  findAll() {
    return this.crmService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.crmService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.crmService.remove(+id);
  }
}
