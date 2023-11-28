import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateCostumerDto {

    @IsOptional()
    @IsString()
    address?: string;

    @IsOptional()
    @IsString()
    email?: string;

    @IsNotEmpty()
    @IsString()
    id: string;

    @IsOptional()
    @IsString()
    linkup_1?: string;

    @IsOptional()
    @IsString()
    linkup_2?: string;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    phone_1?: string;

    @IsOptional()
    @IsString()
    phone_2?: string;
}
