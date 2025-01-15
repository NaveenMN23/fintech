import Input from "@/components/atoms/Input/Input";
import Label from "@/components/atoms/Label/Label";
import moment from "moment";
import React from "react";

interface LabelInputPairProps {
  label: string; // Label text
  htmlFor: string; // For attribute for the label
  type: string; // Input type
  name: string; // Input name
  value: string; // Controlled input value
  placeholder?: string; // Placeholder text
  required?: boolean; // Whether the field is required
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Change handler
  className?: string; // Additional styling
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

const LabelInputPair: React.FC<LabelInputPairProps> = ({
  label,
  htmlFor,
  type,
  name,
  value,
  placeholder = "",
  required = false,
  onChange,
  className = "",
  minLength = 1,
  maxLength = 100,
  max=1,
  min=100
}) => {

  return (
    <div className={`${className}`}>
      <Label htmlFor={htmlFor} text={label} />
      <Input
        type={type}
        id={htmlFor}
        name={name}
        value={value}
        placeholder={placeholder}
        className={`border-[1px] border-solid border-cardLightBorder rounded-xl p-3 text-appSubBlue`}
        required={required}
        onChange={onChange}
        minLength={minLength}
        maxLength={maxLength}
        min={min}
        max={max}
      />
    </div>
  );
};

export default LabelInputPair;
