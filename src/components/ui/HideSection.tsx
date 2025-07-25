import { EyeSlashIcon } from '@heroicons/react/20/solid';
import React from 'react';

interface HideSectionProps {
  onHide?: () => void;
}

export const HideSection: React.FC<HideSectionProps> = ({ onHide }) => {
  return (
    <div
      className="flex relative gap-2 items-center cursor-pointer"
      onClick={onHide}
      aria-label="Hide exchange rate and markup section"
    >
      <EyeSlashIcon />
      <span className="text-sm font-semibold leading-5 text-indigo-600 max-sm:text-xs">
        Hide Section
      </span>
    </div>
  );
};
