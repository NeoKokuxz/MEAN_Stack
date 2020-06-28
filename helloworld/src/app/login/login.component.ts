import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

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
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleLogin(){
    // console.log('Username: ' + this.username);
    // console.log('Password: ' + this.password);
    if(this.username === 'naoki' && this.password === '123'){
      this.invalidLogin = false;
      //Passing in welcome route
      this.router.navigate(['welcome', this.username])
    } else {
      this.invalidLogin = true;
    }
  }

}
