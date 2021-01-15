import ITodoData from './TodoData';

export interface ITodo extends ITodoData {
  id: string;
}

export interface ITodoPlaceHolder extends ITodo {
  userId: string;
}

export class Todo implements ITodo {
  public constructor(
    public readonly id: string,
    public readonly title: string,
    public completed: boolean
  ) {}
}

export default ITodo;
