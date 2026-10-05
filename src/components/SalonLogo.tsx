import React from 'react';

interface SalonLogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'minimal' | 'monogram';
  lightText?: boolean;
}

export const SalonLogo: React.FC<SalonLogoProps> = ({
  className = '',
  variant = 'full',
  lightText = false,
}) => {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Icon emblem matching the salon's brand logo: scissor ring + pink female silhouette */}
      <div className="relative flex-shrink-0 w-11 h-11 rounded-full bg-gradient-to-br from-rose-50 via-rose-100 to-amber-50 p-1 shadow-sm border border-rose-200/80 flex items-center justify-center overflow-hidden group">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full transform transition-transform duration-300 group-hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Scissors background ring & blades */}
          <path
            d="M25 80 C20 75 20 65 28 60 C35 55 45 65 40 75 C36 82 28 83 25 80 Z"
            stroke="#292524"
            strokeWidth="3.5"
            fill="none"
          />
          <path
            d="M75 80 C80 75 80 65 72 60 C65 55 55 65 60 75 C64 82 72 83 75 80 Z"
            stroke="#292524"
            strokeWidth="3.5"
            fill="none"
          />
          {/* Blades crossing */}
          <path
            d="M32 65 L68 15"
            stroke="#78716C"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M68 65 L32 15"
            stroke="#A8A29E"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Central scissor pivot screw */}
          <circle cx="50" cy="40" r="3" fill="#D4AF37" stroke="#292524" strokeWidth="1" />

          {/* Elegant Circular Stylized Outer Arc */}
          <circle
            cx="50"
            cy="48"
            r="38"
            stroke="#D4AF37"
            strokeWidth="2"
            strokeDasharray="180 30"
            opacity="0.85"
          />

          {/* Graceful feminine face profile in signature vibrant rose pink */}
          <path
            d="M38 72 C42 62 48 55 54 48 C58 43 62 41 68 45 C64 47 62 50 63 54 C66 52 69 51 72 54 C66 57 65 60 69 63 C65 66 62 67 60 70 C57 73 50 82 38 72 Z"
            fill="url(#pinkGlow)"
          />
          {/* Flowing hair wave */}
          <path
            d="M52 28 C64 30 75 42 75 58 C75 66 71 74 65 80 C74 72 78 60 76 48 C74 36 64 27 52 28 Z"
            fill="#E11D48"
            opacity="0.8"
          />

          <defs>
            <linearGradient id="pinkGlow" x1="40" y1="35" x2="70" y2="75" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FB7185" />
              <stop offset="0.6" stopColor="#E11D48" />
              <stop offset="1" stopColor="#BE123C" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {variant !== 'monogram' && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span
              className={`font-serif tracking-wide text-xl font-bold ${
                lightText ? 'text-white' : 'text-stone-900'
              }`}
            >
              Sringar
            </span>
            <span className="text-rose-600 font-serif font-light text-xl italic">
              Beauty
            </span>
          </div>
          {variant === 'full' && (
            <span
              className={`text-[10px] tracking-widest uppercase font-medium ${
                lightText ? 'text-rose-200' : 'text-stone-500'
              }`}
            >
              Salon & Makeover Studio · Nilu Singh
            </span>
          )}
        </div>
      )}
    </div>
  );
};
