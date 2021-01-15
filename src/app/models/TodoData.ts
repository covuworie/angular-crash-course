export interface ITodoData {
  title: string;
  completed: boolean;
}

export class TodoData implements ITodoData {
  public constructor(
    public readonly title: string,
    public completed: boolean
  ) {}
}

export default ITodoData;
