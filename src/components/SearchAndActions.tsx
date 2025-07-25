"use client";
import React from 'react';

export const SearchAndActions: React.FC = () => {
  return (
    <div className="flex justify-between items-end w-full max-md:flex-col max-md:gap-3 max-md: max-sm:gap-2">
      <div className="flex gap-2 justify-end items-end w-[482px] max-md:w-full max-sm:w-full">
        <div className="flex items-center bg-white rounded-md border border-gray-300 border-solid shadow-sm flex-[1_0_0]">
          <div className="flex gap-2 items-center px-3.5 py-2.5 flex-[1_0_0] max-sm:px-3 max-sm:py-2">
            <div>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="search-icon" style={{ width: '20px', height: '20px' }}>
                <path fillRule="evenodd" clipRule="evenodd" d="M8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4ZM2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8C14 9.29583 13.5892 10.4957 12.8907 11.4765L17.7071 16.2929C18.0976 16.6834 18.0976 17.3166 17.7071 17.7071C17.3166 18.0976 16.6834 18.0976 16.2929 17.7071L11.4765 12.8907C10.4957 13.5892 9.29583 14 8 14C4.68629 14 2 11.3137 2 8Z" fill="#9CA3AF" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search by worker name"
              className="text-sm font-medium leading-5 text-gray-500 max-sm:text-sm bg-transparent border-none outline-none flex-1"
              aria-label="Search by worker name"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-2 items-end max-md:flex-col max-md:gap-2 max-sm:gap-1.5">
        <div className="flex flex-col gap-1 justify-center items-start w-[186px] max-md:w-full">
          <div className="flex items-center bg-white rounded-md border border-gray-300 border-solid shadow-sm flex-[1_0_0] h-[38px]">
            <div className="flex gap-2 items-center py-2.5 pr-3 pl-3.5 flex-[1_0_0] max-sm:px-3 max-sm:py-2">
              <div className="text-sm leading-5 text-gray-800 flex-[1_0_0] max-sm:text-sm">
                Full Detail
              </div>
              <div>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="chevron-down" style={{ width: '16px', height: '16px' }}>
                  <path fillRule="evenodd" clipRule="evenodd" d="M4.21967 6.21967C4.51256 5.92678 4.98744 5.92678 5.28033 6.21967L8 8.93934L10.7197 6.21967C11.0126 5.92678 11.4874 5.92678 11.7803 6.21967C12.0732 6.51256 12.0732 6.98744 11.7803 7.28033L8.53033 10.5303C8.23744 10.8232 7.76256 10.8232 7.46967 10.5303L4.21967 7.28033C3.92678 6.98744 3.92678 6.51256 4.21967 6.21967Z" fill="#9CA3AF" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <button className="flex gap-2 justify-center items-center py-2.5 pr-4 pl-4 bg-white rounded-md border border-gray-300 border-solid shadow-sm cursor-pointer max-md:justify-center max-md:w-full max-sm:px-3 max-sm:py-2">
          <div>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="eye-icon" style={{ width: '20px', height: '20px' }}>
              <path d="M1.69629 10.2687C1.63872 10.0959 1.63867 9.90895 1.69614 9.73619C2.85311 6.2581 6.13399 3.75 10.0007 3.75C13.8656 3.75 17.1452 6.25577 18.3036 9.73134C18.3612 9.90406 18.3612 10.0911 18.3038 10.2638C17.1468 13.7419 13.8659 16.25 9.99922 16.25C6.13433 16.25 2.8547 13.7442 1.69629 10.2687Z" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12.5 10C12.5 11.3807 11.3807 12.5 10 12.5C8.61929 12.5 7.5 11.3807 7.5 10C7.5 8.61929 8.61929 7.5 10 7.5C11.3807 7.5 12.5 8.61929 12.5 10Z" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="text-sm font-medium leading-5 text-gray-800 max-sm:text-sm">
            Preview Invoice
          </span>
        </button>
        <button className="flex gap-2 justify-center items-center py-2.5 pr-4 pl-4 bg-indigo-50 rounded-md border border-indigo-600 border-solid shadow-sm cursor-pointer max-md:justify-center max-md:w-full max-sm:px-3 max-sm:py-2">
          <span className="text-sm font-medium leading-5 text-indigo-600 max-sm:text-sm">
            (2) Mark as Complete
          </span>
        </button>
      </div>
    </div>
  );
};
