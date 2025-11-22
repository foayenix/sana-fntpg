'use client';

import { ReactNode } from 'react';

// Gradient presets for SANA brand
export const gradients = {
  // Healing/Natural - Primary brand
  healing: 'from-[#6B9080] to-[#4A90A4]',
  sage: 'from-[#6B9080] to-[#5A7A6B]',

  // AI/Tech
  tech: 'from-purple-500 to-indigo-600',
  ai: 'from-violet-500 to-purple-600',

  // Evidence/Trust
  trust: 'from-[#4A90A4] to-blue-600',
  teal: 'from-teal-500 to-cyan-600',

  // Wellness/Vitality
  vitality: 'from-amber-500 to-orange-500',
  warm: 'from-rose-500 to-pink-600',

  // Calm/Balance
  calm: 'from-indigo-500 to-violet-600',

  // Success/Verification
  success: 'from-emerald-500 to-teal-600',

  // Alert/Important
  alert: 'from-red-500 to-rose-600',

  // Neutral/Professional
  slate: 'from-slate-600 to-slate-700',
};

export type GradientType = keyof typeof gradients;

interface FeatureIconProps {
  icon: ReactNode;
  gradient?: GradientType | string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  animate?: boolean;
}

const sizeClasses = {
  sm: 'w-8 h-8 rounded-lg',
  md: 'w-10 h-10 rounded-xl',
  lg: 'w-12 h-12 rounded-xl',
  xl: 'w-14 h-14 rounded-2xl',
};

const iconSizes = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
  xl: 'w-7 h-7',
};

export function FeatureIcon({
  icon,
  gradient = 'healing',
  size = 'md',
  className = '',
  animate = true,
}: FeatureIconProps) {
  const gradientClass = gradient in gradients
    ? gradients[gradient as GradientType]
    : gradient;

  return (
    <div
      className={`
        ${sizeClasses[size]}
        bg-gradient-to-br ${gradientClass}
        flex items-center justify-center
        shadow-lg
        ${animate ? 'hover:scale-110 hover:shadow-xl transition-all duration-300' : ''}
        ${className}
      `}
    >
      <div className={`text-white ${iconSizes[size]}`}>
        {icon}
      </div>
    </div>
  );
}

// Inline icon for use in text or lists
interface InlineIconProps {
  icon: ReactNode;
  color?: string;
  size?: 'sm' | 'md' | 'lg';
}

const inlineSizes = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
};

export function InlineIcon({
  icon,
  color = 'text-[#6B9080]',
  size = 'md',
}: InlineIconProps) {
  return (
    <span className={`inline-flex items-center justify-center ${inlineSizes[size]} ${color}`}>
      {icon}
    </span>
  );
}

// Check icon for feature lists
export function CheckIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`w-5 h-5 text-white ${className}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

// Feature list item with icon
interface FeatureListItemProps {
  icon?: ReactNode;
  children: ReactNode;
  iconColor?: string;
}

export function FeatureListItem({
  icon,
  children,
  iconColor = 'text-[#6B9080]',
}: FeatureListItemProps) {
  return (
    <div className="flex items-start gap-3">
      <div className={`flex-shrink-0 mt-0.5 ${iconColor}`}>
        {icon || (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        )}
      </div>
      <span>{children}</span>
    </div>
  );
}
