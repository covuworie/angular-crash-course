import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ITodoData, TodoData } from 'src/app/models/TodoData';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent implements OnInit {
  @Output() addTodo: EventEmitter<ITodoData> = new EventEmitter();

  public title: string;

  constructor() {}

  ngOnInit(): void {}

  public onSubmit() {
    const todoData = new TodoData(this.title, false);
    this.addTodo.emit(todoData);
  }
}
