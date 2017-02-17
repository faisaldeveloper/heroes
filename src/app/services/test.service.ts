import { Injectable } from '@angular/core';


@Injectable()
export class TestService {

  public name:string;

	constructor(){
    this.name = 'test';
  }

  getName(){
    return this.name;
  }

  setName(name){
    this.name = name;
  }
  

}