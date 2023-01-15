import React from "react";
import Button from "../Button";
import useTodoForm from "../../hooks/useTodoForm";
import TodoForm from "../TodoForm";

const TodoAddForm = () => {
  const {
    state: { title, content },
    handleChange: { handleChangeTitle, handleChangeContent },
    handleSubmit: { handleAddTodo },
  } = useTodoForm({ defaultTitle: "", defaultContent: "" });

  return (
    <TodoForm
      handleSubmit={handleAddTodo}
      title={title}
      content={content}
      handleChangeTitle={handleChangeTitle}
      handleChangeContent={handleChangeContent}
    >
      <Button type="submit" content="작성하기" />
    </TodoForm>
  );
};

export default TodoAddForm;
