import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateProductDto {

    @IsNotEmpty()
    @IsString()
    id: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsNotEmpty()
    @IsString()
    name: string;
}
