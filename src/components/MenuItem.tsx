"use client";
import * as React from "react";
import { MenuIcon } from "./MenuIcon";

interface MenuItemProps {
  icon: string;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

export const MenuItem: React.FC<MenuItemProps> = ({
  icon,
  label,
  isActive = false,
  onClick
}) => {
  return (
    <div
      className="flex items-center p-2 w-60 rounded-md cursor-pointer max-md:w-[184px] max-sm:px-3 max-sm:py-2 max-sm:w-auto max-sm:whitespace-nowrap max-sm:min-w-[120px]"
      onClick={onClick}
    >
      <div className="flex gap-3 items-center rounded-md flex-[1_0_0] max-sm:gap-2">
        <MenuIcon svgContent={icon} />
        <div className={`text-sm leading-5 text-gray-900 max-md:text-sm max-sm:text-xs ${isActive ? 'font-bold' : ''}`}>
          {label}
        </div>
      </div>
    </div>
  );
};
