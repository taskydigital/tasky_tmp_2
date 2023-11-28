/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type StaffDocument = HydratedDocument<Staff>;

@Schema()
export class Staff {

    @Prop()
    active?: boolean;

    @Prop()
    address?: string;

    @Prop()
    age?: number;

    @Prop()
    city?: string;

    @Prop()
    company_id?: string; // Nombre de la empresa a la que pertenece

    @Prop()
    elements?: string[]; // Lista de habilidades requeridas

    @Prop()
    email?: string;

    @Prop()
    id?: string;

    @Prop()
    legal_acceptance?: boolean;

    @Prop()
    legal_age?: boolean;

    @Prop()
    names?: string;

    @Prop()
    password?: string;

    @Prop()
    phone?: string;

    @Prop()
    picture?: string;

    @Prop()
    platform_phone?: string;

    @Prop()
    platform?: string; // nequi daviplata 

    @Prop()
    appoint?: string[];

    @Prop()
    rol?: string[]

    @Prop()
    second_names?: string;

    @Prop()
    skills?: string[]; // Lista de habilidades requeridas

    @Prop()
    stars?: number;

    @Prop()
    studyLevel?: number; // 0: sin estudio; 1: colegio; 2: universitario;

    @Prop()
    tag?: string; // Información no importante 1: edit; 2: delete;
}

export const StaffSchema = SchemaFactory.createForClass(Staff);
