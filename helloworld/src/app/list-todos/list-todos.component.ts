import { Component, OnInit } from '@angular/core';

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

  todos = [
    new Todo(1, 'Code today', false, new Date() ),
    new Todo(2, 'Clean today', false, new Date() ),
    new Todo(3, 'Learn angular today', false, new Date() ),
    new Todo(4, 'Wash house today', false, new Date() ),
    new Todo(5, 'Drink Coffee today', false, new Date() )
  ]
  todo = {
    id : 1,
    description: 'Things to do'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
