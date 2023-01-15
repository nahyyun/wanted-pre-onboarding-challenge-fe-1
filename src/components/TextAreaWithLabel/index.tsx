import React from "react";

type TextAreaWithLabelProps = {
  text: string;
  id: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
};

const TextAreaWithLabel = ({
  text,
  id,
  value,
  handleChange,
  error,
}: TextAreaWithLabelProps) => {
  return (
    <>
      <label htmlFor={id}>{text}</label>
      <textarea id={id} name={id} value={value} onChange={handleChange} />
      {error && <span>{error}</span>}
    </>
  );
};

export default TextAreaWithLabel;
