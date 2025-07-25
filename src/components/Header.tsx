"use client";
import * as React from "react";
import { BreadcrumbNavigation } from "./ui/BreadcrumbNavigation";
import { PageTitle } from "./ui/PageTitle";

interface HeaderProps {
  clientName?: string;
}

export const Header: React.FC<HeaderProps> = ({
  clientName = "{Client Name}"
}) => {
  const breadcrumbItems = [
    { label: "Clients", isActive: false },
    { label: clientName, isActive: true }
  ];

  return (
    <div className="flex flex-col justify-center px-8 py-6 max-md:px-5 bg-white">
      <PageTitle title="Clients" />
      <BreadcrumbNavigation items={breadcrumbItems} />
    </div>
  );
};

export default Header;
