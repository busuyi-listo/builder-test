import React from 'react';

interface StatusIconProps {
  type: 'check-circle' | 'checkbox-unchecked' | 'checkbox-checked';
}

export const StatusIcon: React.FC<StatusIconProps> = ({ type }) => {
  switch (type) {
    case 'check-circle':
      return (
        <div
          dangerouslySetInnerHTML={{
            __html:
              "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"check-circle-icon\" style=\"width: 24px; height: 24px; flex-shrink: 0\"> <path d=\"M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z\" stroke=\"#10B981\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> </svg>",
          }}
        />
      );
    case 'checkbox-unchecked':
      return (
        <div className="w-4 h-4 bg-white rounded border border-gray-300 border-solid" />
      );
    case 'checkbox-checked':
      return (
        <div
          dangerouslySetInnerHTML={{
            __html:
              "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"checkbox-checked\" style=\"width: 16px; height: 16px\"> <rect x=\"0.5\" y=\"0.5\" width=\"15\" height=\"15\" rx=\"3.5\" fill=\"#4F46E5\"></rect> <rect x=\"0.5\" y=\"0.5\" width=\"15\" height=\"15\" rx=\"3.5\" stroke=\"#4F46E5\"></rect> <path d=\"M12.207 4.79279C12.3945 4.98031 12.4998 5.23462 12.4998 5.49979C12.4998 5.76495 12.3945 6.01926 12.207 6.20679L7.20704 11.2068C7.01951 11.3943 6.76521 11.4996 6.50004 11.4996C6.23488 11.4996 5.98057 11.3943 5.79304 11.2068L3.79304 9.20679C3.61088 9.01818 3.51009 8.76558 3.51237 8.50339C3.51465 8.24119 3.61981 7.99038 3.80522 7.80497C3.99063 7.61956 4.24144 7.51439 4.50364 7.51211C4.76584 7.50983 5.01844 7.61063 5.20704 7.79279L6.50004 9.08579L10.793 4.79279C10.9806 4.60532 11.2349 4.5 11.5 4.5C11.7652 4.5 12.0195 4.60532 12.207 4.79279Z\" fill=\"white\"></path> </svg>",
          }}
        />
      );
    default:
      return null;
  }
};
