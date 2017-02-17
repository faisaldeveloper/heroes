import { Component } from '@angular/core';

import { Hero } from '../services/hero';
import { HeroService } from '../services/hero.service';
import { TestService } from '../services/test.service';
//import 'rxjs/add/operator/toPromise';
declare var firebase: any;

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
  chTitle = 'From parent';  
  name: string;

  constructor(private heroService: HeroService, private testService: TestService) { }

  ngOnInit(): void {

    this.getHeroesFromLocalAPI2();

    this.name = this.testService.getName();
        
    /*this.getHeroes();
    this.getHerosFromFireBase();
    this.getHeroesFromLocalAPI();
    this.getHeroesFromLocalAPI2(); */
    //this.fbGetData();
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);     
  }

  getHeroesFromLocalAPI(): void{
    this.heroService.getVehicles().subscribe(heroes => this.heroes = heroes);
  }

  getHeroesFromLocalAPI2(): void{
    this.heroService.getCharacters().subscribe(heroes => this.heroes = heroes);
  }

  //
  getHerosFromFireBase():void{
    this.heroService.getMyHeroes().subscribe(heroes => this.heroes = heroes);
  }

  test(): void{
    this.heroService.getConsole();
  }

 /* getSearch(): void{
    this.heroService.search('love').then(data => console.log(data.json()));
  }
*/
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  fbGetData(){
    var ob: Hero = {id:11,  name:"Mr. Nice"};   
    this.heroes.push(ob);
    /*firebase.database().ref('/').on('child_added', (snapshot) => {      
      this.heroes.push(snapshot.val());
      console.log(snapshot.val())
    })*/
  }


}
