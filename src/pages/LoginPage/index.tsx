import React from "react";
import Button from "../../components/Button";
import InputWithLabel from "../../components/InputWithLabel";
import useLogin from "../../hooks/useLogin";

const LoginPage = () => {
  const {
    state: { email, password },
    error: { emailError, passwordError },
    onChange: { handleChangeEmail, handleChangePassword },
    handleSubmit,
  } = useLogin();

  return (
    <form onSubmit={handleSubmit}>
      <InputWithLabel
        text="EMAIL"
        type="text"
        id="login-email"
        value={email}
        handleChange={handleChangeEmail}
        error={emailError}
      />
      <InputWithLabel
        text="PASSWORD"
        type="password"
        id="login-pwd"
        value={password}
        handleChange={handleChangePassword}
        error={passwordError}
      />
      <Button
        type="submit"
        content="로그인"
        disabled={!email || !password || !!emailError || !!passwordError}
        handleClick={handleSubmit}
      />
    </form>
  );
};

export default LoginPage;
