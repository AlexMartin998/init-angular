import { NgModule } from '@angular/core';

import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [CounterComponent],

  // No lo necesitamos xq No estamos usando  'Directivas'  de Angular como el  *ngFor/*ngIf
  // imports: [CommonModule],

  exports: [CounterComponent],
})
export class CounterModule {}
