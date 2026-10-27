import React from 'react';

/**
 * NowTech Solar Official Logo (Responsive for Mobile/iPhone & Desktop)
 */
export const NowTechSolarLogo: React.FC<{ className?: string; variant?: 'full' | 'compact' | 'icon' }> = ({
  className = '',
  variant = 'full',
}) => {
  if (variant === 'icon') {
    return (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className || 'h-8 w-8'}
        aria-label="NowTech Solar Ícone"
      >
        <circle cx="24" cy="24" r="22" fill="#0B192C" stroke="#F59E0B" strokeWidth="2" />
        <circle cx="24" cy="18" r="7" fill="#F59E0B" />
        <path
          d="M24 6V9M24 27V30M12 18H15M33 18H36M15.5 9.5L17.6 11.6M30.4 24.4L32.5 26.5M15.5 26.5L17.6 24.4M30.4 11.6L32.5 9.5"
          stroke="#FBBF24"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path d="M14 36L18 28H30L34 36H14Z" fill="#0284C7" stroke="#38BDF8" strokeWidth="1.5" />
        <path d="M24 28V36M16 32H32" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.8" />
      </svg>
    );
  }

  return (
    <div className={`inline-flex items-center gap-2 select-none shrink-0 ${className}`}>
      {/* Solar Emblem */}
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 sm:h-9 sm:w-9 shrink-0 drop-shadow-xs"
        aria-hidden="true"
      >
        <rect width="48" height="48" rx="12" fill="#0B192C" />
        <circle cx="24" cy="19" r="6.5" fill="url(#sunGradLight)" />
        <path
          d="M24 7V10M24 28V31M12 19H15M33 19H36M15.5 10.5L17.6 12.6M30.4 25.4L32.5 27.5M15.5 27.5L17.6 25.4M30.4 12.6L32.5 10.5"
          stroke="#FBBF24"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <path d="M13 38L17 31H31L35 38H13Z" fill="#0284C7" stroke="#38BDF8" strokeWidth="1.5" />
        <path d="M24 31V38M15 34.5H33" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.85" />
        <defs>
          <linearGradient id="sunGradLight" x1="17.5" y1="12.5" x2="30.5" y2="25.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F59E0B" />
            <stop offset="1" stopColor="#EA580C" />
          </linearGradient>
        </defs>
      </svg>

      {/* Brand Typography */}
      <div className="flex flex-col text-left leading-none">
        <div className="flex items-baseline tracking-tight">
          <span className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight">Now</span>
          <span className="text-base sm:text-lg font-bold text-amber-500 tracking-tight">Tech</span>
          <span className="ml-1 text-[10px] sm:text-xs font-bold tracking-wider text-amber-600 uppercase">Solar</span>
        </div>
        <span className="text-[9px] font-semibold tracking-[0.16em] text-slate-500 uppercase mt-0.5">
          Energia Inteligente
        </span>
      </div>
    </div>
  );
};

/**
 * GoodWe Official Logo
 */
export const GoodWeLogo: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`inline-flex items-center gap-1.5 shrink-0 ${className}`}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 sm:h-6 sm:w-6 shrink-0"
        aria-hidden="true"
      >
        <rect width="100" height="100" rx="22" fill="#E60012" />
        <path
          d="M72 48H52V58H62C60.5 66 54 71 46 71C35.5 71 27 62.5 27 52C27 41.5 35.5 33 46 33C53 33 58.5 37 61.5 42.5L71 35C65.5 26.5 56.5 21 46 21C29 21 15 35 15 52C15 69 29 83 46 83C61 83 72.5 72 73 57C73.1 53.5 72.7 50.5 72 48Z"
          fill="white"
        />
        <circle cx="52" cy="48" r="4" fill="white" />
      </svg>
      <div className="flex items-center tracking-tight font-black leading-none">
        <span className="text-sm sm:text-base text-slate-900 tracking-widest">GOOD</span>
        <span className="text-sm sm:text-base text-[#E60012] tracking-widest">WE</span>
      </div>
    </div>
  );
};

/**
 * SEMS+ App Official Icon
 */
export const SemsPlusIcon: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 54,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`rounded-2xl shadow-sm shrink-0 ${className}`}
      aria-label="Ícone do Aplicativo SEMS+ GoodWe"
    >
      <defs>
        <linearGradient id="semsBgLight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0284C7" />
          <stop offset="50%" stopColor="#0EA5E9" />
          <stop offset="100%" stopColor="#10B981" />
        </linearGradient>
      </defs>
      <rect width="80" height="80" rx="18" fill="url(#semsBgLight)" />
      <rect width="78" height="78" x="1" y="1" rx="17" stroke="white" strokeWidth="1.5" strokeOpacity="0.4" />
      
      {/* S waveform curve */}
      <path
        d="M52 24C48 20 40 20 34 23C27.5 26.2 25 32 28 37C31 42 47 43 49 49C51 55 45 60 38 60C31 60 25 55 24 50"
        stroke="white"
        strokeWidth="6.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Spark badge */}
      <g transform="translate(50, 16)">
        <circle cx="12" cy="12" r="10" fill="#F59E0B" />
        <path d="M12 7V17M7 12H17" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      </g>
      <circle cx="28" cy="27" r="2.5" fill="white" fillOpacity="0.9" />
      <circle cx="48" cy="54" r="2.5" fill="white" fillOpacity="0.9" />
    </svg>
  );
};

export const AndroidIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={`shrink-0 ${className}`} aria-hidden="true">
    <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.551 0 .9993.4482.9993.9993.0001.5511-.4483.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.997-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.4126 13.8533 8.083 12 8.083c-1.8534 0-3.5902.3296-5.1365.8667L4.8412 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.152 5676l1.997 3.4592C2.6889 11.1867.3432 14.6589 0 18.7402h24c-.3432-4.0813-2.6889-7.5535-6.1185-9.4188" />
  </svg>
);

export const AppleIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 170 170" fill="currentColor" className={`shrink-0 ${className}`} aria-hidden="true">
    <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.59-7.71-11.66-14.01-6.16-9.66-11.05-20.73-14.66-33.22-3.61-12.5-5.42-24.16-5.42-35 0-14.86 3.93-27.17 11.79-36.93 7.86-9.76 17.65-14.71 29.37-14.86 4.78 0 10.14 1.25 16.08 3.76 5.94 2.5 9.77 3.82 11.49 3.94 1.94-.25 5.86-1.63 11.77-4.14 5.91-2.5 11.27-3.69 16.09-3.56 12.06.63 21.72 4.96 28.98 13.01-10.49 6.37-15.61 15.18-15.37 26.43.24 9.04 3.63 16.63 10.17 22.77 6.54 6.14 14.34 9.53 23.4 10.17-2.31 6.84-5.06 13.68-8.25 20.52zM119.22 31.02c0-7.39 2.66-14.33 7.99-20.81 5.33-6.49 11.88-10.21 19.64-11.17.26 1.49.39 2.92.39 4.29 0 7.4-2.8 14.47-8.39 21.2-5.59 6.74-12.28 10.44-20.08 11.11-.27-1.46-.4-2.92-.4-4.38z" />
  </svg>
);
