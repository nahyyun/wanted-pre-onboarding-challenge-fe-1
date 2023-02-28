import React, { forwardRef } from "react";

type InputWithLabelProps = {
  text: string;
  type: string;
  id: string;
  value?: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
};

const InputWithLabel = forwardRef<HTMLInputElement, InputWithLabelProps>(
  (
    { text, type, id, value, handleChange, error }: InputWithLabelProps,
    ref
  ) => {
    return (
      <>
        <label htmlFor={id}>{text}</label>
        <input
          type={type}
          id={id}
          name={id}
          defaultValue={value}
          ref={ref}
          onChange={handleChange}
        />
        {error && <span>{error}</span>}
      </>
    );
  }
);

export default InputWithLabel;
