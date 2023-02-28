import React, { forwardRef } from "react";

type TextAreaWithLabelProps = {
  text: string;
  id: string;
  value?: string;
  handleChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
};

const TextAreaWithLabel = forwardRef<
  HTMLTextAreaElement,
  TextAreaWithLabelProps
>(({ text, id, value, handleChange, error }: TextAreaWithLabelProps, ref) => {
  return (
    <>
      <label htmlFor={id}>{text}</label>
      <textarea
        id={id}
        name={id}
        defaultValue={value}
        ref={ref}
        onChange={handleChange}
      />
      {error && <span>{error}</span>}
    </>
  );
});

export default TextAreaWithLabel;
