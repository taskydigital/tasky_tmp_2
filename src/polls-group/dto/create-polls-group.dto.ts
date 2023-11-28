import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
// import { OnStartEnd } from "src/datatypes";

export class CreatePollsGroupDto {
    
    @IsOptional()
    @IsBoolean()
    active?: boolean;

    @IsOptional()
    @IsNumber()
    age_from?: number;

    @IsOptional()
    @IsNumber()
    age_to?: number;

    @IsOptional()
    @IsNumber()
    age?: number;

    @IsNotEmpty()
    children: object[];

    @IsOptional()
    @IsString()
    client_id?: string; // Si es empresa

    @IsOptional()
    @IsString()
    client_logo?: string;

    @IsOptional()
    @IsString()
    contact_name?: string;

    @IsOptional()
    controlList?: object[];

    @IsOptional()
    @IsNumber()
    date_end?: number;

    @IsOptional()
    @IsNumber()
    date_ini?: number;

    @IsOptional()
    @IsNumber()
    description?: string;

    @IsNotEmpty()
    @IsBoolean()
    done: boolean; // Se usa en el tasker como referencia

    @IsOptional()
    @IsNumber()
    endtimer?: number; // Duración de la entrevista

    @IsOptional()
    @IsNumber()
    executed?: number; // Ejecutadas

    @IsOptional()
    @IsString()
    flags?: string; // Por ejemplo DEL significa borrar

    /*
    @IsNotEmpty()
    @IsBoolean()
    fromIndex: boolean;
    */
    @IsOptional()
    @IsString()
    geolocation?: string[];

    @IsNotEmpty()
    @IsString()
    id: string;

    @IsOptional()
    @IsString()
    model_name?: string; // Si es empresa

    @IsNotEmpty()
    @IsString()
    name: string; // Si empresa: Nombre empresa

    @IsOptional()
    onEnd?: object;

    @IsOptional()
    onStart?: object;

    @IsOptional()
    @IsString()
    parentRootNodeId?: string;

    @IsNotEmpty()
    @IsNumber()
    payxpoll: number; // Pago por encuesta

    @IsOptional()
    @IsString()
    phones?: string;

    @IsNotEmpty()
    pollList: object[];

    @IsOptional()
    @IsString()
    pollResult_id?: string;
    
    @IsNotEmpty()
    @IsBoolean()
    ref: boolean; // En true consultar la base de datos

    @IsNotEmpty()
    skills: string[]; // Lista de habilidades requeridas

    @IsOptional()
    @IsNumber()
    stars?: number; // Minimo de estrellas del staff

    @IsOptional()
    @IsNumber()
    studyLevel?: number; // 0: sin estudio; 1: colegio; 2: universitario;

    @IsOptional()
    taskerList: string[]; // Los Ids del staff

    @IsOptional()
    taskerNameList: string[]; // Los Ids del staff

    @IsOptional()
    @IsNumber()
    total?: number; // Total de encuestas requeridas

    @IsNotEmpty()
    @IsBoolean()
    exported: boolean;
    
}
