import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateStaffDto {

    @IsBoolean()
    @IsOptional()
    active?: boolean;

    @IsString()
    @IsOptional()
    address?: string;

    @IsNumber()
    @IsOptional()
    age?: number;

    @IsString()
    @IsOptional()
    company_id?: string; // Nombre de la empresa a la que pertenece

    @IsOptional()
    elements?: string[]; // Lista de habilidades requeridas

    @IsNotEmpty()
    @IsEmail()
    email?: string;

    @IsString()
    id?: string;

    @IsBoolean()
    @IsOptional()
    legal_acceptance?: boolean;

    @IsBoolean()
    @IsOptional()
    legal_age?: boolean;

    @IsString()
    @IsOptional()
    names?: string;

    @IsString()
    @IsNotEmpty()
    password?: string;

    @IsString()
    @IsOptional()
    phone?: string;

    @IsString()
    @IsOptional()
    picture?: string;

    @IsString()
    @IsOptional()
    platform_phone?: string;

    @IsString()
    @IsOptional()
    platform?: string; // nequi daviplata 

// K: Es tasker, P: Es supplier, F: Edita staff, U: Edita Usuario, D: Edita PollGroup (directorio) R: edita poll resulto
    @IsOptional()
    rol?: string[]

    @IsString()
    @IsOptional()
    second_names?: string;

    @IsOptional()
    skills?: string[]; // Lista de habilidades requeridas

    @IsNumber()
    @IsOptional()
    stars?: number;

    @IsNumber()
    @IsOptional()
    studyLevel?: number; // 0: sin estudio; 1: colegio; 2: universitario;

    @IsString()
    @IsOptional()
    tag?: string; // Información no importante 1: edit; 2: delete;

}
