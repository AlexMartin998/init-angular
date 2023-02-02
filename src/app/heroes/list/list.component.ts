import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Saitama'];
  deletedHero: string = '';

  deleteHeroByID(id: number) {
    // this.heroes = this.heroes.filter((_item, i) => i !== id - 1);

    this.deletedHero = this.heroes.pop() || '';
  }
}
