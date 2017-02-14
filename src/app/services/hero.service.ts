import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import 'rxjs/add/operator/map';

@Injectable()
export class HeroService {

	constructor(private http: Http){}

  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  getCharacters(){
		 return this.http.get('api/characters.json').map((response: Response)=> response.json().data);
	}

  getVehicles(){
		return this.http.get('api/vehicles.json').map((response: Response)=> response.json().data);
	}

 getConsole(){
 	console.log('this is called');
 }


  getMyHeroes(){
  	return this.http.get('https://mg-heros.firebaseio.com/').map(
  		(res: Response) => res.json()
  	);
  }

}