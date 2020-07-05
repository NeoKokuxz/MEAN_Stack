import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id:number

  todo:Todo

  name:String

  constructor(
    private todoService: TodoDataService,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

    this.todoService.retrieveTodo('Neo', this.id).subscribe(
      
        data => this.todo = data
    
    )
  }

}