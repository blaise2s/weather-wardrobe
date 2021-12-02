import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { WeatherStateService } from './services/weather-state.service';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'ww-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherComponent implements OnInit {
  private _geolocationPosition: GeolocationPosition | undefined;
  state = this._weatherStateService.state();

  constructor(
    private readonly _weatherService: WeatherService,
    private readonly _weatherStateService: WeatherStateService
  ) {}

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition(geolocationPosition => {
      this._geolocationPosition = geolocationPosition;
      this._weatherService
        .getOneWeather(this._geolocationPosition)
        .subscribe(oneWeatherResponse => {
          this._weatherStateService.setState({
            loading: false,
            oneWeather: oneWeatherResponse,
          });
          console.log(this._weatherStateService.currentState());
        });
    });
  }
}
