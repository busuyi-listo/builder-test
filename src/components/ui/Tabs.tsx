import * as React from "react";

interface TabProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

export const Tab: React.FC<TabProps> = ({ label, isActive = false, onClick }) => {
  return (
    <div
      className="flex relative flex-col justify-center items-center cursor-pointer"
      onClick={onClick}
      role="tab"
      aria-selected={isActive}
      tabIndex={isActive ? 0 : -1}
    >
      <div className="flex relative justify-center items-center px-1 pt-0 pb-4 max-sm:px-0.5 max-sm:pt-0 max-sm:pb-3">
        <span
          className={`relative text-sm leading-5 max-md:text-sm max-md:leading-5 max-sm:text-xs max-sm:leading-4 ${
            isActive ? "text-indigo-600" : "text-gray-500"
          }`}
        >
          {label}
        </span>
      </div>
      <div
        className={`relative self-stretch h-0.5 ${
          isActive ? "bg-indigo-500" : ""
        }`}
      />
    </div>
  );
};
