import React from 'react';

export const PayrollTableHeader: React.FC = () => {
  return (
    <header className="flex items-start w-full max-md:overflow-x-auto">
      <div className="flex items-center px-6 py-3 bg-gray-50 max-sm:px-4 max-sm:py-3 max-sm:w-12">
        <div className="flex justify-center items-center">
          <div className="w-4 h-4 bg-white rounded border border-gray-300 border-solid" />
        </div>
      </div>
      <div className="flex items-center px-6 py-3 bg-gray-50 flex-[1_0_0] max-md:min-w-[120px] max-sm:px-4 max-sm:py-3 max-sm:min-w-[100px]">
        <h3 className="text-xs font-medium tracking-wide leading-4 text-gray-500 uppercase max-sm:text-xs">
          Name
        </h3>
      </div>
      <div className="flex items-center px-6 py-3 bg-gray-50 flex-[1_0_0] max-md:min-w-[120px] max-sm:px-4 max-sm:py-3 max-sm:min-w-[100px]">
        <h3 className="text-xs font-medium tracking-wide leading-4 text-gray-500 uppercase max-sm:text-xs">
          Country
        </h3>
      </div>
      <div className="flex justify-end items-center px-6 py-3 bg-gray-50 w-[200px]">
        <h3 className="text-xs font-medium tracking-wide leading-4 text-gray-500 uppercase max-sm:text-xs">
          Local Currency
        </h3>
      </div>
      <div className="flex items-center px-6 py-3 bg-gray-50">
        <h3 className="text-xs font-medium tracking-wide leading-4 text-gray-500 uppercase max-sm:text-xs">
          ≈
        </h3>
      </div>
      <div className="flex justify-end items-center px-6 py-3 bg-gray-50 w-[200px]">
        <h3 className="text-xs font-medium tracking-wide leading-4 text-gray-500 uppercase max-sm:text-xs">
          Total
        </h3>
      </div>
    </header>
  );
};
