/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
// import { OnStartEnd } from 'src/datatypes';

export type CostumerDocument = HydratedDocument<Costumer>;

@Schema()
export class Costumer {

    @Prop()
    address?: string;

    @Prop()
    email?: string;

    @Prop()
    id: string;

    @Prop()
    linkup_1?: string;

    @Prop()
    linkup_2?: string;

    @Prop()
    name: string;

    @Prop()
    phone_1?: string;

    @Prop()
    phone_2?: string;

}

export const CostumerSchema = SchemaFactory.createForClass(Costumer);