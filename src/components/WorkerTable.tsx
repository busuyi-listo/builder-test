"use client";

import React, { useState } from 'react';
import { TableRow } from './TableRow';
import { ExpandedDetails } from './ExpandedDetails';
import { TableHeaderRow } from './TableHeaderRow';

interface SelectedRows {
  [key: string]: boolean;
}

interface ExpandedRows {
  [key: string]: boolean;
}

export const Table: React.FC = () => {
  const [selectedRows, setSelectedRows] = useState<SelectedRows>({});
  const [expandedRows, setExpandedRows] = useState<ExpandedRows>({});

  const toggleSelection = (id: string) => {
    setSelectedRows(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const toggleRow = (id: string) => {
    setExpandedRows(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const tableData = [
    {
      id: 'paul',
      name: 'Paul Atredis',
      country: 'Argentina' as const,
      localAmount: '$2,003,678.67',
      localCurrency: 'ARS',
      usdAmount: '$1,875.41',
      status: 'completed' as const
    },
    {
      id: 'michael',
      name: 'Michael Phelps',
      country: 'Canada' as const,
      localAmount: '$1344.40',
      localCurrency: 'CAD',
      usdAmount: '$937.10',
      status: 'completed' as const
    },
    {
      id: 'katie',
      name: 'Katie Ledecky',
      country: 'Costa Rica' as const,
      localAmount: '₡468,149.50',
      localCurrency: 'CRC',
      usdAmount: '$937.10',
      status: 'selectable' as const
    },
    {
      id: 'cameron',
      name: 'Cameron Hodges',
      country: 'Germany' as const,
      localAmount: '€1140.48',
      localCurrency: 'EUR',
      usdAmount: '$1234.50',
      status: 'selectable' as const,
      hasExpandableContent: true,
      isBold: true
    }
  ];

  return (
    <section className="flex flex-col items-start w-full rounded-md border border-gray-300 border-solid max-sm:rounded-md">
      <TableHeaderRow />

      {tableData.map((row) => (
        <React.Fragment key={row.id}>
          <TableRow
            id={row.id}
            name={row.name}
            country={row.country}
            localAmount={row.localAmount}
            localCurrency={row.localCurrency}
            usdAmount={row.usdAmount}
            status={row.status}
            isSelected={selectedRows[row.id]}
            onToggleSelection={toggleSelection}
            hasExpandableContent={row.hasExpandableContent}
            isExpanded={expandedRows[row.id]}
            onToggleExpansion={toggleRow}
            isBold={row.isBold}
          />
          {row.hasExpandableContent && (
            <ExpandedDetails isExpanded={expandedRows[row.id]} />
          )}
        </React.Fragment>
      ))}
    </section>
  );
};

export default Table;
