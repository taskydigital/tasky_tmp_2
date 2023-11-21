import { Module } from '@nestjs/common';
import { StaffService } from './staff.service';
import { StaffController } from './staff.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Staff, StaffSchema } from './schemas/staff.schema';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, }),
    MongooseModule.forFeature([{ name: Staff.name, schema: StaffSchema }]),
    JwtModule.register({global: true, secret: process.env.JWT_SEED, signOptions: { expiresIn: '2h' }, }),
  ],
  controllers: [StaffController],
  providers: [StaffService, JwtStrategy],
})
export class StaffModule {}
