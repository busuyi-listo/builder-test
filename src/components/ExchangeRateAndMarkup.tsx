"use client";

import React from 'react';
import { CurrencyCard } from './CurrencyCard';
import { EyeSlashIcon } from '@heroicons/react/20/solid';

interface ExchangeRateData {
    country: 'argentina' | 'canada' | 'costa-rica' | 'germany' | 'india';
    countryName: string;
    currencyCode: string;
    fxRate: string;
    markup: string;
}

interface ExchangeRateAndMarkupFrameProps {
    onEditCurrency?: (country: string) => void;
    exchangeRates?: ExchangeRateData[];
}

const defaultExchangeRates: ExchangeRateData[] = [
    {
        country: 'argentina',
        countryName: 'Argentina',
        currencyCode: 'ARS',
        fxRate: '0.0009',
        markup: '0%'
    },
    {
        country: 'canada',
        countryName: 'Canada',
        currencyCode: 'CAD',
        fxRate: '0.6948',
        markup: '0%'
    },
    {
        country: 'costa-rica',
        countryName: 'Costa Rica',
        currencyCode: 'CRC',
        fxRate: '0.002',
        markup: '0%'
    },
    {
        country: 'germany',
        countryName: 'Germany',
        currencyCode: 'EUR',
        fxRate: '1.0877',
        markup: '0%'
    },
    {
        country: 'india',
        countryName: 'India',
        currencyCode: 'RUP',
        fxRate: '0.0000',
        markup: '0%'
    }
];

export const ExchangeRateAndMarkupFrame: React.FC<ExchangeRateAndMarkupFrameProps> = ({
    onEditCurrency,
    exchangeRates = defaultExchangeRates
}) => {
    return (
        <section className="flex relative flex-col gap-4 items-start self-stretch p-6 bg-gray-50 rounded-lg max-sm:p-4">
            <header className="flex relative justify-between items-center self-stretch">
                <h2 className="text-base font-semibold leading-5 text-gray-800 max-sm:text-sm">
                    Exchange Rate and Markup
                </h2>
                <div
                    className="flex relative gap-2 items-center cursor-pointer"
                    aria-label="Hide exchange rate and markup section"
                >
                    <EyeSlashIcon height={20} width={20} className='text-indigo-600'/>
                    <span className="text-sm font-semibold leading-5 text-indigo-600 max-sm:text-xs">
                        Hide Section
                    </span>
                </div>
            </header>

            <div className="flex overflow-x-auto relative gap-2 items-center w-full max-md:flex-wrap max-md:gap-3 max-sm:flex-col max-sm:gap-3">
                {exchangeRates.map((rate) => (
                    <CurrencyCard
                        key={rate.country}
                        country={rate.country}
                        countryName={rate.countryName}
                        currencyCode={rate.currencyCode}
                        fxRate={rate.fxRate}
                        markup={rate.markup}
                        onEdit={() => onEditCurrency?.(rate.country)}
                    />
                ))}
            </div>
        </section>
    );
};

export default ExchangeRateAndMarkupFrame;
