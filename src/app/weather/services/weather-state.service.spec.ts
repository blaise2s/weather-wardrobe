import { TestBed } from '@angular/core/testing';
import { WeatherStateService } from './weather-state.service';

describe('WeatherStateService', () => {
  let service: WeatherStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
