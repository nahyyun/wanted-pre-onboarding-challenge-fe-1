import React, { Dispatch, SetStateAction, useState } from "react";

const useInput = (
  initValue: string
): [
  string,
  Dispatch<SetStateAction<string>>,
  (e: React.ChangeEvent<HTMLInputElement>) => void
] => {
  const [value, setValue] = useState(initValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return [value, setValue, onChange];
};

export default useInput;
