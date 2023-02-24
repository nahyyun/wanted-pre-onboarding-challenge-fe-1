import useAsync from "./useAsync";
import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

type Todo = {
  title: string;
  content: string;
  id: string;
};

const useTodo = () => {
  const { POST, PUT, DELETE, ...rest } = useAsync<Todo>("todos", false);

  const ctx = useContext(TodoContext);

  const addTodo = async (data: object) => {
    const newTodo = await POST("todos", data);

    ctx.addTodo(newTodo);
  };

  const editTodo = async (id: string, data: object) => {
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
