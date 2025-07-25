"use client";

import React from 'react';
import { CountryFlag } from './CountryFlag';
import { CurrencyDisplay } from './CurrencyDisplay';
import { CheckboxInput } from './ui/CheckboxInput';

interface TableRowProps {
  id: string;
  name: string;
  country: 'Argentina' | 'Canada' | 'Costa Rica' | 'Germany';
  localAmount: string;
  localCurrency: string;
  usdAmount: string;
  status: 'completed' | 'selectable';
  isSelected?: boolean;
  onToggleSelection?: (id: string) => void;
  hasExpandableContent?: boolean;
  isExpanded?: boolean;
  onToggleExpansion?: (id: string) => void;
  isBold?: boolean;
}

export const TableRow: React.FC<TableRowProps> = ({
  id,
  name,
  country,
  localAmount,
  localCurrency,
  usdAmount,
  status,
  isSelected = false,
  onToggleSelection,
  hasExpandableContent = false,
  isExpanded = false,
  onToggleExpansion,
  isBold = false
}) => {
  const handleRowClick = () => {
    if (hasExpandableContent && onToggleExpansion) {
      onToggleExpansion(id);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleRowClick();
    }
  };

  const renderStatusIcon = () => {
    if (status === 'completed') {
      return (
        <div
          dangerouslySetInnerHTML={{
            __html: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="check-circle-icon" style="width: 24px; height: 24px; flex-shrink: 0"><path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#10B981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>'
          }}
        />
      );
    } else if (status === 'selectable' && id === 'cameron') {
      return (
        <div
          dangerouslySetInnerHTML={{
            __html: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="checkbox-checked" style="width: 16px; height: 16px"><rect x="0.5" y="0.5" width="15" height="15" rx="3.5" fill="#4F46E5"></rect><rect x="0.5" y="0.5" width="15" height="15" rx="3.5" stroke="#4F46E5"></rect><path d="M12.207 4.79279C12.3945 4.98031 12.4998 5.23462 12.4998 5.49979C12.4998 5.76495 12.3945 6.01926 12.207 6.20679L7.20704 11.2068C7.01951 11.3943 6.76521 11.4996 6.50004 11.4996C6.23488 11.4996 5.98057 11.3943 5.79304 11.2068L3.79304 9.20679C3.61088 9.01818 3.51009 8.76558 3.51237 8.50339C3.51465 8.24119 3.61981 7.99038 3.80522 7.80497C3.99063 7.61956 4.24144 7.51439 4.50364 7.51211C4.76584 7.50983 5.01844 7.61063 5.20704 7.79279L6.50004 9.08579L10.793 4.79279C10.9806 4.60532 11.2349 4.5 11.5 4.5C11.7652 4.5 12.0195 4.60532 12.207 4.79279Z" fill="white"></path></svg>'
          }}
        />
      );
    } else {
      return (
        <CheckboxInput
          checked={isSelected}
          onChange={() => onToggleSelection?.(id)}
          ariaLabel={`Select ${name} row`}
        />
      );
    }
  };

  const renderChevron = () => {
    if (!hasExpandableContent) {
      return (
        <div
          dangerouslySetInnerHTML={{
            __html: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="chevron-down-blue" style="width: 20px; height: 20px"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 7.29289C5.68342 6.90237 6.31658 6.90237 6.7071 7.29289L9.99999 10.5858L13.2929 7.29289C13.6834 6.90237 14.3166 6.90237 14.7071 7.29289C15.0976 7.68342 15.0976 8.31658 14.7071 8.70711L10.7071 12.7071C10.3166 13.0976 9.68341 13.0976 9.29289 12.7071L5.29289 8.70711C4.90237 8.31658 4.90237 7.68342 5.29289 7.29289Z" fill="#4F46E5"></path></svg>'
          }}
        />
      );
    }

    return (
      <div
        dangerouslySetInnerHTML={{
          __html: isExpanded
            ? '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="chevron-up-blue" style="width: 20px; height: 20px"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.7071 12.7071C14.3166 13.0976 13.6834 13.0976 13.2929 12.7071L10 9.41421L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071C4.90237 12.3166 4.90237 11.6834 5.29289 11.2929L9.29289 7.29289C9.68342 6.90237 10.3166 6.90237 10.7071 7.29289L14.7071 11.2929C15.0976 11.6834 15.0976 12.3166 14.7071 12.7071Z" fill="#4F46E5"></path></svg>'
            : '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="chevron-down-blue" style="width: 20px; height: 20px"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 7.29289C5.68342 6.90237 6.31658 6.90237 6.7071 7.29289L9.99999 10.5858L13.2929 7.29289C13.6834 6.90237 14.3166 6.90237 14.7071 7.29289C15.0976 7.68342 15.0976 8.31658 14.7071 8.70711L10.7071 12.7071C10.3166 13.0976 9.68341 13.0976 9.29289 12.7071L5.29289 8.70711C4.90237 8.31658 4.90237 7.68342 5.29289 7.29289Z" fill="#4F46E5"></path></svg>'
        }}
      />
    );
  };

  const rowClasses = `flex items-start w-full shadow-sm h-[60px] max-md:overflow-x-auto ${
    hasExpandableContent
      ? 'bg-indigo-50 cursor-pointer duration-[0.2s] ease-[ease] transition-[background-color]'
      : 'bg-white'
  }`;

  const nameClasses = `text-base leading-6 text-gray-800 max-sm:text-sm ${
    isBold ? 'font-bold' : 'font-medium'
  }`;

  const countryTextClasses = `text-base leading-6 max-sm:text-sm ${
    country === 'Germany' ? 'text-gray-800' : 'text-gray-500'
  }`;

  if (hasExpandableContent) {
    return (
      <div
        className={rowClasses}
        role="button"
        aria-label={`Toggle ${name} details`}
        tabIndex={0}
        aria-expanded={isExpanded}
        onClick={handleRowClick}
        onKeyDown={handleKeyDown}
      >
        <div className="flex gap-2 justify-center items-center px-6 py-4 w-16 h-full max-sm:px-4 max-sm:py-3 max-sm:w-12">
          {renderStatusIcon()}
        </div>
        <div className="flex gap-2 items-center px-6 py-4 h-full flex-[1_0_0] max-md:min-w-[120px] max-sm:px-4 max-sm:py-3 max-sm:min-w-[100px]">
          {renderChevron()}
          <div className={nameClasses}>
            {name}
          </div>
        </div>
        <div className="flex gap-2 items-center px-6 py-4 h-full flex-[1_0_0] max-md:min-w-[120px] max-sm:px-4 max-sm:py-3 max-sm:min-w-[100px]">
          <CountryFlag country={country} />
          <div className={countryTextClasses}>
            {country}
          </div>
        </div>
        <div className="flex justify-end items-center px-6 py-4 h-full w-[200px] max-md:min-w-[150px] max-sm:px-4 max-sm:py-3 max-sm:min-w-[120px]">
          <CurrencyDisplay amount={localAmount} currency={localCurrency} isBold={isBold} />
        </div>
        <div className="flex items-center px-6 py-4 h-full">
          <div className="text-base leading-6 text-indigo-600 max-sm:text-sm">≈</div>
        </div>
        <div className="flex justify-end items-center px-6 py-4 h-full w-[200px] max-md:min-w-[150px] max-sm:px-4 max-sm:py-3 max-sm:min-w-[120px]">
          <CurrencyDisplay amount={usdAmount} currency="USD" isBold={isBold} />
        </div>
      </div>
    );
  }

  return (
    <div className={rowClasses}>
      <div className="flex gap-2 justify-center items-center px-6 py-4 w-16 h-full max-sm:px-4 max-sm:py-3 max-sm:w-12">
        {renderStatusIcon()}
      </div>
      <div className="flex gap-2 items-center px-6 py-4 h-full flex-[1_0_0] max-md:min-w-[120px] max-sm:px-4 max-sm:py-3 max-sm:min-w-[100px]">
        {renderChevron()}
        <div className={nameClasses}>
          {name}
        </div>
      </div>
      <div className="flex gap-2 items-center px-6 py-4 h-full flex-[1_0_0] max-md:min-w-[120px] max-sm:px-4 max-sm:py-3 max-sm:min-w-[100px]">
        <CountryFlag country={country} />
        <div className={countryTextClasses}>
          {country}
        </div>
      </div>
      <div className="flex justify-end items-center px-6 py-4 h-full w-[200px] max-md:min-w-[150px] max-sm:px-4 max-sm:py-3 max-sm:min-w-[120px]">
        <CurrencyDisplay amount={localAmount} currency={localCurrency} />
      </div>
      <div className="flex items-center px-6 py-4 h-full">
        <div className="text-base leading-6 text-indigo-600 max-sm:text-sm">≈</div>
      </div>
      <div className="flex justify-end items-center px-6 py-4 h-full w-[200px] max-md:min-w-[150px] max-sm:px-4 max-sm:py-3 max-sm:min-w-[120px]">
        <CurrencyDisplay amount={usdAmount} currency="USD" />
      </div>
    </div>
  );
};
