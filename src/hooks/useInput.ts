import React, { useState, useCallback } from "react";

const useInput = (
  initValue: string
): [
  string,
  React.Dispatch<React.SetStateAction<string>>,
  (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
] => {
  const [value, setValue] = useState(initValue);

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValue(e.target.value);
    },
    []
  );

  return [value, setValue, onChange];
};

export default useInput;
