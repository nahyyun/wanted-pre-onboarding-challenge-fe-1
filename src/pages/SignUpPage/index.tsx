import React from "react";
import Button from "../../components/Button";
import InputWithLabel from "../../components/InputWithLabel";
import useSignup from "../../hooks/useSignup";

const SignUpPage = () => {
  const {
    state: { email, password },
    error: { emailError, passwordError },
    onChange: { changeEmail, changePassword },
    handleSubmit,
  } = useSignup();

  return (
    <form onSubmit={handleSubmit}>
      <InputWithLabel
        text="EMAIL"
        type="text"
        id="signup-email"
        value={email}
        handleChange={changeEmail}
        error={emailError}
      />
      <InputWithLabel
        text="PASSWORD"
        type="password"
        id="signup-pwd"
        value={password}
        handleChange={changePassword}
        error={passwordError}
      />
      <Button
        type="submit"
        content="회원가입"
        disabled={!email || !password || !!emailError || !!passwordError}
      />
    </form>
  );
};

export default SignUpPage;
