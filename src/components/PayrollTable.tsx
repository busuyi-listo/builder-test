import React from 'react';
import { TableHeader } from './TableHeader';
import { WorkerTable } from './WorkerTable';

export const PayrollTable: React.FC = () => {
  return (
    <main className="flex flex-col gap-4 items-start w-full max-md:gap-3">
      <TableHeader />
      <WorkerTable />
    </main>
  );
}
