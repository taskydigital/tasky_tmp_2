import { PartialType } from '@nestjs/swagger';
import { CreatePollsGroupDto } from './create-polls-group.dto';

export class UpdatePollsGroupDto extends PartialType(CreatePollsGroupDto) {}
