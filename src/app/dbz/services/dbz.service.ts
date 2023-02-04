import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({ providedIn: 'root' })
export class DbzService {
  constructor() {}

  public characters: Character[] = [
    { id: uuid(), name: 'Krillin', power: 1200 },
    { id: uuid(), name: 'Goku', power: 21000 },
    { id: uuid(), name: 'Vegeta', power: 12000 },
  ];

  getAllCharacters(): Character[] {
    return [...this.characters];
  }

  addNewCharacter(character: Character): void {
    this.characters.push({ ...character, id: uuid() });
  }

  /* onDeleteById(id: number): void {
    // this.characters = this.characters.filter((_ch, i) => i !== id);
    this.characters.splice(id, 1); // mas eficiente xq no genera otro arr solo con arrs simples
  } */
  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter((ch) => ch.id !== id);
  }
}
