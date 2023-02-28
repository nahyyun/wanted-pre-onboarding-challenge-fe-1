import React from "react";
import InputWithLabel from "../InputWithLabel";
import TextAreaWithLabel from "../TextAreaWithLabel";

type TodoFormProps = {
  handleSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    id?: string
  ) => Promise<void>;
  children: React.ReactNode;
  titleDefaultValue?: string;
  contentDefaultValue?: string;
  titleRef?: React.MutableRefObject<any>;
  contentRef?: React.MutableRefObject<any>;
};

const TodoForm = ({
  handleSubmit,
  children,
  titleDefaultValue,
  contentDefaultValue,
  titleRef,
  contentRef,
}: TodoFormProps) => {
  return (
    <form onSubmit={handleSubmit}>
      <InputWithLabel
        text="제목"
        type="text"
        id="todo-title"
        value={titleDefaultValue}
        ref={titleRef}
      />
      <TextAreaWithLabel
        text="내용"
        id="todo-content"
        value={contentDefaultValue}
        ref={contentRef}
      />
      {children}
    </form>
  );
};

export default TodoForm;
