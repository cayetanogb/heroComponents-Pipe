import { Component, OnInit, Output } from '@angular/core';
import { Hero } from '../hero.model';
import { heroes } from '../hero.data';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {

  heroes: Hero[] = [];

  constructor() {
    this.heroes = heroes;
   }

  ngOnInit(): void {
  }

  // metodo sobre el que actua la deteccion de cambios ( si cambia el valor de un heroe por su id )
  trackByHeroes(index: number, hero: Hero) {
    return hero.id;  // object identity
  }

  heroeSeleccionado(hero: Hero): void {
    for (let i = 0; i < heroes.length; i++) {
      if (heroes[i].seleccionado === true) {
        this.heroes[i].seleccionado = false;
      }
    }
    
    const encontrado = this.heroes.findIndex(heroe => heroe.id === hero.id);

    if (encontrado >= 0) {
      hero.seleccionado = true;
    }
  }

  detallesHero(hero: Hero): void {

  }

  ordenar(): void {
    this.heroes.sort(function (a, b) {
      switch (true) {
        case a.team>b.team:
          return 1;
          break;
        case a.team<b.team:
          return -1;
          break;
        default:
          return 0;
          break;
      }
    });
  }
}
