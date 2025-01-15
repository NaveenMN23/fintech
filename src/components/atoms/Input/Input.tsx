import React from "react";

interface InputProps {
  type: string; 
  id: string; 
  name: string; 
  value: string | number; 
  placeholder?: string; 
  required?: boolean; 
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; 
  className?: string; 
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

const Input: React.FC<InputProps> = ({
  type,
  id,
  name,
  value,
  placeholder = "",
  required = false,
  onChange,
  className = "",
  minLength = 1,
  maxLength = 100,
  min = 100000,
  max = 999999
}) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      placeholder={placeholder}
      required={required}
      onChange={onChange}
      className={`${className}`}
      minLength={minLength}
      maxLength={maxLength}
      min={min}
      max={max}
    />
  );
};

export default Input;
