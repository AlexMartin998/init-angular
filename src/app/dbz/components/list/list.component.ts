import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  constructor(private readonly dbzService: DbzService) {}

  get characterList(): Character[] {
    return this.dbzService.getAllCharacters();
  }

  onDeleteCharacter(id: string): void {
    this.dbzService.deleteCharacterById(id);
  }
}
