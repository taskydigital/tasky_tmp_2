import { Injectable } from '@nestjs/common';
import { CreateCostumerDto } from './dto/create-costumer.dto';
import { UpdateCostumerDto } from './dto/update-costumer.dto';
import { Workbook } from 'exceljs';
import { Costumer, CostumerDocument } from './schemas/costumer.schema';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CostumerService {

  constructor(@InjectModel(Costumer.name) private costumerModel: Model<CostumerDocument>,
    private jwtAuthServ: JwtService) { }

  create(createCostumerDto: CreateCostumerDto) {
    return 'This action adds a new costumer';
  }

  async excel2Costum(file: Express.Multer.File) {
    // console.log(file);
    const thisArray: Costumer[] = [];
    // const pictArray: string[] = [];
    const workbook = new Workbook();
    await workbook.xlsx.readFile(file.path).then((workbook) => {
      const worksheetStaff = workbook.getWorksheet("staff");
      const headerRows = 2;
      const staffRowC = worksheetStaff.actualRowCount; // determine the range of populated data
      for (let i = headerRows; i <= staffRowC; i++) {
        const formData = {
          'name': worksheetStaff.getRow(i).getCell(1).value,
          'id': worksheetStaff.getRow(i).getCell(2).value,
          'linkup_1': worksheetStaff.getRow(i).getCell(3).value,
          'phone_1': worksheetStaff.getRow(i).getCell(4).value,
          'linkup_2': worksheetStaff.getRow(i).getCell(5).value,
          'phone_2': worksheetStaff.getRow(i).getCell(6).value,
          'address': worksheetStaff.getRow(i).getCell(7).value,
          'email': worksheetStaff.getRow(i).getCell(8).value,
        }
        thisArray.push(formData as unknown as Costumer);
      }
    });
    await this.costumerModel.deleteMany();
    await this.costumerModel.insertMany(thisArray).then((result: any) => {
      if (result.length > 0) {
        return { status: 200, message: 'ok' }
      }
    });
  }

  findAll() {
    return `This action returns all costumer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} costumer`;
  }

  update(id: number, updateCostumerDto: UpdateCostumerDto) {
    return `This action updates a #${id} costumer`;
  }

  remove(id: number) {
    return `This action removes a #${id} costumer`;
  }
}
