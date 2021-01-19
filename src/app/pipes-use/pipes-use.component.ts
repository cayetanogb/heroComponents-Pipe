import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-use',
  templateUrl: './pipes-use.component.html',
  styleUrls: ['./pipes-use.component.scss']
})
export class PipesUseComponent implements OnInit {

  heroes = ['Boothstomper', 'Drogfisher', 'Bloodyllips', 'Mr Bu Moverse'];
  today = new Date();
  hero = {
    names: {
      name: 'Boothstomper',
      realName: 'Alfie Best'
    },
    planet: 'Earth',
    color: 'cyan'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
