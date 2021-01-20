import { Component } from '@angular/core';
import { Hero } from './hero.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ch04-enhanceComponents';

  heroe: Hero;

  recibe(hero: Hero): void {
    this.heroe = hero;
  }
}
