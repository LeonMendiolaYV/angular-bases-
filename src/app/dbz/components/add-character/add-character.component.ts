import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css'],
  standalone: true,
  imports:  [FormsModule]
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  };

  emitCharacter():void {
    console.log('Emitiendo personaje:', this.character);
     if (this.character.name.trim().length === 0) return;
       this.onNewCharacter.emit(this.character);
       console.log('Personaje emitido:', this.character);
       this.character = { name: '', power: 0 };
   
  }
  addCharacter(): void {
    console.log('Character added:', this.character);
  }

}
