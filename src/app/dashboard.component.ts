import { Component, OnInit  } from '@angular/core';

import { Hero } from './services/hero';
import { HeroService } from './services/hero.service';
import { TestService } from './services/test.service';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls:   ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit { 

heroes: Hero[] = [];
name: string;

  constructor(private heroService: HeroService, private testService: TestService) { }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));

      this.testService.setName('Faisal');
      this.name = this.testService.getName();
  }

}