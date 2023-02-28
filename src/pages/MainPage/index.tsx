import React from "react";
import ErrorBoundary from "../../components/ErrorBoundary";
import TodoAddForm from "../../components/TodoAddForm";
import TodoList from "../../components/TodoList";

const MainPage = () => {
  return (
    <>
      <TodoAddForm />
      <ErrorBoundary>
        <TodoList />
      </ErrorBoundary>
    </>
  );
};

export default MainPage;
