import { REGEXP_EMAIL, REGEXP_PASSWORD } from "../constants/regexp";

export const validateEmail = (email: string) => {
  if (email.match(REGEXP_EMAIL)) {
    return true;
  }
  return false;
};

export const validatePassword = (password: string) => {
  if (password.match(REGEXP_PASSWORD)) {
    return true;
  }
  return false;
};

export const isInputNull = (input: string) => {
  return input.trim().length < 1;
};
