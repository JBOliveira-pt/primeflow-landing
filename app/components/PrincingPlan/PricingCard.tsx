
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface PricingCardProps {
  title: string;
  subtitle: string;
  price: string;
  features: string[];
  color: 'green' | 'blue' | 'purple' | 'yellow';
  highlight?: boolean;
  badge?: string;
  onSelect: () => void;
  
}

export const PricingCard: React.FC<PricingCardProps> = ({ 
  title, 
  subtitle, 
  price, 
  features, 
  color, 
  highlight = false, 
  badge = "",
  
}) => {
  const colorClasses: Record<string, string> = {
    green: "text-emerald-400 bg-emerald-400/10",
    blue: "text-indigo-400 bg-indigo-400/10",
    purple: "text-purple-400 bg-purple-400/10",
    yellow: "text-amber-400 bg-amber-400/10",
  };

  return (
    <div className={`relative flex flex-col p-8 rounded-[2.5rem] border transition-all duration-500 hover:translate-y-[-10px] ${
      highlight 
        ? 'bg-indigo-600 border-indigo-400 shadow-[0_25px_60px_-15px_rgba(79,70,229,0.4)] scale-105 z-10' 
        : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 backdrop-blur-sm'
    }`}>
      {badge && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-5 py-1.5 bg-white text-indigo-700 text-[10px] font-black uppercase tracking-widest rounded-full shadow-2xl animate-pulse">
          {badge}
        </span>
      )}
      
      <div className="mb-8">
        <h4 className="text-2xl font-black mb-2 text-white">{title}</h4>
        <p className={`text-sm leading-relaxed ${highlight ? 'text-indigo-100' : 'text-slate-400'}`}>
          {subtitle}
        </p>
      </div>

      <div className="mb-8">
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-black text-white">{price}</span>
          <span className={`text-sm font-medium ${highlight ? 'text-indigo-200' : 'text-slate-500'}`}>/mês</span>
        </div>
      </div>

      <ul className="space-y-4 mb-10 flex-grow">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-sm">
            <div className={`mt-0.5 shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${highlight ? 'bg-indigo-400/30' : colorClasses[color]}`}>
              <CheckCircle2 size={12} className={highlight ? 'text-white' : ''} />
            </div>
            <span className={highlight ? 'text-white' : 'text-slate-300 font-medium'}>{feature}</span>
          </li>
        ))}
      </ul>

      <button 
        className={`w-full py-4 rounded-2xl font-bold transition-all transform active:scale-95 cursor-pointer ${
          highlight 
            ? 'bg-white text-indigo-600 hover:bg-slate-100 shadow-lg' 
            : 'bg-slate-800 text-white hover:bg-slate-700'
        }`}
      >
    Começar Agora
      </button>
    </div>
  );
};
