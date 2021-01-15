import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import ITodo, { ITodoPlaceHolder } from '../models/Todo';
import ITodoData from '../models/TodoData';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todosUrl: string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit: string = '?_limit=5';

  constructor(private http: HttpClient) {}

  // Get Todos
  public getTodos() {
    return this.http.get<ITodoPlaceHolder[]>(
      `${this.todosUrl}${this.todosLimit}`
    );
  }

  // Delete Todo
  public deleteTodo(id: string) {
    const url = `${this.todosUrl}/${id}`;
    return this.http.delete<ITodo>(url, httpOptions);
  }

  // Add Todo
  public addTodo(todoData: ITodoData) {
    const url = `${this.todosUrl}`;
    // An object of id '201' is always added by jsonplaceholder.
    return this.http.post<ITodo>(url, todoData, httpOptions);
  }

  // Toggle Completed
  public toggleCompleted(todo: ITodo) {
    const url = `${this.todosUrl}/${todo.id}`;
    // Creates 500 error if called for a Todo that was added using addTodo.
    // This is because the resource is not created on the server by jsonplaceholder.
    return this.http.put<ITodo>(url, todo, httpOptions);
  }
}
