import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Weather {
  description: string;
  icon: string;
  id: number;
  main: string;
}

export interface Condition {
  clouds: number;
  dew_point: number;
  dt: number;
  humidity: number;
  pressure: number;
  uvi: number;
  weather: Weather[];
  wind_deg: number;
  wind_gust: number;
  wind_speed: number;
}

export interface CurrentCondition {
  feels_like: number;
  temp: number;
  sunrise: number;
  sunset: number;
  visibility: number;
}

export interface DailyCondition extends Condition {
  feels_like: {
    day: number;
    eve: number;
    morn: number;
    night: number;
  };
  moon_phase: number;
  moonrise: number;
  moonset: number;
  pop: number;
  sunrise: number;
  sunset: number;
  temp: {
    day: number;
    eve: number;
    max: number;
    min: number;
    morn: number;
    night: number;
  };
}

export interface HourlyCondition extends Condition {
  feels_like: number;
  pop: number;
  temp: number;
  visibility: number;
}

export interface MinutelyCondition {
  dt: number;
  precipitation: number;
}

export interface OneWeather {
  current: CurrentCondition;
  daily: DailyCondition[];
  hourly: HourlyCondition[];
  lat: number;
  lon: number;
  minutely: MinutelyCondition[];
  timezone: string;
  timezone_offset: number;
}

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private readonly APP_ID = 'cb2cdc793e984d009abb03b70ebff2df';

  constructor(private readonly _http: HttpClient) {}

  getOneWeather(
    geolocationPosition: GeolocationPosition
  ): Observable<OneWeather> {
    return this._http.get<OneWeather>(
      'https://api.openweathermap.org/data/2.5/onecall',
      {
        params: {
          appid: this.APP_ID,
          lat: geolocationPosition.coords.latitude.toFixed(2),
          lon: geolocationPosition.coords.longitude.toFixed(2),
          units: 'imperial',
          lang: navigator.language,
        },
      }
    );
  }
}
