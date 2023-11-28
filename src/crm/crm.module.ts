import { Module } from '@nestjs/common';
import { CrmService } from './crm.service';
import { CrmController } from './crm.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CRM, CRMSchema } from './schemas/crm.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: CRM.name, schema: CRMSchema }])
  ],
  controllers: [CrmController],
  providers: [CrmService],
  exports: [CrmService]
})
export class CrmModule {}
