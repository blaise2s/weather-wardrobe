import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToolbarModule } from '../toolbar/toolbar.module';
import { WeatherModule } from '../weather/weather.module';
import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [LayoutComponent],
  exports: [LayoutComponent],
  imports: [CommonModule, RouterModule, ToolbarModule, WeatherModule],
})
export class LayoutModule {}
