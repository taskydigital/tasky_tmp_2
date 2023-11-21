import { Controller, Get, Post, Body, Param, Delete, Put, Query, UseGuards } from '@nestjs/common';
import { StaffService } from './staff.service';
import { CreateStaffDto } from './dto/create-staff.dto';
import { UpdateStaffDto } from './dto/update-staff.dto';
import { RolesGuard } from './roles.guard';
import { Roles } from './roles.decorator';

@Controller('staff')
export class StaffController {
  constructor(private readonly staffService: StaffService) { }

  @Roles('F')
  @UseGuards(RolesGuard)
  @Post()
  create(@Body() createStaffDto: CreateStaffDto) {
    return this.staffService.create(createStaffDto);
  }

  @Post('login')
  login(@Body() updateStaffDto: UpdateStaffDto) {
    return this.staffService.login(updateStaffDto);
  }

  @Roles('F')
  @UseGuards(RolesGuard)
  @Get('filter/data?')
  findByQuery(@Query() filterQuery) {
    const { queryType, active, stars } = filterQuery;
    // const adata = JSON.parse(data);
    switch (queryType) {
      case 1: // Active
        return this.staffService.findByActive(active);
        break;
      case 2: // stars
        return this.staffService.findByStars(stars);
        break;
    }
    return this.staffService.findAll();
  }

  @Roles('F')
  @UseGuards(RolesGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.staffService.findOne(id);
  }

  @Roles('F')
  @UseGuards(RolesGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateStaffDto: UpdateStaffDto) {
    return this.staffService.update(id, updateStaffDto);
  }

  @Roles('F')
  @UseGuards(RolesGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.staffService.remove(id);
  }
}
