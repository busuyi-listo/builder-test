import React from 'react';
import { CountryFlag } from './CountryFlag';
import { PencilSquareIcon } from '@heroicons/react/20/solid';

interface CurrencyCardProps {
  country: 'argentina' | 'canada' | 'costa-rica' | 'germany' | 'india';
  countryName: string;
  currencyCode: string;
  fxRate: string;
  markup: string;
  onEdit?: () => void;
}

export const CurrencyCard: React.FC<CurrencyCardProps> = ({
  country,
  countryName,
  currencyCode,
  fxRate,
  markup,
  onEdit
}) => {
  return (
    <article className="flex relative flex-col shrink-0 gap-1 items-start p-4 bg-white rounded border border-gray-300 border-solid h-[120px] w-[200px] max-md:w-[calc(50%_-_6px)] max-sm:w-full">
      <header className="flex relative gap-2 items-center self-stretch">
        <CountryFlag country={country} />
        <h3 className="text-base font-semibold leading-5 text-gray-800">
          {countryName}
        </h3>
      </header>

      <div className="text-xs font-semibold leading-5 text-gray-400">
        {currencyCode}
      </div>

      <div className="flex relative gap-1 items-start">
        <span className="text-sm font-medium leading-5 text-gray-800">
          FX Rate:
        </span>
        <span className="text-sm font-medium leading-5 text-gray-800">
          {fxRate}
        </span>
      </div>

      <div className="flex relative justify-between items-start self-stretch">
        <div className="flex relative gap-1 items-center">
          <span className="text-sm font-medium leading-5 text-gray-800">
            Markup:
          </span>
          <span className="text-sm font-medium leading-5 text-gray-800">
            {markup}
          </span>
        </div>
        <button
          onClick={onEdit}
          className="cursor-pointer"
          aria-label={`Edit ${countryName} exchange rate and markup`}
        >
          <PencilSquareIcon/>
        </button>
      </div>
    </article>
  );
};
