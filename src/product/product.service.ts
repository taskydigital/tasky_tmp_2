import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product, ProductDocument } from './schemas/product.schema';
import { Workbook } from 'exceljs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class ProductService {

  constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>,
    private jwtAuthServ: JwtService) { }

  create(createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }

  async excel2Product(file: Express.Multer.File) {
    // console.log(file);
    const thisArray: Product[] = [];
    // const pictArray: string[] = [];
    const workbook = new Workbook();
    await workbook.xlsx.readFile(file.path).then((workbook) => {
      const worksheetStaff = workbook.getWorksheet("staff");
      const headerRows = 2;
      const staffRowC = worksheetStaff.actualRowCount; // determine the range of populated data
      for (let i = headerRows; i <= staffRowC; i++) {
        const formData = {
          'code': worksheetStaff.getRow(i).getCell(1).value,
          'name': worksheetStaff.getRow(i).getCell(2).value,
          'description': worksheetStaff.getRow(i).getCell(3).value,
        }
        thisArray.push(formData as unknown as Product);
      }
    });
    await this.productModel.deleteMany();
    await this.productModel.insertMany(thisArray).then((result: any) => {
      if (result.length > 0) {
        return { status: 200, message: 'ok' }
      }
    });

  }

  findAll() {
    return `This action returns all product`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
