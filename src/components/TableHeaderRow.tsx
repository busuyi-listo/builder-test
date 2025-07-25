import React from 'react';
import { StatusIcon } from './StatusIcon';

export const TableHeaderRow: React.FC = () => {
  return (
    <div className="flex items-start w-full max-md:min-w-[800px] max-sm:text-sm max-sm:min-w-[700px]">
      <div className="flex items-center px-6 py-3 bg-gray-50 max-sm:px-4 max-sm:py-2">
        <div className="flex justify-center items-center">
          <StatusIcon type="checkbox-unchecked" />
        </div>
      </div>
      <div className="flex items-center px-6 py-3 bg-gray-50 flex-[1_0_0] max-md:min-w-[120px]">
        <div className="text-xs font-medium tracking-wide leading-4 text-gray-500 uppercase max-sm:text-xs">
          Name
        </div>
      </div>
      <div className="flex items-center px-6 py-3 bg-gray-50 flex-[1_0_0] max-md:min-w-[120px]">
        <div className="text-xs font-medium tracking-wide leading-4 text-gray-500 uppercase max-sm:text-xs">
          Country
        </div>
      </div>
      <div className="flex justify-end items-center px-6 py-3 bg-gray-50 w-[200px] max-md:min-w-[150px]">
        <div className="text-xs font-medium tracking-wide leading-4 text-gray-500 uppercase max-sm:text-xs">
          Local Currency
        </div>
      </div>
      <div className="flex items-center px-6 py-3 bg-gray-50">
        <div className="text-xs font-medium tracking-wide leading-4 text-gray-500 uppercase max-sm:text-xs">
          ≈
        </div>
      </div>
      <div className="flex justify-end items-center px-6 py-3 bg-gray-50 w-[200px] max-md:min-w-[150px]">
        <div className="text-xs font-medium tracking-wide leading-4 text-gray-500 uppercase max-sm:text-xs">
          Total
        </div>
      </div>
    </div>
  );
};
