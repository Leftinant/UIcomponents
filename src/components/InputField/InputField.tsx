import React, { useState } from "react";
import clsx from "clsx";

export interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  variant?: "filled" | "outlined" | "ghost";
  size?: "sm" | "md" | "lg";
  type?: "text" | "password";
}

export const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled,
  invalid,
  variant = "outlined",
  size = "md",
  type = "text",
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='form-control w-full'>
      {label && <label className='label font-medium'>{label}</label>}
      <div className='relative'>
        <input
          type={type === "password" && showPassword ? "text" : type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          aria-invalid={invalid}
          className={clsx("input w-full", {
            "input-bordered": variant === "outlined",
            "bg-base-200": variant === "filled",
            "bg-transparent border-none": variant === "ghost",
            "input-sm": size === "sm",
            "input-md": size === "md",
            "input-lg": size === "lg",
            "input-error": invalid,
          })}
        />
        {type === "password" && (
          <button
            type='button'
            onClick={() => setShowPassword((p) => !p)}
            className='absolute right-2 top-1/2 -translate-y-1/2 text-sm'>
            {showPassword ? "🙈" : "👁️"}
          </button>
        )}
      </div>
      {helperText && !invalid && (
        <span className='text-xs text-gray-500'>{helperText}</span>
      )}
      {invalid && errorMessage && (
        <span className='text-xs text-error'>{errorMessage}</span>
      )}
    </div>
  );
};

export default InputField;
