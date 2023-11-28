import { Module } from '@nestjs/common';
import { CostumerService } from './costumer.service';
import { CostumerController } from './costumer.controller';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Costumer, CostumerSchema } from './schemas/costumer.schema';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([{ name: Costumer.name, schema: CostumerSchema }]),],
  controllers: [CostumerController],
  providers: [CostumerService],
})
export class CostumerModule {}
