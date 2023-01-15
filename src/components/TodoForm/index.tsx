import React from "react";
import InputWithLabel from "../InputWithLabel";
import TextAreaWithLabel from "../TextAreaWithLabel";

type TodoFormProps = {
  handleSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    id?: string
  ) => Promise<void>;
  children: React.ReactNode;
  title: string;
  content: string;
  handleChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeContent: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const TodoForm = ({
  handleSubmit,
  children,
  title,
  content,
  handleChangeTitle,
  handleChangeContent,
}: TodoFormProps) => {
  return (
    <form onSubmit={handleSubmit}>
      <InputWithLabel
        text="제목"
        type="text"
        id="todo-title"
        value={title}
        handleChange={handleChangeTitle}
      />
      <TextAreaWithLabel
        text="내용"
        id="todo-content"
        value={content}
        handleChange={handleChangeContent}
      />
      {children}
    </form>
  );
};

export default TodoForm;
