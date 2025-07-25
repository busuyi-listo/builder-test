import React from 'react';
import { SearchBar } from './SearchBar';
import { ActionButtons } from './ActionButtons';

export const TableHeader: React.FC = () => {
  return (
    <div className="flex justify-between items-end w-full max-md:flex-col max-md:gap-3 max-md: max-sm:gap-2">
      <SearchBar />
      <ActionButtons />
    </div>
  );
};
