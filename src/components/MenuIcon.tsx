/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import * as React from "react";

interface MenuIconProps {
  svgContent: string;
  className?: string;
}

export const MenuIcon: React.FC<MenuIconProps> = ({ svgContent, className = "menu-icon" }) => {
  return (
    <div className="flex justify-center items-center w-6 h-6">
      <div
        dangerouslySetInnerHTML={{
          __html: svgContent,
        }}
      />
    </div>
  );
};
