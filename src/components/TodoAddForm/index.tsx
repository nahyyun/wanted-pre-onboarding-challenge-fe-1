import React from "react";
import Button from "../Button";
import useTodoForm from "../../hooks/useTodoForm";
import TodoForm from "../TodoForm";

const TodoAddForm = () => {
  const {
    ref: { title, content },
    handleSubmit: { handleAddTodo },
  } = useTodoForm({ defaultTitle: "", defaultContent: "" });

  return (
    <TodoForm
      handleSubmit={handleAddTodo}
      titleRef={title}
      contentRef={content}
    >
      <Button type="submit" content="작성하기" />
    </TodoForm>
  );
};

export default TodoAddForm;
