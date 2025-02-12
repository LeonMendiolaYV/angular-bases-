import { Component } from '@angular/core';
//import { CounterComponent } from './counter/counter.component';
//import { HeroComponent } from './heroes/hero/hero.component';
//import { ListComponent } from './heroes/list/list.component';
import { MainPageComponent } from './dbz/pages/main-page.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MainPageComponent],

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {

  public title: string = 'Hola Mundo';


}


