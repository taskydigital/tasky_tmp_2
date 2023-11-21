import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateCompanyDto {
    

    @IsString()
    @IsNotEmpty()
    id: string;

    @IsString()
    @IsOptional()
    name?: string;

    @IsNumber()
    @IsOptional()
    pollgrp_ctv?: number;

    @IsOptional()
    site?: string;

    @IsOptional()
    phone?: string;

    @IsOptional()
    address?: string;

    @IsOptional()
    @IsEmail()
    email?: string;
}
