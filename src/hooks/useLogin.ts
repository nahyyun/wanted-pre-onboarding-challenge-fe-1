import React, { useContext } from "react";
import useInput from "./useInput";
import useValid from "./useValid";
import { validateEmail, validatePassword } from "../utils/validate";
import {
  ERROR_MSG_INVALID_EMAIL,
  ERROR_MSG_INVALID_PWD,
} from "../constants/errorMessage";
import { login } from "../api/index";
import { useNavigate } from "react-router-dom";
import { setStorage } from "../utils/storage";
import { AuthContext } from "../contexts/AuthContext";

const useLogin = () => {
  const [email, , changeEmail] = useInput("");
  const [password, , changePassword] = useInput("");
  const navigate = useNavigate();
  const { setLoginState } = useContext(AuthContext);

  const [emailError] = useValid(email, validateEmail, ERROR_MSG_INVALID_EMAIL);
  const [passwordError] = useValid(
    password,
    validatePassword,
    ERROR_MSG_INVALID_PWD
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await login({ email, password });
      setStorage("token", response.token);
      setLoginState(response.token);
      navigate("/");
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

export default useLogin;
