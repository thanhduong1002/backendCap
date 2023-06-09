import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { OpeningHours } from 'src/utils';

export type LocationDocument = HydratedDocument<Location>;

@Schema({ timestamps: true })
export class Location {
  @Prop()
  name: string;

  @Prop()
  overview: string;

  @Prop()
  weekday_text: [];

  @Prop({ type: Object })
  opening_hours: OpeningHours;

  @Prop()
  formatted_address: string;

  @Prop()
  latitude: number;

  @Prop()
  longitude: number;

  @Prop()
  reviews: [];

  @Prop()
  types: [];

  @Prop()
  user_ratings_total: number;
}

export const LocationSchema = SchemaFactory.createForClass(Location);
