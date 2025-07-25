/* eslint-disable @typescript-eslint/no-unused-vars */
import { CheckIcon } from '@heroicons/react/16/solid';
import React from 'react';

export type StepStatus = 'completed' | 'current' | 'pending';

interface StepItemProps {
  status: StepStatus;
  stepNumber: string;
  title: string;
  isLast?: boolean;
}

export const StepItem: React.FC<StepItemProps> = ({
  status,
  stepNumber,
  title,
  isLast = false
}) => {
  const getStepClasses = () => {
    const baseClasses = "relative h-20 border-l border-solid border-l-gray-300 flex-[1_0_0] max-md:w-full max-md:h-auto max-md:border-r max-md:border-l max-md:border-solid max-md:border-l-gray-300 max-md:border-r-gray-300 max-md:min-h-20";

    if (status === 'completed') {
      return `${baseClasses} border-t border-b border-solid border-b-gray-300 border-t-gray-300`;
    } else if (status === 'current') {
      return `${baseClasses} border-b-4 border-solid border-b-indigo-600`;
    } else {
      return baseClasses;
    }
  };

  const getIndicatorClasses = () => {
    const baseClasses = "flex relative flex-col shrink-0 justify-center items-center w-10 h-10 rounded-3xl max-sm:w-8 max-sm:h-8";

    if (status === 'completed') {
      return `${baseClasses} bg-emerald-500`;
    } else if (status === 'current') {
      return `${baseClasses} border-2 border-indigo-600 border-solid`;
    } else {
      return `${baseClasses} border-2 border-gray-300 border-solid`;
    }
  };

  const getStepNumberClasses = () => {
    const baseClasses = "relative text-sm font-medium leading-4 max-sm:text-xs";

    if (status === 'current') {
      return `${baseClasses} text-indigo-600`;
    } else {
      return `${baseClasses} text-gray-500`;
    }
  };

  const getTitleClasses = () => {
    const baseClasses = "relative text-xs font-semibold tracking-wide leading-4 uppercase max-sm:text-xs max-sm:tracking-wide max-sm:leading-4";

    if (status === 'completed') {
      return `${baseClasses} text-gray-500`;
    } else if (status === 'current') {
      return `${baseClasses} text-indigo-600`;
    } else {
      return `${baseClasses} text-gray-800`;
    }
  };

  return (
    <div className={getStepClasses()}>
      <div className="flex absolute top-0 left-0 shrink-0 gap-4 items-center px-6 pt-5 pb-4 h-20 w-[352px] max-md:px-5 max-md:py-4 max-md:w-full max-sm:gap-3 max-sm:px-4 max-sm:py-3">
        <div className={getIndicatorClasses()}>
          {status === 'completed' ? (
            <div className="w-5 h-5 max-sm:w-4 max-sm:h-4">
                <CheckIcon className='text-white'/>
            </div>
          ) : (
            <span className={getStepNumberClasses()}>
              {stepNumber}
            </span>
          )}
        </div>
        <div className="flex relative flex-col justify-center items-start">
          <h3 className={getTitleClasses()}>
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
};
