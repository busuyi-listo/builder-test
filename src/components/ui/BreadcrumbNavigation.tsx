import * as React from "react";

interface BreadcrumbItem {
  label: string;
  isActive?: boolean;
}

interface BreadcrumbNavigationProps {
  items: BreadcrumbItem[];
}

export const BreadcrumbNavigation: React.FC<BreadcrumbNavigationProps> = ({ items }) => {
  return (
    <section className="flex flex-col justify-center mt-2 w-full max-md:max-w-full">
      <div className="w-full min-h-px max-md:max-w-full">
        <div className="flex w-full bg-gray-200 min-h-px max-md:max-w-full" />
      </div>
      <nav
        className="flex gap-4 items-center self-start mt-2 text-sm leading-none rounded-md"
        aria-label="Breadcrumb navigation"
      >
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <div className="flex justify-center items-center self-stretch my-auto">
              <span
                className={`self-stretch my-auto ${
                  item.isActive
                    ? 'font-medium text-gray-800'
                    : 'text-gray-500'
                }`}
                aria-current={item.isActive ? 'page' : undefined}
              >
                {item.label}
              </span>
            </div>
            {index < items.length - 1 && (
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/de5fb19d4e15ec06ab7e148dba4bb4dd8f4c0801?placeholderIfAbsent=true&apiKey=1929d746fae94ea7a40ccb6a8c5b7eaa"
                alt=""
                className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                role="presentation"
              />
            )}
          </React.Fragment>
        ))}
      </nav>
    </section>
  );
};
