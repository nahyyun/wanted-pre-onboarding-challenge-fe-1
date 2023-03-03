import React, { useState, useRef } from "react";
import { createContext } from "react";
import Snackbar from "../components/Snackbar";

export const SnackbarContext = createContext({
  isOpen: false,
  message: "",
  showSnackbar: (message: string) => {},
});

export const SnackbarContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const snackbarTimer = useRef<NodeJS.Timeout>();

  const showSnackbar = (_message: string) => {
    if (snackbarTimer.current) {
      clearTimeout(snackbarTimer.current);
    }
    setIsOpen(true);
    setMessage(_message);

    snackbarTimer.current = setTimeout(() => {
      setIsOpen(false);
    }, 2000);
  };

  return (
    <SnackbarContext.Provider value={{ isOpen, message, showSnackbar }}>
      <Snackbar />
      {children}
    </SnackbarContext.Provider>
  );
};
