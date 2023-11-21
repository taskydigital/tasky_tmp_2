/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
// import { OnStartEnd } from 'src/datatypes';

export type CompanyDocument = HydratedDocument<Company>;

@Schema()
export class Company {

    @Prop()
    id: string;

    @Prop()
    name?: string;

    @Prop()
    pollgrp_ctv?: number;

    @Prop()
    site?: string;

    @Prop()
    phone?: string;

    @Prop()
    address?: string;

    @Prop()
    email?: string;
}

export const CompanySchema = SchemaFactory.createForClass(Company);
