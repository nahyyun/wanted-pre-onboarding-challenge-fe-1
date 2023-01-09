import React from "react";

type ButtonProps = {
  type: "submit" | "reset" | "button";
  content: string;
  disabled: boolean;
};

const Button = ({ type, content, disabled }: ButtonProps) => {
  return (
    <div>
      <button type={type} disabled={disabled}>
        {content}
      </button>
    </div>
  );
};

export default Button;
