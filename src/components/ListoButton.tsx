import React from 'react';

export interface ButtonProps {
    primary?: boolean;
    backgroundColor?: string;
    size?: 'small' | 'medium' | 'large';
    label: string;
    onClick?: () => void;
}

export const Button = ({ label, primary = true, backgroundColor, size = 'medium', ...props }: ButtonProps) => {
    const mode = primary ? 'bg-blue-500 hover:bg-blue-700 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-800';
    const sizes = size === 'large' ? 'px-6 py-3 text-lg' : size === 'small' ? 'px-3 py-1 text-sm' : 'px-4 py-2 text-base';

    return (
        <button
            type="button"
            className={`font-bold rounded-md ${sizes} ${mode}`}
            style={{ backgroundColor }}
            {...props}
        >
            {label}
        </button>
    );
};