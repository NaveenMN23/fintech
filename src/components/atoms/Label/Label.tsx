import React from "react";

interface LabelProps {
  htmlFor: string;
  text: string;
  className?: string;
}

const Label: React.FC<LabelProps> = ({ htmlFor, text, className = "" }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`text-appBlack font-normal ${className}`}
    >
      {text}
    </label>
  );
};

export default Label;
