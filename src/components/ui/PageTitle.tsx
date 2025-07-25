import * as React from "react";

interface PageTitleProps {
  title: string;
}

export const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  return (
    <header className="flex items-center w-full text-2xl font-bold leading-none text-gray-800 whitespace-nowrap max-md:max-w-full">
      <div className="flex flex-1 shrink gap-2 items-center self-stretch my-auto w-full basis-0 min-w-60 max-md:max-w-full">
        <h2 className="flex-1 shrink self-stretch my-auto text-gray-800 basis-0 max-md:max-w-full">
          {title}
        </h2>
      </div>
    </header>
  );
};
