import React, { useContext } from "react";
import useInput from "./useInput";
import useValid from "./useValid";
import { validateEmail, validatePassword } from "../utils/validate";
import {
  ERROR_MSG_INVALID_EMAIL,
  ERROR_MSG_INVALID_PWD,
} from "../constants/errorMessage";
import axiosInstance from "../api/index";
import { useNavigate } from "react-router-dom";
import { setStorage } from "../utils/storage";
import { AuthContext } from "../contexts/AuthContext";

const useLogin = () => {
  const [email, , handleChangeEmail] = useInput("");
  const [password, , handleChangePassword] = useInput("");
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

    const { token }: any = await axiosInstance.post("/users/login", {
      email,
      password,
    });

    setStorage("token", token);
    setLoginState(token);

    navigate("/");
  };

  return {
    state: { email, password },
    error: { emailError, passwordError },
    onChange: { handleChangeEmail, handleChangePassword },
    handleSubmit,
  };
};

export default useLogin;
