import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent {
  name: string = 'Ironman';
  age: number = 33;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getName(): string {
    return `${this.name} - ${this.age}`;
  }

  changeName(): void {
    this.name = 'Spider';
  }
  changeAge(): void {
    this.age = 14;
  }
}
