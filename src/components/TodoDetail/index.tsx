import React, { useContext } from "react";
import Button from "../Button";
import TodoEditForm from "../TodoEditForm";
import { TodoContext } from "../../contexts/TodoContext";
import useToggle from "../../hooks/useToggle";
import axiosInstance from "../../api/index";

type Todo = {
  title: string;
  content: string;
  id: string;
};

type TodoDetailProps = {
  isShow: boolean;
  toggleDetailShow: () => void;
  todo: Todo;
};

const TodoDetail = ({ isShow, toggleDetailShow, todo }: TodoDetailProps) => {
  const { deleteTodo } = useContext(TodoContext);
  const [isEditFormShow, toggleEditFormShow] = useToggle(false);

  const toggleEditMode = () => {
    toggleDetailShow();
    toggleEditFormShow();
  };

  const handleDeleteTodo = () => {
    axiosInstance.delete(`/todos/${todo.id}`);
    deleteTodo(todo.id);
  };

  return (
    <>
      {isShow && (
        <div>
          <div>
            <span>제목</span>
            <span>{todo.title}</span>
          </div>
          <div>
            <span>내용</span>
            <span>{todo.content}</span>
          </div>
          <Button
            type="button"
            content="수정하기"
            handleClick={toggleEditMode}
          />
          <Button
            type="button"
            content="삭제하기"
            handleClick={handleDeleteTodo}
          />
        </div>
      )}
      {isEditFormShow && (
        <TodoEditForm todo={todo} toggleEditMode={toggleEditMode} />
      )}
    </>
  );
};

export default TodoDetail;
