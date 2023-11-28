/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
// import { OnStartEnd } from 'src/datatypes';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {

    @Prop()
    id: string;

    @Prop()
    description?: string;

    @Prop()
    name: string;

}

export const ProductSchema = SchemaFactory.createForClass(Product);