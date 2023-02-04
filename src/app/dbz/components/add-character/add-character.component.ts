import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css'],
})
export class AddCharacterComponent {
  public character: Character = { id: '', name: '', power: 0 };

  constructor(private readonly dbzService: DbzService) {}

  addCharacter(): void {
    if (this.character.name.length <= 0) return;

    this.dbzService.addNewCharacter(this.character);

    this.character = { id: '', name: '', power: 0 };
  }
}
