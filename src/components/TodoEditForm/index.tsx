import React from "react";
import Button from "../Button";
import useTodoForm from "../../hooks/useTodoForm";
import TodoForm from "../TodoForm";

type Todo = {
  title: string;
  content: string;
  id: string;
};

type TodoEditFormProps = {
  todo: Todo | any;
  toggleEditMode: () => void;
};

const TodoEditForm = ({ todo, toggleEditMode }: TodoEditFormProps) => {
  const {
    state: { title, content },
    handleChange: { handleChangeTitle, handleChangeContent },
    handleSubmit: { handleEditTodo },
  } = useTodoForm({
    defaultTitle: todo.title,
    defaultContent: todo.content,
    submitCallback: { toggleEditMode },
  });

  return (
    <TodoForm
      handleSubmit={(e) => handleEditTodo(e, todo.id)}
      title={title}
      content={content}
      handleChangeTitle={handleChangeTitle}
      handleChangeContent={handleChangeContent}
    >
      <Button type="button" content="취소" handleClick={toggleEditMode} />
      <Button type="submit" content="완료" />
    </TodoForm>
  );
};

export default TodoEditForm;
