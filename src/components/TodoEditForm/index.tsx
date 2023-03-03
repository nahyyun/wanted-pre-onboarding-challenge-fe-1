import React from "react";
import Button from "../Button";
import useTodoForm from "../../hooks/useTodoForm";
import TodoForm from "../TodoForm";
import { Todo } from "../../types/todo";

type TodoEditFormProps = {
  todo: Todo;
  toggleEditMode: () => void;
};

const TodoEditForm = ({ todo, toggleEditMode }: TodoEditFormProps) => {
  const {
    ref: { title, content },
    defaultValue: { defaultTitle, defaultContent },
    handleSubmit: { handleEditTodo },
  } = useTodoForm({
    defaultTitle: todo.title,
    defaultContent: todo.content,
    submitCallback: { toggleEditMode },
  });

  return (
    <TodoForm
      handleSubmit={(e) => handleEditTodo(e, todo.id)}
      titleDefaultValue={defaultTitle}
      contentDefaultValue={defaultContent}
      titleRef={title}
      contentRef={content}
    >
      <Button type="button" content="취소" handleClick={toggleEditMode} />
      <Button type="submit" content="완료" />
    </TodoForm>
  );
};

export default TodoEditForm;
