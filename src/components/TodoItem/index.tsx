import React from "react";
import TodoDetail from "../TodoDetail";
import useToggle from "../../hooks/useToggle";
import { Todo } from "../../types/todo";

const TodoItem = ({ todo }: { todo: Todo }) => {
  const [isDetailShow, toggleDetailShow] = useToggle(false);

  return (
    <>
      <div>
        <div onClick={toggleDetailShow}>
          <span>{todo.title}</span>
        </div>
      </div>

      <TodoDetail
        isShow={isDetailShow}
        toggleDetailShow={toggleDetailShow}
        todo={todo}
      />
    </>
  );
};

export default TodoItem;
