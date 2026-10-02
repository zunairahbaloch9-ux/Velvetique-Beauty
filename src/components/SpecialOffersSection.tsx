import React from 'react';
import { Tag, Copy, Check, Sparkles, Truck } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const SpecialOffersSection: React.FC = () => {
  const { applyPromoCode, appliedPromo } = useShop();
  const [copiedCode, setCopiedCode] = React.useState<string | null>(null);

  const handleApply = (code: string) => {
    navigator.clipboard?.writeText(code);
    applyPromoCode(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  const offers = [
    {
      discount: '15% OFF',
      title: 'New Customer Offer',
      description: 'Enjoy 15% off your very first order across all skincare & cosmetics.',
      code: 'WELCOME15',
      icon: Sparkles,
      bg: 'bg-gradient-to-br from-[#FAF0F2] to-[#FCE6E9]',
      border: 'border-[#F0D5D8]'
    },
    {
      discount: 'Buy 2 Get 10% OFF',
      title: 'Mix & Match Your Favorites',
      description: 'Stock up on your daily essentials and save an extra 10% at checkout.',
      code: 'BUNDLE10',
      icon: Tag,
      bg: 'bg-gradient-to-br from-[#FAF5F0] to-[#F8ECE1]',
      border: 'border-[#EADCD0]'
    },
    {
      discount: 'Free Shipping',
      title: 'On Orders Above Rs. 999',
      description: 'Complimentary tracked nationwide delivery right to your doorstep.',
      code: 'FREESHIP',
      icon: Truck,
      bg: 'bg-gradient-to-br from-[#F5F8F6] to-[#E3EFE8]',
      border: 'border-[#D1E3D8]'
    }
  ];

  return (
    <section id="special-offers-section" className="py-14 sm:py-20 bg-white border-t border-[#F0E6E6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs font-sans font-semibold tracking-[0.25em] text-[#93444B] uppercase">
            Exclusive Savings
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl text-[#2A1E20] font-medium tracking-tight mt-1">
            SPECIAL OFFERS
          </h2>
          <div className="w-12 h-0.5 bg-[#D19B9E] mx-auto mt-3" />
        </div>

        {/* 3 Offer Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {offers.map((offer, idx) => {
            const IconComp = offer.icon;
            const isApplied = appliedPromo?.code === offer.code;
            const isJustCopied = copiedCode === offer.code;

            return (
              <div
                key={idx}
                className={`p-7 sm:p-8 rounded-2xl ${offer.bg} border ${offer.border} shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:-translate-y-1`}
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-white/90 text-[#93444B] flex items-center justify-center shadow-xs mb-5">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <span className="font-serif text-2xl sm:text-3xl font-semibold text-[#2A1E20] block mb-1">
                    {offer.discount}
                  </span>
                  <h3 className="font-sans text-sm font-semibold text-[#6E4F55] tracking-wide mb-2 uppercase">
                    {offer.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#735D62] font-light leading-relaxed mb-6">
                    {offer.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-black/5 flex items-center justify-between gap-3">
                  <div className="bg-white/80 px-3 py-1.5 rounded-lg border border-black/5 font-mono text-xs font-bold tracking-wider text-[#2A1E20]">
                    {offer.code}
                  </div>

                  <button
                    onClick={() => handleApply(offer.code)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#2A1E20] hover:bg-[#8A3A43] text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                  >
                    {isJustCopied || isApplied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-300" />
                        <span>{isApplied ? 'Applied' : 'Copied!'}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Apply Code</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
