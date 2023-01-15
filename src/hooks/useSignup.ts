import React from "react";
import useInput from "./useInput";
import useValid from "./useValid";
import { validateEmail, validatePassword } from "../utils/validate";
import {
  ERROR_MSG_INVALID_EMAIL,
  ERROR_MSG_INVALID_PWD,
} from "../constants/errorMessage";
import axiosInstance from "../api/index";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const [email, , handleChangeEmail] = useInput("");
  const [password, , handleChangePassword] = useInput("");
  const navigate = useNavigate();

  const [emailError] = useValid(email, validateEmail, ERROR_MSG_INVALID_EMAIL);
  const [passwordError] = useValid(
    password,
    validatePassword,
    ERROR_MSG_INVALID_PWD
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axiosInstance.post("users/create", { email, password });
      navigate("/auth/login");
    } catch (error) {
      console.dir(error);
    }
  };

  return {
    state: { email, password },
    error: { emailError, passwordError },
    onChange: { handleChangeEmail, handleChangePassword },
    handleSubmit,
  };
};

export default useAuth;
