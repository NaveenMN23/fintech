"use client";

import React from "react";

interface ButtonProps {
  text?: string; // Button label
  onClick: () => void; // Click handler
  type?: "button" | "submit" | "reset"; // Button type
  className?: string; // Additional styling
  children?:React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  text = "",
  onClick,
  type = "button",
  className = "",
  children = ""
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-appBlack p-3 text-appWhite rounded-2xl text-[1.1rem] hover:shadow-xl hover:scale-105  transition duration-300 ease-in-out ${className}`}
    >
      {text !== "" ? text : children}
    </button>
  );
};

export default Button;

