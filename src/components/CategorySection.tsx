import React from 'react';

interface CategorySectionProps {
  title: string;
  localAmount: string;
  localCurrency: string;
  usdAmount: string;
}

export const CategorySection: React.FC<CategorySectionProps> = ({
  title,
  localAmount,
  localCurrency,
  usdAmount
}) => {
  return (
    <div className="flex items-center py-2 pr-0 pl-32 w-full bg-gray-50 max-sm:py-1.5 max-sm:pr-0 max-sm:pl-20">
      <div className="flex gap-2 items-center flex-[1_0_0]">
        <h4 className="text-xs font-bold tracking-wider leading-4 text-gray-800 uppercase max-sm:text-xs">
          {title}
        </h4>
      </div>
      <div className="flex gap-2 justify-end items-center px-6 py-0 w-[200px]">
        <div className="text-xs font-bold tracking-wider leading-4 text-gray-800 uppercase max-sm:text-xs">
          {localAmount} {localCurrency}
        </div>
      </div>
      <div className="flex gap-2 justify-end items-center h-5 w-[59px]" />
      <div className="flex gap-2 justify-end items-center px-6 py-0 w-[200px]">
        <div className="text-xs font-bold tracking-wider leading-4 text-gray-800 uppercase max-sm:text-xs">
          {usdAmount} USD
        </div>
      </div>
    </div>
  );
};