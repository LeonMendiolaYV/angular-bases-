import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-heroes-list',
  standalone: true,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  imports: [CommonModule],
  
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman','Ironman','Hulk','She Hulk', 'Thor'];
  public deletedHero?: string;


   removeLastHero():void {
    this.deletedHero = this.heroNames.pop();
  }
   


}
