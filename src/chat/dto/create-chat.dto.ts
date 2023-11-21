import { IsBoolean, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateChatDto {

    @IsOptional()
    @IsNumber()
    date?: number;

    @IsOptional()
    @IsString()
    msg?: string; // Mensaje

    @IsOptional()
    @IsString()
    PollGrp_id?: string; // Si "all"

    @IsOptional()
    @IsNumber()
    pos?: number; // 1

    @IsOptional()
    @IsString()
    staffId?: string;

    @IsOptional()
    @IsString()
    type?: string; // T: tasker, W: Window, D: Comando la información viene en el mensaje

    @IsOptional()
    @IsBoolean()
    visible?: boolean;

    /*
    @IsNotEmpty()
    @IsString()
    pollGrp_Id: string;

    @IsNotEmpty()
    @IsString()
    pollResult_Id: string;

    @IsNotEmpty()
    @IsString()
    pollStaff_Id: string;

    @IsNotEmpty()
    @IsString()
    socket_id: string;

    @IsNotEmpty()
    @IsString()
    rol: string; // C: Controler T: Tasker, M: Master

    @IsOptional()
    chats: object[]
    */
    
}