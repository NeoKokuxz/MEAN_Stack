import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { report } from 'process';
import { Router } from '@angular/router';

export class Todo {
  constructor(
    public id:number,
    public description:string,
    public done: boolean,
    public dueDate: Date
  ){

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})

export class ListTodosComponent implements OnInit {

  message : String

  todos : Todo[]
  //   new Todo(1, 'Code today', false, new Date() ),
  //   new Todo(2, 'Clean today', false, new Date() ),
  //   new Todo(3, 'Learn angular today', false, new Date() ),
  //   new Todo(4, 'Wash house today', false, new Date() ),
  //   new Todo(5, 'Drink Coffee today', false, new Date() )
  // ]

  //In order to access service
  //Inject the service in constructor
  constructor(private service: TodoDataService, private route:Router) { }

  ngOnInit(): void {
    this.getTodo()
  }

  deleteTodo(id){
    this.service.deleteTodoById('neo', id).subscribe(
      res => {
        this.message = `ID ${id} Delete Successful`
        this.getTodo();
      }
    )
  }

  updateTodo(id){
    this.route.navigate(['todos', id])
  }

  getTodo(){
    this.service.retrieveTodoData('neo').subscribe(
      res => {
        console.log(res);
        
        this.todos = res;
      }
    )
  }

  addTodo(){
    this.route.navigate(['todos', -1])
  }

}
