import React from "react";

type InputWithLabelProps = {
  text: string;
  type: string;
  id: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
};

const InputWithLabel = ({
  text,
  type,
  id,
  value,
  handleChange,
  error,
}: InputWithLabelProps) => {
  return (
    <>
      <label htmlFor={id}>{text}</label>
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={handleChange}
      />
      {error && <span>{error}</span>}
    </>
  );
};

export default InputWithLabel;
