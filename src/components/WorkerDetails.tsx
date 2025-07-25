import React from 'react';
import { DetailSection } from './DetailSection';

export const WorkerDetails: React.FC = () => {
  const wagesItems = [
    { name: 'Salary', localAmount: '€1,000', localCurrency: 'EUR', usdAmount: '$1082.23', hasBackground: true },
    { name: '13th month payment', localAmount: '€50', localCurrency: 'EUR', usdAmount: '$42', hasBackground: true },
    { name: 'Other', localAmount: '€50', localCurrency: 'EUR', usdAmount: '$42', hasBackground: true }
  ];

  const recurringPaymentsItems = [
    { name: 'Internet', localAmount: '€0', localCurrency: 'EUR', usdAmount: '$0' },
    { name: 'Mobile Allowance', localAmount: '€0', localCurrency: 'EUR', usdAmount: '$0' }
  ];

  const oneTimePaymentsItems = [
    { name: 'Example one-time payment', localAmount: '€0', localCurrency: 'EUR', usdAmount: '$0' }
  ];

  const reimbursementsItems = [
    { name: 'Lunch with client', localAmount: '€112.00', localCurrency: 'EUR', usdAmount: '$152.03' }
  ];

  const benefitsItems = [
    { name: 'Private Benefits', localAmount: '€0.00', localCurrency: 'EUR', usdAmount: '$0.00' }
  ];

  const taxesItems = [
    { name: 'IMSS', localAmount: '€0.00', localCurrency: 'EUR', usdAmount: '$0.00' },
    { name: 'State Payroll Tax', localAmount: '€0.00', localCurrency: 'EUR', usdAmount: '$0.00' },
    { name: 'Social Security', localAmount: '€0.00', localCurrency: 'EUR', usdAmount: '$0.00' },
    { name: 'Retirement Insurance', localAmount: '€0.00', localCurrency: 'EUR', usdAmount: '$0.00' },
    { name: 'Other Tax', localAmount: '€0.00', localCurrency: 'EUR', usdAmount: '$0.00' }
  ];

  return (
    <div className="flex flex-col gap-2 items-start w-full rounded-none">
      <DetailSection
        title="Wages"
        localTotal="€1,050 EUR"
        localCurrency=""
        usdTotal="S1,124.23 USD"
        items={wagesItems}
      />

      <DetailSection
        title="Recurring Payments"
        localTotal="€0 EUR"
        localCurrency=""
        usdTotal="$0 USD"
        items={recurringPaymentsItems}
      />

      <DetailSection
        title="One-time Payments"
        localTotal="€0 EUR"
        localCurrency=""
        usdTotal="$0 USD"
        items={oneTimePaymentsItems}
      />

      <DetailSection
        title="Reimbursements"
        localTotal="€112.00 EUR"
        localCurrency=""
        usdTotal="$152.03 USD"
        items={reimbursementsItems}
      />

      <DetailSection
        title="Benefits"
        localTotal="€0 EUR"
        localCurrency=""
        usdTotal="$0 USD"
        items={benefitsItems}
      />

      <DetailSection
        title="Taxes &amp; Contributions"
        localTotal="€0 EUR"
        localCurrency=""
        usdTotal="$0 USD"
        items={taxesItems}
      />

      <div className="flex items-center py-2 pr-0 pl-28 pl-36 w-full bg-gray-50 max-sm:py-1.5 max-sm:pr-0 max-sm:pl-20">
        <div className="flex gap-2 items-center flex-[1_0_0]">
          <div className="text-xs font-bold tracking-wider leading-4 text-gray-800 uppercase max-sm:text-xs">
            Fees
          </div>
        </div>
        <div className="flex gap-2 justify-end items-center px-6 py-0 w-[200px] max-sm:px-4 max-sm:py-0 max-sm:w-[140px]">
          <div className="text-xs font-bold tracking-wider leading-4 text-gray-800 uppercase max-sm:text-xs">
            €250 EUR
          </div>
        </div>
        <div className="flex gap-2 justify-end items-center h-5 w-[59px]" />
        <div className="flex gap-2 justify-end items-center px-6 py-0 w-[200px] max-sm:px-4 max-sm:py-0 max-sm:w-[140px]">
          <div className="text-xs font-bold tracking-wider leading-4 text-gray-800 uppercase max-sm:text-xs">
            $200 USD
          </div>
        </div>
      </div>
    </div>
  );
};
