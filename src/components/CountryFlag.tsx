import React from 'react';

// Import for dynamic flag loading
const flagModules = import.meta.glob('../assets/flags/*.svg', { 
  eager: true, 
  import: 'default' 
});

interface CountryFlagProps {
  country: string;
  className?: string;
}

export const CountryFlag: React.FC<CountryFlagProps> = ({ 
  country,
  className = "relative w-5 h-5" 
}) => {
  // Normalize country name to match file names
  const normalizedCountry = country.toLowerCase().replace(/\s+/g, '-');
  
  // Find matching flag
  const flagSrc = Object.entries(flagModules).find(([path]) => 
    path.includes(normalizedCountry)
  )?.[1] as string | undefined;

  if (!flagSrc) {
    console.warn(`Flag not found for country: ${country}`);
    return null;
  }

  return (
    <div className={className}>
      <img 
        src={flagSrc} 
        alt={`${country} flag`} 
        className="w-full h-full object-contain"
        loading="lazy"
      />
    </div>
  );
};