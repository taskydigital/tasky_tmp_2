import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreatePollresultDto {
    // sent: boolean;

    @IsOptional()
    @IsString()
    chats?: object[];

    @IsOptional()
    crm?: object;

    @IsOptional()
    @IsNumber()
    date_end?: number;

    @IsNotEmpty()
    @IsNumber()
    date_end_schedule: number;

    @IsOptional()
    @IsNumber()
    date_ini?: number;

    @IsNotEmpty()
    @IsNumber()
    date_ini_schedule: number;

    @IsNotEmpty()
    @IsBoolean()
    ended: boolean;

    @IsOptional()
    @IsString()
    geoLocEnd?: string;

    @IsOptional()
    @IsString()
    geoLocStart?: string;

    @IsOptional()
    @IsBoolean()
    newChat?: boolean;

    @IsOptional()
    @IsString()
    platform?: string;

    @IsNotEmpty()
    @IsString()
    pollGrpLogo: string;

    @IsNotEmpty()
    @IsString()
    pollGrpName: string;

    @IsNotEmpty()
    @IsString()
    pollGrp_id: string; // _id del PollGroups

    @IsOptional()
    @IsNumber()
    price?: number;

    @IsOptional()
    @IsString()
    staff__id?: string; // _id del staff

    @IsOptional()
    @IsString()
    staffId?: string;

    @IsOptional()
    @IsString()
    staff_name?: string;

    @IsOptional()
    @IsString()
    staff_picture?: string;

    @IsOptional()
    @IsNumber()
    staff_star?: number;

    @IsNotEmpty()
    @IsNumber()
    status_date: number;

    @IsNotEmpty()
    @IsNumber()
    status: number; // 0: Ninguno, 1: Seleccionado, 2: En proceso, 3: Finalizado 4:Aprobado 5:pagado

    @IsOptional()
    values?: any;
}
