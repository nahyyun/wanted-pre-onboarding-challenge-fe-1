import React, { useContext, useEffect } from "react";
import TodoItem from "../TodoItem";
import { TodoContext } from "../../contexts/TodoContext";
import axiosInstance from "../../api/index";

const TodoList = () => {
  const { todos, setTodos } = useContext(TodoContext);

  const getTodosAsync = async () => {
    try {
      const { data: todoList } = await axiosInstance("/todos");
      setTodos(todoList);
    } catch (error) {
      console.dir(error);
    }
  };

  useEffect(() => {
    getTodosAsync();
  }, []);

  return (
    <div>
      {todos?.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
