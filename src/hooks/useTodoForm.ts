import React, { useRef, useContext } from "react";
import useTodo from "./useTodo";
import { isInputNull } from "../utils/validate";
import { SnackbarContext } from "../contexts/SnackbarContext";

const useTodoForm = ({
  defaultTitle,
  defaultContent,
  submitCallback,
}: {
  defaultTitle: string;
  defaultContent: string;
  submitCallback?: any;
}) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLInputElement>(null);

  const { isLoading, error, editTodo, addTodo } = useTodo();
  const { showSnackbar } = useContext(SnackbarContext);

  const handleAddTodo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!titleRef.current || !contentRef.current) return;

    const title = titleRef.current.value;
    const content = contentRef.current.value;

    if (isInputNull(title) || isInputNull(content)) {
      return showSnackbar("빈칸을 모두 채워주세요.");
    }

    await addTodo({
      title,
      content,
    });

    titleRef.current.value = "";
    contentRef.current.value = "";
  };

  const handleEditTodo = async (
    e: React.FormEvent<HTMLFormElement>,
    id: string
  ) => {
    e.preventDefault();

    if (!titleRef.current || !contentRef.current) return;

    const title = titleRef.current.value;
    const content = contentRef.current.value;

    if (isInputNull(title) || isInputNull(content)) {
      return showSnackbar("빈칸을 모두 채워주세요.");
    }

    await editTodo(id, {
      title,
      content,
    });

    submitCallback?.toggleEditMode();
  };

  return {
    status: { isLoading, error },
    defaultValue: { defaultTitle, defaultContent },
    ref: {
      title: titleRef,
      content: contentRef,
    },
    handleSubmit: { handleAddTodo, handleEditTodo },
  };
};

export default useTodoForm;
