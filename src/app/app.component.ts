import { Component } from '@angular/core';
//import { CounterComponent } from './counter/counter.component';
import { HeroComponent } from './heroes/hero/hero.component';
import { ListComponent } from './heroes/list/list.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeroComponent,ListComponent],

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string ='Mi primera app de angular';
  
}
