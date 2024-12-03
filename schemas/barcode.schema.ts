import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BarcodeDocument = HydratedDocument<Barcode>;

@Schema()
export class Barcode {
  @Prop()
  data: string; // barcode data
  @Prop()
  type: string; // barcode type (e.g. 'code128', QR code)
  @Prop()
  barcodePath: string;
}
export const BarcodeSchema = SchemaFactory.createForClass(Barcode);
