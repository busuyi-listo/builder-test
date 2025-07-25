import * as React from "react";

interface ClientHeaderProps {
  clientName: string;
}

export const ClientHeader: React.FC<ClientHeaderProps> = ({ clientName }) => {
  return (
    <div className="flex relative items-center self-stretch">
      <h3 className="relative text-2xl font-bold leading-7 text-gray-800 max-md:text-2xl max-md:leading-7 max-sm:text-xl max-sm:leading-6">
        {clientName}
      </h3>
    </div>
  );
};
