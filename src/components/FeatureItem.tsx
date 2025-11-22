import { LucideIcon } from 'lucide-react';

interface FeatureItemProps {
  icon: LucideIcon;
  gradient: string;
  title: string;
  description?: string;
  compact?: boolean;
}

export function FeatureItem({ icon: Icon, gradient, title, description, compact = false }: FeatureItemProps) {
  if (compact) {
    return (
      <div className="flex items-center gap-3 group">
        <div className={`
          flex-shrink-0 w-8 h-8 rounded-lg
          bg-gradient-to-br ${gradient}
          flex items-center justify-center
          shadow-sm
          transition-all duration-300
          group-hover:shadow-md group-hover:scale-105
        `}>
          <Icon className="w-4 h-4 text-white" strokeWidth={2} />
        </div>
        <span className="text-sm font-medium text-gray-900">{title}</span>
      </div>
    );
  }

  return (
    <div className="flex items-start gap-3 group">
      <div className={`
        flex-shrink-0 w-10 h-10 rounded-lg
        bg-gradient-to-br ${gradient}
        flex items-center justify-center
        shadow-sm
        transition-all duration-300
        group-hover:shadow-md group-hover:scale-105
      `}>
        <Icon className="w-5 h-5 text-white" strokeWidth={2} />
      </div>

      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-medium text-gray-900 mb-0.5">
          {title}
        </h4>
        {description && (
          <p className="text-xs text-gray-600 leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

// Gradient presets for consistent usage
export const gradients = {
  // AI/Intelligence (Purple features)
  ai: 'from-violet-500 to-indigo-600',

  // Healing/Natural (Green features)
  healing: 'from-emerald-500 to-teal-600',

  // Trust/Security (Blue features)
  trust: 'from-blue-500 to-cyan-600',

  // Analytics/Data (Purple-Pink features)
  data: 'from-purple-500 to-pink-600',

  // Professional/Premium (Slate features)
  premium: 'from-slate-500 to-gray-600',

  // Wellness/Vitality (Rose-Orange features)
  vitality: 'from-rose-500 to-orange-600',

  // Frustration/Pain (Rose-Pink)
  frustration: 'from-rose-500 to-pink-600',

  // Overwhelm/Admin (Amber-Orange)
  overwhelm: 'from-amber-500 to-orange-600',

  // Evidence Gap (Blue-Slate)
  gap: 'from-blue-500 to-slate-600',

  // Revenue Loss (Red)
  loss: 'from-red-500 to-rose-600',

  // Warning/Caution (Yellow-Amber)
  warning: 'from-yellow-500 to-amber-600',

  // Institutional Barrier (Sky-Slate)
  institutional: 'from-sky-500 to-slate-600',

  // Calendar/Booking (Blue)
  calendar: 'from-blue-500 to-indigo-600',

  // Marketplace (Cyan-Blue)
  marketplace: 'from-cyan-500 to-blue-600',

  // Messaging (Indigo)
  messaging: 'from-indigo-500 to-purple-600',

  // Wearables/Health (Rose-Orange)
  health: 'from-rose-500 to-orange-500',

  // Payments (Amber-Orange)
  payments: 'from-amber-500 to-orange-500',
};
