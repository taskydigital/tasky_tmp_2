import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { PollsGroupService } from './polls-group.service';
import { CreatePollsGroupDto } from './dto/create-polls-group.dto';
import { UpdatePollsGroupDto } from './dto/update-polls-group.dto';
import { RolesGuard } from 'src/staff/roles.guard';
import { Roles } from 'src/staff/roles.decorator';
import { User } from 'src/staff/user.decorator';

@Controller('pollsgrp')
export class PollsGroupController {
  constructor(private readonly pollsGroupService: PollsGroupService) {}

  @Post()
  async create(@Body() createPollsGroupDto: CreatePollsGroupDto) {
    return await this.pollsGroupService.create(createPollsGroupDto);
  }

  @Get('/exp')
  async findExported() {
    return await this.pollsGroupService.findByExported();
  }

  @Roles('D')
  @UseGuards(RolesGuard)
  @Get(':id')
  async findById(@Param('id') id: string, @User() user: any) {
    return await this.pollsGroupService.findById(id, user);
  }

  @Get()
  async findAll() {
    return await this.pollsGroupService.findAll();
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updatePollsGroupDto: UpdatePollsGroupDto) {
    return await this.pollsGroupService.update(id, updatePollsGroupDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.pollsGroupService.remove(id);
  }
}
