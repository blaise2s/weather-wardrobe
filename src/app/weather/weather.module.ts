import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { WeatherComponent } from './weather.component';

@NgModule({
  declarations: [WeatherComponent],
  exports: [WeatherComponent],
  imports: [CommonModule, MatProgressSpinnerModule, MatCardModule],
})
export class WeatherModule {}
