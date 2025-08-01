import React from 'react';

export const SearchBar: React.FC = () => {
  return (
    <div className="flex gap-2 justify-end items-end w-[482px] max-md:w-full max-sm:w-full">
      <div className="flex items-center bg-white rounded-md border border-gray-300 border-solid shadow-sm flex-[1_0_0]">
        <div className="flex gap-2 items-center px-3.5 py-2.5 flex-[1_0_0] max-sm:px-3 max-sm:py-2">
          <div>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"search-icon\" style=\"width: 20px; height: 20px\"> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4ZM2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8C14 9.29583 13.5892 10.4957 12.8907 11.4765L17.7071 16.2929C18.0976 16.6834 18.0976 17.3166 17.7071 17.7071C17.3166 18.0976 16.6834 18.0976 16.2929 17.7071L11.4765 12.8907C10.4957 13.5892 9.29583 14 8 14C4.68629 14 2 11.3137 2 8Z\" fill=\"#9CA3AF\"></path> </svg>",
              }}
            />
          </div>
          <div className="text-sm font-medium leading-5 text-gray-500 max-sm:text-sm">
            Search by worker name
          </div>
        </div>
      </div>
    </div>
  );
};
