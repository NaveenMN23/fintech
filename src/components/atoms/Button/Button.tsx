"use client";

import React from "react";

interface ButtonProps {
  text: string; // Button label
  onClick: () => void; // Click handler
  type?: "button" | "submit" | "reset"; // Button type
  className?: string; // Additional styling
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  type = "button",
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-appBlack text-appWhite rounded-2xl px-12 py-4 text-[1.1rem] ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;

