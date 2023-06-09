import { IsArray, IsNumber, IsOptional } from 'class-validator';
import { ActiveTime } from 'src/utils';

export class LocationOptions {
  latitude: number;
  longitude: number;
  openTimes: ActiveTime[];
  time: ActiveTime;

  constructor(latitude: number, longitude: number, openTimes: ActiveTime[], time: ActiveTime) {
    this.latitude = latitude;
    this.longitude = longitude;
    this.openTimes = openTimes;
    this.time = time;
  }

  set times(time: ActiveTime) {
    this.time = time;
  }

  get location() {
    return { latitude: this.latitude, longitude: this.longitude };
  }
}

export const getLocation = (latitude: number, longitude: number, openTimes: ActiveTime[], time: ActiveTime) => {
  return new LocationOptions(latitude, longitude, openTimes, time);
};

export class Location {
  @IsNumber()
  latitude: number;

  @IsNumber()
  longitude: number;

  @IsArray()
  openTimes: ActiveTime[];

  @IsOptional()
  time: ActiveTime;
}
