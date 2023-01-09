import React from "react";
import useInput from "./useInput";
import useValid from "./useValid";
import { validateEmail, validatePassword } from "../utils/validate";
import {
  ERROR_MSG_INVALID_EMAIL,
  ERROR_MSG_INVALID_PWD,
} from "../constants/errorMessage";
import { signUp } from "../api/index";
import { setStorage } from "../utils/storage";

const useAuth = () => {
  const [email, , changeEmail] = useInput("");
  const [password, , changePassword] = useInput("");

  const [emailError] = useValid(email, validateEmail, ERROR_MSG_INVALID_EMAIL);
  const [passwordError] = useValid(
    password,
    validatePassword,
    ERROR_MSG_INVALID_PWD
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await signUp({ email, password });
    } catch (error) {
      console.dir(error);
    }
  };

  return {
    state: { email, password },
    error: { emailError, passwordError },
    onChange: { changeEmail, changePassword },
    handleSubmit,
  };
};

export default useAuth;
