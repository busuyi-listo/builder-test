"use client";
import React from 'react';
import { StepItem, type StepStatus } from './StepItem';

interface Step {
  id: string;
  title: string;
  status: StepStatus;
  stepNumber: string;
}

interface StepperWithChevronProps {
  steps?: Step[];
  className?: string;
}

const defaultSteps: Step[] = [
  {
    id: 'payroll',
    title: 'PAYROLL DATA',
    status: 'completed',
    stepNumber: '01'
  },
  {
    id: 'finance',
    title: 'FINANCE REVIEW',
    status: 'current',
    stepNumber: '02'
  },
  {
    id: 'approval',
    title: 'CLIENT APPROVAL',
    status: 'pending',
    stepNumber: '03'
  }
];

export const Stepper: React.FC<StepperWithChevronProps> = ({
  steps = defaultSteps,
  className = ""
}) => {
  return (
    <nav
      className={`flex relative items-center self-stretch border-t border-r border-b border-solid border-b-gray-300 border-r-gray-300 border-t-gray-300 max-md:flex-col max-md:border-r-[none] ${className}`}
      role="navigation"
      aria-label="Progress steps"
    >
      {steps.map((step, index) => (
        <StepItem
          key={step.id}
          status={step.status}
          stepNumber={step.stepNumber}
          title={step.title}
          isLast={index === steps.length - 1}
        />
      ))}
    </nav>
  );
};

export default Stepper;
