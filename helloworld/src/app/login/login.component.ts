import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { HardCodedAuthService } from '../service/hard-coded-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = ''
  password = ''
  errorMessage = 'Invalid credentials'
  invalidLogin = false

  //Router
  //Angular.giveMeRouter

  //Dependency Injection 
  constructor(private router: Router, public HAS : HardCodedAuthService) { }

  ngOnInit(): void {
  }

  handleLogin(){
    // console.log('Username: ' + this.username);
    // console.log('Password: ' + this.password);

    //Pass in authenication login, if true pass routing
    if(this.HAS.authenticate(this.username, this.password)){
      this.invalidLogin = false;
      //Passing in welcome route
      this.router.navigate(['welcome', this.username])
    } else {
      this.invalidLogin = true;
    }
  }

}
