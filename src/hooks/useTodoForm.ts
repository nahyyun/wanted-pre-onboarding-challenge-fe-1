import React, { useContext } from "react";
import useInput from "./useInput";
import { TodoContext } from "../contexts/TodoContext";
import axiosInstance from "../api";

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

  const { addTodo, editTodo } = useContext(TodoContext);

  const handleAddTodo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { data: todo } = await axiosInstance.post("/todos", {
      title,
      content,
    });
    addTodo(todo);

    setTitle("");
    setContent("");
  };

  const handleEditTodo = async (
    e: React.FormEvent<HTMLFormElement>,
    id: string
  ) => {
    e.preventDefault();
    const { data: todo } = await axiosInstance.put(`/todos/${id}`, {
      title,
      content,
    });
    editTodo({ id, ...todo });

    submitCallback?.toggleEditMode();
  };

  return {
    state: {
      title,
      content,
    },
    handleChange: { handleChangeTitle, handleChangeContent },
    handleSubmit: { handleAddTodo, handleEditTodo },
  };
};

export default useTodoForm;
