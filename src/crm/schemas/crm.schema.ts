/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
// import { OnStartEnd } from 'src/datatypes';

export type CRMDocument = HydratedDocument<CRM>;

@Schema()
export class CRM {

    @Prop()
    costum_id?: string;

    @Prop()
    costum_name?: string;

    @Prop()
    date_end: number;

    @Prop()
    date_ini: number;

    @Prop()
    pollgrp_name: string;

    @Prop()
    pollresult_id: string;

    @Prop()
    prod_id?: string;

    @Prop()
    prod_name?: string;

    @Prop()
    staff__id: string;

    @Prop()
    staff_name: string;
}

export const CRMSchema = SchemaFactory.createForClass(CRM);