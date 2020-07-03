import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name = ''

  welcomeMessage = ''

  //ActivatedRoute
  constructor(private route:ActivatedRoute, private service : WelcomeDataService ) { }

  ngOnInit(): void {

    this.name = this.route.snapshot.params['name']
    
  }

  //Get Message from rest server
  getWelcomeMessage(){
    // console.log( this.service.executeHelloWorldBeanService() );
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  //Handle success response from service
  handleSuccessulResponse(response){
    console.log(response);
    this.welcomeMessage = response.message;
    
  }

  //Handle error message from service
  handleErrorResponse(error){
    this.welcomeMessage = error.message;
  }

}
