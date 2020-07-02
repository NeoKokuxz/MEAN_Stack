import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardCodedAuthService {

  constructor() { }

  //Create authentication 

  authenticate(username, password){
    if(username === 'naoki' && password === '123'){
      return true;
    }else {
      return false;
    }
  }
}
