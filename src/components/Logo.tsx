'use client';

import { useState } from 'react';
import Image from 'next/image';

type LogoProps = {
  compact?: boolean;
  alt?: string;
  className?: string;
};

export default function Logo({ compact = false, alt = 'SANA', className = '' }: LogoProps) {
  const [imageError, setImageError] = useState(false);
  const imgSrc = compact ? '/logo-compact.svg' : '/logo.svg';

  // If image fails to load or hasn't been added yet, show fallback badge
  if (imageError) {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <div className={`${compact ? 'w-8 h-8' : 'w-9 h-9'} rounded-xl bg-gradient-to-br from-[#4A90A4] to-[#6B9080] flex items-center justify-center shadow-lg`}>
          <span className="text-white font-bold text-lg">S</span>
        </div>
        {!compact && <span className="font-bold text-xl text-[#2C3333]">SANA</span>}
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        <Image
          src={imgSrc}
          alt={alt}
          width={compact ? 32 : 36}
          height={compact ? 32 : 36}
          className="object-contain"
          onError={() => setImageError(true)}
        />
      </div>
      {!compact && <span className="font-bold text-xl text-[#2C3333]">SANA</span>}
    </div>
  );
}
