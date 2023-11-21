import { Controller, Post, Body } from '@nestjs/common';
import { MailService } from './mail.service';
import { CreateEmailDto } from './dto/create-email.dto';
// import { UpdateEmailDto } from './dto/update-email.dto';

@Controller('email')
export class EmailController {
  constructor(private readonly mailService: MailService) {}

  @Post()
  defEmailHtml(@Body() createEmailDto: CreateEmailDto) {
    return this.mailService.defaultEmailHtml(createEmailDto);
  }

  /*
  @Post()
  create(@Body() createEmailDto: CreateEmailDto) {
    return this.mailService.create(createEmailDto);
  }

  @Get()
  findAll() {
    return this.mailService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mailService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmailDto: UpdateEmailDto) {
    return this.mailService.update(+id, updateEmailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mailService.remove(+id);
  }
  */
}
