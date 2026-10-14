import React from 'react';
import logoImg from '../assets/logo.jpg';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  showText = false,
}) => {
  const sizeMap = {
    sm: 'w-9 h-9',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24 md:w-28 md:h-28',
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={`relative rounded-full p-0.5 bg-gradient-to-tr from-amber-600 via-amber-300 to-yellow-500 shadow-lg shadow-amber-500/20 shrink-0 ${sizeMap[size]}`}>
        <img
          src={logoImg}
          alt="SF Talent Test Logo"
          className="w-full h-full rounded-full object-cover ring-1 ring-black/40"
        />
        <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 via-transparent to-white/10 pointer-events-none" />
      </div>

      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="font-extrabold tracking-wider text-white text-lg md:text-xl font-heading">
              SF <span className="gold-gradient-text">TALENT TEST</span>
            </span>
          </div>
          <p className="text-xs text-amber-200/80 tracking-wide font-medium">
            Your Talent… Your Future… Your Success!
          </p>
        </div>
      )}
    </div>
  );
};
