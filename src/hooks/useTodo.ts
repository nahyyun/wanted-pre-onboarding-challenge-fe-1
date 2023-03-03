import useAsync from "./useAsync";
import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { Todo, AddTodoData, EditTodoData } from "../types/todo";

const useTodo = () => {
  const { POST, PUT, DELETE, ...rest } = useAsync<Todo>("todos", false);

  const ctx = useContext(TodoContext);

  const addTodo = async (data: AddTodoData) => {
    const newTodo = await POST("todos", data);

    ctx.addTodo(newTodo);
  };

  const editTodo = async (id: string, data: EditTodoData) => {
    const editedTodo = await PUT(`/todos/${id}`, data);

    ctx.editTodo(editedTodo);
  };

  const deleteTodo = async (id: string) => {
    await DELETE(`/todos/${id}`);

    ctx.deleteTodo(id);
  };

  return { addTodo, editTodo, deleteTodo, ...rest };
};

export default useTodo;
