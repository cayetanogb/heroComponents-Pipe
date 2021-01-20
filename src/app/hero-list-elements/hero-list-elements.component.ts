import { Component, Input, OnInit } from '@angular/core';
import { heroes } from '../hero.data';
import { Hero } from '../hero.model';

@Component({
  selector: 'app-hero-list-elements',
  templateUrl: './hero-list-elements.component.html',
  styleUrls: ['./hero-list-elements.component.scss']
})
export class HeroListElementsComponent implements OnInit {

  @Input() listaHeroes: Hero[];
  muestra: string = 'tabla';
  loading: boolean = false;

  constructor() {
    this.listaHeroes = heroes;
  }

  ngOnInit(): void {
    setInterval(() => {
      this.loading = false;
    }, 4000);

    this.loading = true;
  }

  mostrarTabla(): void {
    this.muestra = 'tabla';
  }

  mostrarCard(): void {
    this.muestra = 'card';
  }
}
