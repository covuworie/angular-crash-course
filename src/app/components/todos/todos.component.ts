import { Component, OnInit } from '@angular/core';
import ITodoData from 'src/app/models/TodoData';
import ITodo, { Todo } from '../../models/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  public todos: ITodo[];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((todos) => {
      this.todos = todos.map(
        (todo) => new Todo(todo.id, todo.title, todo.completed)
      );
    });
  }

  public deleteTodo(todo: ITodo) {
    this.todos = this.todos.filter((t) => t.id !== todo.id);
    this.todoService.deleteTodo(todo.id).subscribe();
  }

  public addTodo(todoData: ITodoData) {
    this.todoService.addTodo(todoData).subscribe((todo) => {
      this.todos.push(todo);
    });
  }
}
