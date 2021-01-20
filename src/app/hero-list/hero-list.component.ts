import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hero } from '../hero.model';
import { heroes } from '../hero.data';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {

  heroes: Hero[] = [];
  orden: string = 'asc';
  @Input() id: number;
  @Input() name: string;
  @Input() team: string;
  @Input() seleccionado: boolean;

  @Output() datos = new EventEmitter<Hero>(null);

  constructor() {
    this.heroes = heroes;
   }

  ngOnInit(): void {
  }

  // metodo sobre el que actua la deteccion de cambios ( si cambia el valor de un heroe por su id )
  trackByHeroes(index: number, hero: Hero) {
    return hero.id;  // object identity
  }

  emit(hero: Hero): void {
    this.datos.emit(hero);

    for (let i = 0; i < heroes.length; i++) {
      heroes[i].seleccionado = false;
    }

    hero.seleccionado = true;
  }

  ordenar(): void {
    if (this.orden == 'asc') {
      this.orden = 'desc';
    } else {
      this.orden = 'asc';
    }
  }
}
