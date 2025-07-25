// src/components/CurrencyCard.stories.tsx
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { CurrencyCard } from '../components/CurrencyCard';
import { CountryFlag } from '../components/CountryFlag'; 
import { PencilSquareIcon } from '@heroicons/react/20/solid'; 

// Mock the CountryFlag component for Storybook if it's not a real component
// or if you want to control its rendering within Storybook.
// For this example, we'll assume CountryFlag is a valid React component
// that can be directly imported and used. If it's not, you might need to mock it.

// Define the metadata for your component story
const meta: Meta<typeof CurrencyCard> = {
  title: 'Components/CurrencyCard', // The path in the Storybook sidebar
  component: CurrencyCard, // The component being documented
  parameters: {
    // Optional: Add any global Storybook parameters here
    layout: 'centered', // Centers the component in the Storybook canvas
  },
  // Define controls for props, allowing interactive manipulation in Storybook UI
  argTypes: {
    country: {
      control: { type: 'select' },
      options: ['argentina', 'canada', 'costa-rica', 'germany', 'india'],
      description: 'The country associated with the currency.',
    },
    countryName: {
      control: 'text',
      description: 'The full name of the country.',
    },
    currencyCode: {
      control: 'text',
      description: 'The ISO currency code (e.g., USD, EUR).',
    },
    fxRate: {
      control: 'text',
      description: 'The foreign exchange rate.',
    },
    markup: {
      control: 'text',
      description: 'The markup applied to the exchange rate.',
    },
    onEdit: {
      action: 'editClicked', // Logs a 'editClicked' action when the button is pressed
      description: 'Callback function when the edit button is clicked.',
    },
  },
  // Add decorators if you need to wrap your component with context providers, etc.
  // For example, if your component relies on a global theme provider:
  // decorators: [
  //   (Story) => (
  //     <MyThemeProvider>
  //       <Story />
  //     </MyThemeProvider>
  //   ),
  // ],
};

export default meta;

// Define the type for your stories based on the component's props
type Story = StoryObj<typeof CurrencyCard>;

// --- Stories ---

// Default story: A typical CurrencyCard for Argentina
export const ArgentinaCard: Story = {
  args: {
    country: 'argentina',
    countryName: 'Argentina',
    currencyCode: 'ARS',
    fxRate: '1 USD = 875.00 ARS',
    markup: '2.5%',
    onEdit: () => console.log('Edit Argentina'), // Provide a dummy function for interaction
  },
};

// Story for Canada
export const CanadaCard: Story = {
  args: {
    country: 'canada',
    countryName: 'Canada',
    currencyCode: 'CAD',
    fxRate: '1 USD = 1.37 CAD',
    markup: '1.8%',
    onEdit: () => console.log('Edit Canada'),
  },
};

// Story for India with different values
export const IndiaCard: Story = {
  args: {
    country: 'india',
    countryName: 'India',
    currencyCode: 'INR',
    fxRate: '1 USD = 83.50 INR',
    markup: '0.9%',
    onEdit: () => console.log('Edit India'),
  },
};

// Story for Germany (Eurozone)
export const GermanyCard: Story = {
  args: {
    country: 'germany',
    countryName: 'Germany',
    currencyCode: 'EUR',
    fxRate: '1 USD = 0.92 EUR',
    markup: '1.2%',
    onEdit: () => console.log('Edit Germany'),
  },
};

// Story for Costa Rica
export const CostaRicaCard: Story = {
  args: {
    country: 'costa-rica',
    countryName: 'Costa Rica',
    currencyCode: 'CRC',
    fxRate: '1 USD = 520.00 CRC',
    markup: '3.0%',
    onEdit: () => console.log('Edit Costa Rica'),
  },
};

// Story showing the card without the edit button (onEdit prop is undefined)
export const CardWithoutEdit: Story = {
  args: {
    country: 'argentina',
    countryName: 'Argentina',
    currencyCode: 'ARS',
    fxRate: '1 USD = 875.00 ARS',
    markup: '2.5%',
    onEdit: undefined, // Explicitly set onEdit to undefined to hide the button
  },
};

// You can also create a story for an empty or loading state if your component supports it
// export const LoadingCard: Story = {
//   args: {
//     country: 'argentina', // Or a placeholder country
//     countryName: 'Loading...',
//     currencyCode: '...',
//     fxRate: '...',
//     markup: '...',
//     // You might have a loading prop in your CurrencyCard to show a spinner
//     // isLoading: true,
//     onEdit: undefined,
//   },
// };
