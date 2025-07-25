import React from 'react';
import { CategorySection } from './CategorySection';
import { DetailRow } from './DetailRow';

interface ExpandedDetailsProps {
  isExpanded: boolean;
}

export const ExpandedDetails: React.FC<ExpandedDetailsProps> = ({ isExpanded }) => {
  return (
    <div
      className="overflow-hidden flex-col gap-2 items-start w-full rounded-none transition-all duration-[0.3s] ease-[ease]"
      style={{
        display: isExpanded ? "flex" : "none",
        maxHeight: isExpanded ? "2000px" : "0",
        opacity: isExpanded ? "1" : "0",
      }}
    >
      <CategorySection
        title="Wages"
        localAmount="€1,050"
        localCurrency="EUR"
        usdAmount="S1,124.23"
      />
      <DetailRow
        name="Salary"
        localAmount="€1,000"
        localCurrency="EUR"
        usdAmount="$1082.23"
        hasBackground={true}
      />
      <DetailRow
        name="13th month payment"
        localAmount="€50"
        localCurrency="EUR"
        usdAmount="$42"
        hasBackground={true}
      />
      <DetailRow
        name="Other"
        localAmount="€50"
        localCurrency="EUR"
        usdAmount="$42"
        hasBackground={true}
      />

      <CategorySection
        title="Recurring Payments"
        localAmount="€0"
        localCurrency="EUR"
        usdAmount="$0"
      />
      <DetailRow
        name="Internet"
        localAmount="€0"
        localCurrency="EUR"
        usdAmount="$0"
      />
      <DetailRow
        name="Mobile Allowance"
        localAmount="€0"
        localCurrency="EUR"
        usdAmount="$0"
      />

      <CategorySection
        title="One-time Payments"
        localAmount="€0"
        localCurrency="EUR"
        usdAmount="$0"
      />
      <DetailRow
        name="Example one-time payment"
        localAmount="€0"
        localCurrency="EUR"
        usdAmount="$0"
      />

      <CategorySection
        title="Reimbursements"
        localAmount="€112.00"
        localCurrency="EUR"
        usdAmount="$152.03"
      />
      <DetailRow
        name="Lunch with client"
        localAmount="€112.00"
        localCurrency="EUR"
        usdAmount="$152.03"
      />

      <CategorySection
        title="Benefits"
        localAmount="€0"
        localCurrency="EUR"
        usdAmount="$0"
      />
      <DetailRow
        name="Private Benefits"
        localAmount="€0.00"
        localCurrency="EUR"
        usdAmount="$0.00"
      />

      <CategorySection
        title="Taxes & Contributions"
        localAmount="€0"
        localCurrency="EUR"
        usdAmount="$0"
      />
      <DetailRow
        name="IMSS"
        localAmount="€0.00"
        localCurrency="EUR"
        usdAmount="$0.00"
      />
      <DetailRow
        name="State Payroll Tax"
        localAmount="€0.00"
        localCurrency="EUR"
        usdAmount="$0.00"
      />
      <DetailRow
        name="Social Security"
        localAmount="€0.00"
        localCurrency="EUR"
        usdAmount="$0.00"
      />
      <DetailRow
        name="Retirement Insurance"
        localAmount="€0.00"
        localCurrency="EUR"
        usdAmount="$0.00"
      />
      <DetailRow
        name="Other Tax"
        localAmount="€0.00"
        localCurrency="EUR"
        usdAmount="$0.00"
      />

      <CategorySection
        title="Fees"
        localAmount="€250"
        localCurrency="EUR"
        usdAmount="$200"
      />
    </div>
  );
};
