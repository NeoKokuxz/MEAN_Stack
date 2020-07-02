import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardCodedAuthService {

  constructor() { }

  //Create authentication 

  authenticate(username, password){
    if(username === 'naoki' && password === '123'){
      sessionStorage.setItem('authenticateUser', username);
      return true;
    }else {
      return false;
    }
  }

  isUserLogin(){
    let user = sessionStorage.getItem('authenticateUser');
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem('authenticateUser');
  }
}
