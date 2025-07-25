"use client";
import * as React from "react";
import { ClientHeader } from "./ui/HeaderText";
import { TabNavigation } from "./ui/TabNavigation";

interface HeaderWithTabsProps {
  clientName?: string;
  initialActiveTab?: string;
  onTabChange?: (tabId: string) => void;
}

const defaultTabs = [
  { id: "client-info", label: "Client Info" },
  { id: "users", label: "Users" },
  { id: "price-overrides", label: "Price Overrides" },
  { id: "payroll-data", label: "Payroll Data" },
];

export const HeaderWithTabs: React.FC<HeaderWithTabsProps> = ({
  clientName = "{Client Name}",
  initialActiveTab = "payroll-data",
  onTabChange,
}) => {
  const [activeTab, setActiveTab] = React.useState(initialActiveTab);

  const handleTabChange = React.useCallback(
    (tabId: string) => {
      setActiveTab(tabId);
      onTabChange?.(tabId);
    },
    [onTabChange]
  );

  return (
    <div className="flex relative flex-col gap-6 items-start self-stretch mx-auto my-0 w-full max-md:gap-5 max-md:px-4 max-md:py-0 max-sm:gap-4 max-sm:px-3 max-sm:py-0">
      <ClientHeader clientName={clientName} />
      <TabNavigation
        tabs={defaultTabs}
        activeTabId={activeTab}
        onTabChange={handleTabChange}
      />
    </div>
  );
};

export default HeaderWithTabs;
