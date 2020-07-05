import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  //Inorder to access service
  //First inject HttpClient
  constructor(private http: HttpClient ) { }

  //Create method to retrieve data
  //Todo from service needs username para
  retrieveTodoData(username:String){
    //Use http to establish the connection
    //get classobject that contain the data
    //then the url to access via http connection
    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`);
  }

  //Delete method to delete todo by id
  deleteTodoById(username, id){
    return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`);
  }

  retrieveTodo(username, id){
    return this.http.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`);
  }

}

// //Create todoData class to hold the incoming response data
// export class todoData {
//   //Constructor for class
//   constructor(public name:String){

//   }

