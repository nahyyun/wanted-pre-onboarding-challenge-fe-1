import React from "react";
import useInput from "./useInput";
import useTodo from "./useTodo";

type Todo = {
  title: string;
  content: string;
  id: string;
};

const useTodoForm = ({
  defaultTitle,
  defaultContent,
  submitCallback,
}: {
  defaultTitle: string;
  defaultContent: string;
  submitCallback?: any;
}) => {
  const [title, setTitle, handleChangeTitle] = useInput(defaultTitle);
  const [content, setContent, handleChangeContent] = useInput(defaultContent);

  const { isLoading, error, editTodo, addTodo } = useTodo();

  const handleAddTodo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await addTodo({
      title,
      content,
    });

    setTitle("");
    setContent("");
  };

  const handleEditTodo = async (
    e: React.FormEvent<HTMLFormElement>,
    id: string
  ) => {
    e.preventDefault();

    await editTodo(id, {
      title,
      content,
    });

    submitCallback?.toggleEditMode();
  };

  return {
    status: { isLoading, error },
    state: {
      title,
      content,
    },
    handleChange: { handleChangeTitle, handleChangeContent },
    handleSubmit: { handleAddTodo, handleEditTodo },
  };
};

export default useTodoForm;
