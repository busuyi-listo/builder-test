import React from 'react';

interface DropdownIconProps {
  className?: string;
  isOpen?: boolean;
}

export const DropdownIcon: React.FC<DropdownIconProps> = ({
  className = "w-4 h-4",
  isOpen = false
}) => {
  return (
    <svg
      className={`${className} transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );
};
