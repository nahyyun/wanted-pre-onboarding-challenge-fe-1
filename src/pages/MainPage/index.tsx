import React from "react";
import TodoAddForm from "../../components/TodoAddForm";
import TodoList from "../../components/TodoList";

const MainPage = () => {
  return (
    <>
      <TodoAddForm />
      <TodoList />
    </>
  );
};

export default MainPage;
