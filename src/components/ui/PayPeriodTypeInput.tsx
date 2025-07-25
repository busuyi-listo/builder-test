/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useState, useRef, useEffect } from 'react';
import { DropdownIcon } from './DropdownIcon';

interface PayPeriodOption {
  value: string;
  label: string;
}

interface PayPeriodTypeInputProps {
  value?: string;
  onChange?: (value: string) => void;
  options?: PayPeriodOption[];
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  required?: boolean;
  className?: string;
}

const defaultOptions: PayPeriodOption[] = [
  { value: 'custom-monthly-eor', label: 'Custom Monthly - EOR' },
  { value: 'weekly', label: 'Weekly' },
  { value: 'bi-weekly', label: 'Bi-Weekly' },
  { value: 'monthly', label: 'Monthly' },
  { value: 'quarterly', label: 'Quarterly' },
  { value: 'annually', label: 'Annually' }
];

export const PayPeriodTypeInput: React.FC<PayPeriodTypeInputProps> = ({
  value = 'custom-monthly-eor',
  onChange,
  options = defaultOptions,
  placeholder = 'Custom Monthly - EOR',
  label = 'Pay Period Type',
  disabled = false,
  required = false,
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const selectedOption = options.find(option => option.value === selectedValue);
  const displayText = selectedOption?.label || placeholder;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setSelectedValue(value);
  }, [value]);

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleSelect = (option: PayPeriodOption) => {
    setSelectedValue(option.value);
    setIsOpen(false);
    onChange?.(option.value);
    buttonRef.current?.focus();
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (disabled) return;

    switch (event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault();
        setIsOpen(!isOpen);
        break;
      case 'Escape':
        setIsOpen(false);
        buttonRef.current?.focus();
        break;
      case 'ArrowDown':
        event.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
        } else {
          const currentIndex = options.findIndex(opt => opt.value === selectedValue);
          const nextIndex = currentIndex < options.length - 1 ? currentIndex + 1 : 0;
          handleSelect(options[nextIndex]);
        }
        break;
      case 'ArrowUp':
        event.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
        } else {
          const currentIndex = options.findIndex(opt => opt.value === selectedValue);
          const prevIndex = currentIndex > 0 ? currentIndex - 1 : options.length - 1;
          handleSelect(options[prevIndex]);
        }
        break;
    }
  };

  return (
    <div className={`max-w-xs text-sm leading-none text-gray-800 ${className}`}>
      <label
        htmlFor="pay-period-select"
        className="block font-medium text-gray-800 mb-1"
      >
        {label}
        {required && <span className="text-red-500 ml-1" aria-label="required">*</span>}
      </label>

      <div className="relative" ref={dropdownRef}>
        <button
          ref={buttonRef}
          id="pay-period-select"
          type="button"
          className={`
            flex items-center justify-between w-full py-2.5 px-3.5
            bg-white border border-gray-300 rounded-md shadow-sm
            text-left text-gray-800 text-sm
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
            hover:border-gray-400 transition-colors duration-200
            ${disabled ? 'bg-gray-50 text-gray-500 cursor-not-allowed' : 'cursor-pointer'}
            ${isOpen ? 'border-blue-500 ring-2 ring-blue-500' : ''}
          `}
          onClick={handleToggle}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-labelledby="pay-period-select"
          aria-required={required}
        >
          <span className="block truncate min-w-60">
            {displayText}
          </span>
          <DropdownIcon
            className="w-4 h-4 text-gray-500 ml-2 flex-shrink-0"
            isOpen={isOpen}
          />
        </button>

        {isOpen && (
          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
            <ul
              role="listbox"
              aria-labelledby="pay-period-select"
              className="py-1 max-h-60 overflow-auto"
            >
              {options.map((option, index) => (
                <li key={option.value}>
                  <button
                    type="button"
                    className={`
                      w-full px-3.5 py-2.5 text-left text-sm
                      hover:bg-gray-100 focus:bg-gray-100 focus:outline-none
                      ${selectedValue === option.value ? 'bg-blue-50 text-blue-700' : 'text-gray-800'}
                    `}
                    onClick={() => handleSelect(option)}
                    role="option"
                    aria-selected={selectedValue === option.value}
                    tabIndex={-1}
                  >
                    {option.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default PayPeriodTypeInput;
