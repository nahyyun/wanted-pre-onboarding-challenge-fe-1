export type Todo = {
  readonly id: string;
  title: string;
  content: string;
};

export type AddTodoData = Omit<Todo, "id">;

export type EditTodoData = Partial<Omit<Todo, "id">> & { content: string };
