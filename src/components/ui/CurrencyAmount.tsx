import React from 'react';

interface CurrencyAmountProps {
  amount: string;
  currency: string;
  className?: string;
  bold?: boolean;
}

export const CurrencyAmount: React.FC<CurrencyAmountProps> = ({
  amount,
  currency,
  className = "",
  bold = false
}) => {
  return (
    <div className={`flex gap-1 items-baseline ${className}`}>
      <div className={`text-base leading-5 text-gray-800 max-sm:text-sm ${bold ? 'font-bold' : ''}`}>
        {amount}
      </div>
      <div className="text-sm font-semibold leading-5 text-gray-500 max-sm:text-xs">
        {currency}
      </div>
    </div>
  );
};
