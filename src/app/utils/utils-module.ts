import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NettoPipe } from './pipes/netto-pipe';

@NgModule({
  declarations: [NettoPipe],
  imports: [CommonModule],
  exports: [NettoPipe],
})
export class UtilsModule {}
