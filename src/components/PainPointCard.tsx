import { LucideIcon } from 'lucide-react';

interface PainPointCardProps {
  icon: LucideIcon;
  gradient: string;
  title: string;
  description: string;
}

export function PainPointCard({ icon: Icon, gradient, title, description }: PainPointCardProps) {
  return (
    <div className="group relative bg-white rounded-2xl p-6 border border-gray-200
         hover:border-gray-300 hover:shadow-lg transition-all duration-300">

      <div className="mb-4">
        <div className={`
          inline-flex w-14 h-14 rounded-xl items-center justify-center
          bg-gradient-to-br ${gradient}
          shadow-lg
          group-hover:scale-105 transition-transform duration-300
        `}>
          <Icon className="w-7 h-7 text-white" strokeWidth={2} />
        </div>
      </div>

      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        {title}
      </h3>

      <p className="text-gray-600 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
