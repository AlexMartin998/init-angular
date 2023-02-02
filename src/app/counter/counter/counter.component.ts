import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  // templateUrl: '',
  template: `
    <h1>{{ title }}</h1>
    <hr />

    <h2>
      La base es: <strong>{{ base }}</strong>
    </h2>

    <!-- <button (click)="number = number + 1">+ 1;</button> -->
    <button (click)="acumulate(base)">+ {{ base }}</button>
    <span>{{ number }}</span>
    <button (click)="acumulate(-base)">- {{ base }}</button>
  `,
})
export class CounterComponent {
  title: string = 'Counter App';
  number: number = 10;
  base: number = 5;

  acumulate(value: number) {
    this.number += value;
  }
}
