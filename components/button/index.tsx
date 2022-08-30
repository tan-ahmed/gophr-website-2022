import React from "react";

import { isFullWidth, setButtonSize, setButtonVariant } from "./actions";

type ButtonProps = {
  children: React.ReactNode;
  variant: "outlined" | "contained" | "text";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  size,
  fullWidth,
  onClick,
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
      relative inline-flex items-center rounded-md 
        ${setButtonVariant(variant)}
        ${setButtonSize(size)}
        ${isFullWidth(fullWidth)}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
