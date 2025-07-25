"use client";

import React from 'react';

interface CheckboxInputProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  ariaLabel?: string;
  disabled?: boolean;
}

export const CheckboxInput: React.FC<CheckboxInputProps> = ({
  checked = false,
  onChange,
  ariaLabel,
  disabled = false
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.checked);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onChange?.(!checked);
    }
  };

  if (disabled) {
    return (
      <div className="w-4 h-4 bg-white rounded border border-gray-300 border-solid" />
    );
  }

  return (
    <label className="flex relative items-center cursor-pointer">
      <input
        className="relative w-4 h-4 bg-white rounded border border-gray-300 border-solid appearance-none cursor-pointer"
        type="checkbox"
        aria-label={ariaLabel}
        checked={checked}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </label>
  );
};
