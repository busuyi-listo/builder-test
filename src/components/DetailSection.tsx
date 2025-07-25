import React from 'react';
import { CurrencyDisplay } from './CurrencyDisplay';

interface DetailSectionProps {
  title: string;
  localTotal: string;
  localCurrency: string;
  usdTotal: string;
  items: Array<{
    name: string;
    localAmount: string;
    localCurrency: string;
    usdAmount: string;
    hasBackground?: boolean;
  }>;
}

export const DetailSection: React.FC<DetailSectionProps> = ({
  title,
  localTotal,
  localCurrency,
  usdTotal,
  items
}) => {
  return (
    <>
      <div className="flex items-center py-2 pr-0 pl-28 pl-36 w-full bg-gray-50 max-sm:py-1.5 max-sm:pr-0 max-sm:pl-20">
        <div className="flex gap-2 items-center flex-[1_0_0]">
          <div className="hidden max-md:hidden max-sm:hidden">
            <div
              dangerouslySetInnerHTML={{
                __html:
                  "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"chevron-up-section\" style=\"width: 20px; height: 20px\"> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M9.46967 6.46967C9.76256 6.17678 10.2374 6.17678 10.5303 6.46967L14.7803 10.7197C15.0732 11.0126 15.0732 11.4874 14.7803 11.7803C14.4874 12.0732 14.0126 12.0732 13.7197 11.7803L10 8.06066L6.28033 11.7803C5.98744 12.0732 5.51256 12.0732 5.21967 11.7803C4.92678 11.4874 4.92678 11.0126 5.21967 10.7197L9.46967 6.46967Z\" fill=\"#4F46E5\"></path> </svg>",
              }}
            />
          </div>
          <div className="text-xs font-bold tracking-wider leading-4 text-gray-800 uppercase max-sm:text-xs">
            {title}
          </div>
        </div>
        <div className="flex gap-2 justify-end items-center px-6 py-0 w-[200px] max-sm:px-4 max-sm:py-0 max-sm:w-[140px]">
          <div className="text-xs font-bold tracking-wider leading-4 text-gray-800 uppercase max-sm:text-xs">
            {localTotal} {localCurrency}
          </div>
        </div>
        <div className="flex gap-2 justify-end items-center h-5 w-[59px]" />
        <div className="flex gap-2 justify-end items-center px-6 py-0 w-[200px] max-sm:px-4 max-sm:py-0 max-sm:w-[140px]">
          <div className="text-xs font-bold tracking-wider leading-4 text-gray-800 uppercase max-sm:text-xs">
            {usdTotal} USD
          </div>
        </div>
      </div>
      {items.map((item, index) => (
        <div key={index} className="flex items-start w-full bg-white h-[60px] max-md:min-w-[800px] max-sm:text-sm max-sm:min-w-[700px]">
          <div className="flex gap-2 items-center py-4 pr-6 pl-20 pl-36 h-full flex-[1_0_0] max-md:min-w-[200px] max-sm:py-3 max-sm:pr-4 max-sm:pl-16">
            <div className="text-base leading-6 text-gray-800 max-sm:text-sm">
              {item.name}
            </div>
          </div>
          <div className={`flex justify-end items-center px-6 py-4 h-full rounded-lg border border-gray-300 border-solid w-[200px] max-md:min-w-[150px] max-sm:px-4 max-sm:py-3 max-sm:w-[140px] ${item.hasBackground ? 'bg-gray-50' : 'bg-white'}`}>
            <CurrencyDisplay
              amount={item.localAmount}
              currency={item.localCurrency}
              amountClassName="text-base leading-5 text-gray-500 max-sm:text-sm"
              currencyClassName="text-sm font-semibold leading-5 text-gray-500 max-sm:text-xs"
            />
          </div>
          <div className="flex items-center px-6 py-4 h-full">
            <div className="text-base leading-6 text-indigo-600">≈</div>
          </div>
          <div className="flex justify-end items-center px-6 py-4 h-full w-[200px] max-md:min-w-[150px] max-sm:px-4 max-sm:py-3 max-sm:w-[140px]">
            <CurrencyDisplay
              amount={item.usdAmount}
              currency="USD"
            />
          </div>
        </div>
      ))}
    </>
  );
};
