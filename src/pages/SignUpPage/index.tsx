import React from "react";
import Button from "../../components/Button";
import InputWithLabel from "../../components/InputWithLabel";
import useSignup from "../../hooks/useSignup";

const SignUpPage = () => {
  const {
    state: { email, password },
    error: { emailError, passwordError },
    onChange: { handleChangeEmail, handleChangePassword },
    handleSubmit,
  } = useSignup();

  return (
    <form onSubmit={handleSubmit}>
      <InputWithLabel
        text="EMAIL"
        type="text"
        id="signup-email"
        value={email}
        handleChange={handleChangeEmail}
        error={emailError}
      />
      <InputWithLabel
        text="PASSWORD"
        type="password"
        id="signup-pwd"
        value={password}
        handleChange={handleChangePassword}
        error={passwordError}
      />
      <Button
        type="submit"
        content="회원가입"
        disabled={!email || !password || !!emailError || !!passwordError}
        handleClick={handleSubmit}
      />
    </form>
  );
};

export default SignUpPage;
