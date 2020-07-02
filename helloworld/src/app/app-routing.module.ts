import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';

//Path is after the address
//Example: localhost:4200/login or 4200/welcome
const routes: Routes = [
  //Default path to login
  {
    path:'', component: LoginComponent
  },
  {
    path:'welcome/:name', component: WelcomeComponent, canActivate: [RouteGuardService]
  }, 
  {
    path:'login', component: LoginComponent
  },
  {
    path:'todos', component: ListTodosComponent, canActivate: [RouteGuardService]
  },
  {
    path:'logout', component: LogoutComponent, canActivate: [RouteGuardService]
  },
  {
    //'**' means anything else, route to this component
    path:'**', component: ErrorComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
