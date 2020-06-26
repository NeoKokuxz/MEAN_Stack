import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'Naoki'
  password = '123'

  constructor() { }

  ngOnInit(): void {
  }

  handleLogin(){
    console.log('Username: ' + this.username);
    console.log('Password: ' + this.password);
    
  }

}
