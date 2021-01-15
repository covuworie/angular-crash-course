import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import ITodo from 'src/app/models/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: ITodo;
  @Output() deleteTodo: EventEmitter<ITodo> = new EventEmitter();

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  // Set Dynamic Classes
  public setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed,
    };

    return classes;
  }

  public onToggle(todo: ITodo) {
    // Toggle in UI
    todo.completed = !todo.completed;
    // Toggle on server
    this.todoService
      .toggleCompleted(todo)
      .subscribe((todo) => console.log(todo));
  }

  public onDelete(todo: ITodo) {
    this.deleteTodo.emit(todo);
  }
}
