import { Component, Input, OnInit } from '@angular/core';
import { heroes } from '../hero.data';
import { Hero } from '../hero.model';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  heroes: Hero[] = [];
  @Input() name: string;
  @Input() team: string;

  constructor() {
    this.heroes = heroes;
  }

  ngOnInit(): void {
  }

}
