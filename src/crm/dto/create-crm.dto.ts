import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateCrmDto {

    @IsOptional()
    @IsString()
    costum_id?: string;

    @IsOptional()
    @IsString()
    costum_name?: string;

    @IsNotEmpty()
    @IsNumber()
    date_end: number;

    @IsNotEmpty()
    @IsNumber()
    date_ini: number;

    @IsNotEmpty()
    @IsString()
    pollgrp_name: string;

    @IsNotEmpty()
    @IsString()
    pollresult_id: string;

    @IsOptional()
    @IsString()
    prod_id?: string;

    @IsOptional()
    @IsString()
    prod_name?: string;

    @IsNotEmpty()
    @IsString()
    staff__id: string;

    @IsNotEmpty()
    @IsString()
    staff_name: string;
}
