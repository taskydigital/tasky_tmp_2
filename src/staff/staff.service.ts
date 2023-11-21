import { HttpException, Injectable } from '@nestjs/common';
import { CreateStaffDto } from './dto/create-staff.dto';
import { UpdateStaffDto } from './dto/update-staff.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Staff } from './schemas/staff.schema';
import { Model } from 'mongoose';
import { hash, compare } from 'bcrypt'
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class StaffService {

  constructor(@InjectModel(Staff.name) private staffModel: Model<Staff>,
    private jwtAuthServ: JwtService) { }

  async create(createStaffDto: CreateStaffDto): Promise<Staff> {
    const createdStaff = new this.staffModel(createStaffDto);
    return createdStaff.save();
  }

  async login(updateStaffDto: CreateStaffDto) {
    const { email, password } = updateStaffDto;
    /*
    Es el correo maestro. Puede cambiarse desde env. Por el momento crea el campo si no existe
    en el futuro crea el campo y envía correo con nueva constraseña
    */
    if (process.env.MASTER_EMAIL === email) {
      updateStaffDto.names = process.env.MASTER_EMAIL;
      updateStaffDto.active = true;
      // updateStaffDto.password = '';
      updateStaffDto.rol = ['K','P','F','U','D','KP'];
      // let id = ObjectId  isValidObjectId(process.env.MASTER_EMAIL);
      const query = { email: process.env.MASTER_EMAIL }
      // Por ahora agrego password pero en el futuro podrá ser solo el correo
      updateStaffDto.password = 'abcd0123';
      const plainToHash = await hash(password, Number(process.env.HASH));
      updateStaffDto = { ...updateStaffDto, password: plainToHash };
      const options = { upsert: true, new: true, setDefaultsOnInsert: true };
      updateStaffDto = await this.staffModel.findOneAndUpdate(query, updateStaffDto, options);
      // updateStaffDto.password = 'ABCDEFGH'; // Ahora pasa el proceso
      // return this. update(id, updateStaffDto);
    }
    // ......................
    // return await this.staffModel.findOne({ email: email }).exec();

 
    // const {email, password} = updateStaffDto;
    const userStaff = await this.staffModel.findOne({ email });
    if (!userStaff) throw new HttpException('USER_NOT_FOUND', 404);
    // Si está bacío Asigna el nuevo password
    if (!userStaff.password || userStaff.password.length === 0) {
      if (!(updateStaffDto.password && updateStaffDto.password.length >= 4)) throw new HttpException('PASSWORD_NOT_PROVIDED', 405);
      const plainToHash = await hash(password, Number(process.env.HASH));
      updateStaffDto = { ...updateStaffDto, password: plainToHash };
      return this.staffModel.findByIdAndUpdate(userStaff._id, updateStaffDto);
    }
    const checkPass = await compare(password, userStaff.password);
    if (!checkPass) throw new HttpException('INVALID_PASSWORD', 403);

    const payload = { id: userStaff._id, name: userStaff.names, rol: userStaff.rol }
//     const token = await this.jwtAuthServ.signAsync(payload);
    const token = this.jwtAuthServ.sign(payload);
    const data = { userStaff, token };
    return data;
  }

  // ........................................
  async findByActive(active: boolean): Promise<Staff[]> {
    return await this.staffModel.find({ active }).exec();
  }

  async findAll(): Promise<Staff[]> {
    // paginated
    return await this.staffModel.find().exec();
  }

  async findByStars(stars: number): Promise<Staff[]> {
    // paginated
    return await this.staffModel.find({ stars }).exec();
  }

  // ......................................................

  async findOne(id: string): Promise<Staff> {
    return await this.staffModel.findById(id).exec();
  }

  async update(id: string, updateStaffDto: UpdateStaffDto) {
    return await this.staffModel.findByIdAndUpdate(id, updateStaffDto, { new: true });
  }

  async remove(id: string) {
    return await this.staffModel.findByIdAndRemove(id);
  }
}
