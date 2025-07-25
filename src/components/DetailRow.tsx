import React from 'react';
import { CurrencyAmount } from './ui/CurrencyAmount';

interface DetailRowProps {
  name: string;
  localAmount: string;
  localCurrency: string;
  usdAmount: string;
  hasBackground?: boolean;
}

export const DetailRow: React.FC<DetailRowProps> = ({
  name,
  localAmount,
  localCurrency,
  usdAmount,
  hasBackground = false
}) => {
  return (
    <div className="flex items-start w-full bg-white h-[60px] max-md:overflow-x-auto">
      <div className="flex gap-2 items-center py-4 pr-6 pl-36 h-full flex-[1_0_0] max-md:min-w-[200px] max-sm:py-3 max-sm:pr-4 max-sm:pl-16 max-sm:min-w-[150px]">
        <div className="text-base leading-6 text-gray-800 max-sm:text-sm">
          {name}
        </div>
      </div>
      <div className={`flex justify-end items-center px-6 py-4 h-full rounded-lg border border-gray-300 border-solid w-[200px] max-md:min-w-[120px] max-sm:px-4 max-sm:py-3 max-sm:min-w-[100px] ${hasBackground ? 'bg-gray-50' : 'bg-white'}`}>
        <CurrencyAmount amount={localAmount} currency={localCurrency} />
      </div>
      <div className="flex items-center px-6 py-4 h-full">
        <div className="text-base leading-6 text-indigo-600 max-sm:text-sm">
          ≈
        </div>
      </div>
      <div className="flex justify-end items-center px-6 py-4 h-full w-[200px] max-md:min-w-[120px] max-sm:px-4 max-sm:py-3 max-sm:min-w-[100px]">
        <CurrencyAmount amount={usdAmount} currency="USD" />
      </div>
    </div>
  );
};
