import React from 'react';
import { Sparkles, ShieldCheck, Heart, Leaf } from 'lucide-react';

const BENEFITS = [
  {
    icon: Sparkles,
    title: 'Clean Ingredients',
    subtitle: 'Safe & toxin-free formulas'
  },
  {
    icon: ShieldCheck,
    title: 'Clinically Proven',
    subtitle: 'Dermatologically tested'
  },
  {
    icon: Heart,
    title: 'Cruelty Free',
    subtitle: 'We never test on animals'
  },
  {
    icon: Leaf,
    title: 'Sustainable Beauty',
    subtitle: 'Good for you & the planet'
  }
];

export const TrustBenefits: React.FC = () => {
  return (
    <section className="bg-white border-b border-[#F0E6E6] py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {BENEFITS.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3.5 p-3 rounded-xl hover:bg-[#FAF5F5] transition-colors"
              >
                <div className="w-11 h-11 rounded-full bg-[#FAF0F1] text-[#93444B] flex items-center justify-center shrink-0 border border-[#F3DFE1]">
                  <IconComponent className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-semibold text-[#2A1E20] tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-[#7A6468] font-normal mt-0.5">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
