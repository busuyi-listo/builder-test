import React from 'react';

interface CurrencyDisplayProps {
  amount: string;
  currency: string;
  isBold?: boolean;
}

export const CurrencyDisplay: React.FC<CurrencyDisplayProps> = ({
  amount,
  currency,
  isBold = false
}) => {
  return (
    <div className="flex gap-1 items-baseline">
      <div className={`text-base leading-5 text-gray-800 max-sm:text-sm ${isBold ? 'font-bold' : ''}`}>
        {amount}
      </div>
      <div className="text-sm font-semibold leading-5 text-gray-500 max-sm:text-xs">
        {currency}
      </div>
    </div>
  );
};
