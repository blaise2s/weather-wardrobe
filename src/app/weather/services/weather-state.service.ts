import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { OneWeather } from './weather.service';

export interface WeatherState {
  loading: boolean;
  oneWeather: OneWeather | undefined;
}

@Injectable({
  providedIn: 'root',
})
export class WeatherStateService {
  private _defaultState: WeatherState = {
    loading: true,
    oneWeather: undefined,
  };
  private _state = new BehaviorSubject<WeatherState>(this._defaultState);

  currentState(): WeatherState {
    return this._state.getValue();
  }

  state(): Observable<WeatherState> {
    return this._state.asObservable();
  }

  setState(state: Partial<WeatherState>): void {
    this._state.next({
      ...this.currentState(),
      ...state,
    });
  }
}
