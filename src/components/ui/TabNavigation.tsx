"use client";
import * as React from "react";
import { Tab } from "./Tabs";

interface TabNavigationProps {
  tabs: Array<{ id: string; label: string }>;
  activeTabId: string;
  onTabChange: (tabId: string) => void;
}

export const TabNavigation: React.FC<TabNavigationProps> = ({
  tabs,
  activeTabId,
  onTabChange,
}) => {
  return (
    <nav
      className="relative self-stretch w-full h-[38px]"
      role="tablist"
      aria-label="Client navigation tabs"
    >
      <div className="absolute left-0 shrink-0 w-full h-px bg-gray-300 bottom-[border] top-[37px]" />
      <div className="inline-flex absolute top-0 left-0 gap-8 justify-start items-center h-[38px] max-md:gap-6 max-sm:flex-wrap max-sm:gap-4">
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            label={tab.label}
            isActive={activeTabId === tab.id}
            onClick={() => onTabChange(tab.id)}
          />
        ))}
      </div>
    </nav>
  );
};