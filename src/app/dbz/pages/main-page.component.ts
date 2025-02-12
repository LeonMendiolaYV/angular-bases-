import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';
import { ListComponent } from '../components/list/list.component';
import { AddCharacterComponent } from '../components/add-character/add-character.component';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  standalone: true,
  imports: [ListComponent,AddCharacterComponent], 
})
export class MainPageComponent  {

  constructor( private dbzService: DbzService ) {}

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacter( id: string ):void {
    this.dbzService.deleteCharacterById( id );
  }

  onNewCharacter( character: Character ):void {
    console.log('Nuevo personaje recibido:', character);
    this.dbzService.addCharacter( character );
  }

}
