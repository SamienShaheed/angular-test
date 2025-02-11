import { Component, inject, OnInit, signal } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from '../model/todo.type';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-todo',
  imports: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent implements OnInit{
  todoService = inject(TodoService);
  todoItem = signal<Array<Todo>>([]);

  ngOnInit(): void {
    this.todoService.getTodosFromAPI().pipe(
      catchError((err) => {
        console.log(err);
        throw err
      })
    ).subscribe((todos) => {
      this.todoItem.set(todos);
    })
  }
} 
