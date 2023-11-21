import { Controller, Get, Body, Put } from '@nestjs/common';
import { CompanyService } from './company.service';
// import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Get()
  async findOne() {
    return await this.companyService.findOne();
  }

  @Put()
  async update(@Body() updateGeneralDto: UpdateCompanyDto) {
    return await this.companyService.update(updateGeneralDto);
  }

}
