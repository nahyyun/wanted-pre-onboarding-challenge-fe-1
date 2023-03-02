import React, { useContext } from "react";
import { SnackbarContext } from "../../contexts/SnackbarContext";

const Snackbar = () => {
  const { isOpen, message } = useContext(SnackbarContext);
  return (
    <>
      {isOpen && (
        <div className="snackbar">
          <span>{message}</span>
        </div>
      )}
    </>
  );
};

export default Snackbar;
