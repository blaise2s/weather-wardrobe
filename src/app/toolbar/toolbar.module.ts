import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ToolbarComponent } from './toolbar.component';

@NgModule({
  declarations: [ToolbarComponent],
  exports: [ToolbarComponent],
  imports: [CommonModule, MatToolbarModule],
})
export class ToolbarModule {}
