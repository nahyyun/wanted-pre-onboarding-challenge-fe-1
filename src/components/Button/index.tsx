import React from "react";

type ButtonProps = {
  type: "submit" | "reset" | "button";
  content: string;
  disabled?: boolean;
  handleClick?: any | ((e: React.FormEvent<HTMLFormElement>) => Promise<void>);
};

const Button = ({ type, content, disabled, handleClick }: ButtonProps) => {
  return (
    <div>
      <button type={type} disabled={disabled} onClick={handleClick}>
        {content}
      </button>
    </div>
  );
};

export default Button;
