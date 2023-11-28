import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { CostumerService } from './costumer.service';
import { CreateCostumerDto } from './dto/create-costumer.dto';
import { UpdateCostumerDto } from './dto/update-costumer.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('costumer')
export class CostumerController {
  constructor(private readonly costumerService: CostumerService) {}

  @Post()
  create(@Body() createCostumerDto: CreateCostumerDto) {
    return this.costumerService.create(createCostumerDto);
  }

  @Post('excel2Costum')
  @UseInterceptors(
    FileInterceptor(
      'file', {
      storage: diskStorage({
        destination: '.catalog/',
        filename: function (_req, _file, cb) { cb(null, 'catalog.xlsx') }
      }),
    }
    )
  )
  async excel2Costum(@UploadedFile() file: Express.Multer.File) {
    await this.costumerService.excel2Costum(file);
  }

  @Get()
  findAll() {
    return this.costumerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.costumerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCostumerDto: UpdateCostumerDto) {
    return this.costumerService.update(+id, updateCostumerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.costumerService.remove(+id);
  }
}
