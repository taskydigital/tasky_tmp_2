import { PartialType } from '@nestjs/swagger';
import { CreatePollresultDto } from './create-pollresult.dto';

export class UpdatePollresultDto extends PartialType(CreatePollresultDto) {}
