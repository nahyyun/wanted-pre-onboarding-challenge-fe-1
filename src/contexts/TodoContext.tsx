import React, { createContext, useState } from "react";
import { Todo } from "../types/todo";

const defaultTodos: Todo[] = [];

export const TodoContext = createContext({
  todos: defaultTodos,
  setTodos: (todos: Todo[]) => {},
  addTodo: (todo: Todo) => {},
  editTodo: (todo: Todo) => {},
  deleteTodo: (id: string) => {},
});

export const TodoContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (todo: Todo) => {
    setTodos((todos) => [...todos, todo]);
  };

  const editTodo = ({ id, ...data }: Todo) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, ...data } : todo))
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <TodoContext.Provider
      value={{ todos, setTodos, addTodo, editTodo, deleteTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};
