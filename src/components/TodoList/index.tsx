import React, { useContext, useEffect } from "react";
import TodoItem from "../TodoItem";
import { TodoContext } from "../../contexts/TodoContext";
import useAsync from "../../hooks/useAsync";

type Todo = {
  title: string;
  content: string;
  id: string;
};

const TodoList = () => {
  const { todos, setTodos } = useContext(TodoContext);

  const { isLoading, responseData, error } = useAsync<Todo[]>("todos", true);

  useEffect(() => {
    if (isLoading || error) return;

    if (responseData) {
      setTodos(responseData);
    }
  }, [isLoading, responseData, error]);

  return (
    <>
      <div>
        {todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </div>
    </>
  );
};

export default TodoList;
