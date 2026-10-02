import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const PromoBanner: React.FC = () => {
  const { navigateToCategory } = useShop();

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#FAF0F1] via-[#FDF7F7] to-[#F5ECE8] border border-[#ECDADA] shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            {/* Left Column: Text & CTA */}
            <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-[#C47D82]" />
                <span className="text-xs font-sans font-semibold tracking-[0.25em] text-[#93444B] uppercase">
                  LIMITED TIME OFFER
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#2A1E20] tracking-tight leading-[1.15] mb-4">
                Up to 30% Off<br />on Best Sellers
              </h2>

              <p className="font-sans text-sm sm:text-base text-[#614A4E] mb-8 max-w-md font-light leading-relaxed">
                Glow more, spend less. Treat your skin today with dermatologist-tested clean beauty essentials formulated to bring out your natural luminous radiance.
              </p>

              <div>
                <button
                  onClick={() => navigateToCategory('All')}
                  className="group inline-flex items-center gap-3 px-8 py-3.5 bg-[#2A1E20] hover:bg-[#8A3A43] text-white text-xs sm:text-sm font-sans font-semibold tracking-wider rounded-full transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none cursor-pointer"
                >
                  <span>SHOP THE SALE</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Column: Premium Skincare Imagery */}
            <div className="relative h-64 sm:h-80 md:h-[420px] w-full overflow-hidden">
              <img
                src="/src/assets/images/promo_skincare_duo_1790934339586.jpg"
                alt="Velvetique Luxury Skincare Duo"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent md:bg-gradient-to-r md:from-[#FAF0F1]/50 md:to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
