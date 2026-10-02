import React from 'react';
import { Sparkles, Droplets, Sun, Feather, Zap, Shield, Flame, HeartHandshake } from 'lucide-react';
import { useShop } from '../context/ShopContext';

interface ConcernItem {
  id: string;
  name: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
}

const CONCERNS: ConcernItem[] = [
  { id: 'Acne & Breakouts', name: 'Acne & Breakouts', desc: 'Clear pores & clarify', icon: Zap },
  { id: 'Dry Skin', name: 'Dry Skin', desc: 'Deep hydration & barrier repair', icon: Droplets },
  { id: 'Oily Skin', name: 'Oily Skin', desc: 'Balance shine & minimize pores', icon: Flame },
  { id: 'Dull Skin', name: 'Dull Skin', desc: 'Restore radiance & even tone', icon: Sparkles },
  { id: 'Sensitive Skin', name: 'Sensitive Skin', desc: 'Calm redness & irritation', icon: Feather },
  { id: 'Anti-Aging', name: 'Anti-Aging', desc: 'Firmness & fine line defense', icon: HeartHandshake },
  { id: 'Hair Fall', name: 'Hair Fall', desc: 'Strengthen roots & stimulate', icon: Shield },
  { id: 'Sun Protection', name: 'Sun Protection', desc: 'Broad-spectrum UV shields', icon: Sun }
];

export const ShopByConcernSection: React.FC = () => {
  const { navigateToConcern } = useShop();

  return (
    <section className="py-14 sm:py-20 bg-[#FAF7F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs font-sans font-semibold tracking-[0.25em] text-[#93444B] uppercase">
            Targeted Solutions
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl text-[#2A1E20] font-medium tracking-tight mt-1">
            SHOP BY CONCERN
          </h2>
          <div className="w-12 h-0.5 bg-[#D19B9E] mx-auto mt-3" />
        </div>

        {/* 8 Concern Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {CONCERNS.map((concern) => {
            const IconComp = concern.icon;
            return (
              <button
                key={concern.id}
                onClick={() => navigateToConcern(concern.id)}
                className="group p-5 sm:p-6 bg-white rounded-2xl border border-[#EDE1E1] hover:border-[#C47D82] text-left transition-all duration-300 hover:shadow-md hover:-translate-y-1 focus:outline-none cursor-pointer flex flex-col justify-between"
              >
                <div className="w-10 h-10 rounded-full bg-[#FAF0F1] text-[#93444B] group-hover:bg-[#2A1E20] group-hover:text-white transition-colors flex items-center justify-center mb-4">
                  <IconComp className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-base sm:text-lg font-medium text-[#2A1E20] group-hover:text-[#93444B] transition-colors leading-snug">
                    {concern.name}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-[#826E72] mt-1 font-light leading-relaxed">
                    {concern.desc}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
