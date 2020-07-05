import { Injectable } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { HttpHeaders, HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http : HttpClient
  ) { }


  executeHelloWorldBeanService() {
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
  }

  executeHelloWorldNameService( name : String){
    return this.http.get<HelloWorldName>(`http://localhost:8080/hello-world/${name}`);
  }
}

export class HelloWorldBean {
  constructor(public message:String){

  }
}

export class HelloWorldName {
  constructor(public message: String){

  }
}