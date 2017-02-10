import { Component } from '@angular/core';

import { Hero } from '../services/hero';
import { HeroService } from '../services/hero.service';


@Component({
  selector: 'app-root',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [HeroService]
})
export class HeroesComponent {

  title = 'Title of Heros!';   
  heroes:  Hero[];
  selectedHero: Hero;  

  constructor(private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }


}
