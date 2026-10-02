import React from 'react';
import { Facebook, Instagram, Youtube, Sparkles } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const AnnouncementBar: React.FC = () => {
  const { applyPromoCode } = useShop();

  const handleCopyCode = () => {
    navigator.clipboard?.writeText('GLOW15');
    applyPromoCode('GLOW15');
  };

  return (
    <div className="bg-[#2A1E20] text-[#FAF6F4] text-xs font-sans py-2 px-4 border-b border-[#3E2C30]">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Left / Center Message */}
        <div className="flex-1 text-center md:text-left flex items-center justify-center md:justify-start gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#E6B8BC] shrink-0 animate-pulse hidden sm:inline" />
          <span className="font-light tracking-wide text-stone-200">
            Free Shipping on orders over <span className="font-medium text-white">Rs. 999</span>
          </span>
          <span className="text-stone-500 hidden sm:inline">|</span>
          <span className="hidden sm:inline text-stone-300">
            Use code:{' '}
            <button
              onClick={handleCopyCode}
              title="Click to apply GLOW15"
              className="font-semibold text-[#F7D2D6] tracking-wider hover:text-white transition-colors underline decoration-dotted underline-offset-2 cursor-pointer"
            >
              GLOW15
            </button>{' '}
            for 15% OFF
          </span>
        </div>

        {/* Right Social Media Icons */}
        <div className="hidden md:flex items-center gap-3 text-stone-300 shrink-0">
          <span className="text-[11px] text-stone-400 uppercase tracking-widest font-medium mr-1">Follow Us</span>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="hover:text-[#F7D2D6] transition-colors p-1"
          >
            <Instagram className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="hover:text-[#F7D2D6] transition-colors p-1"
          >
            <Facebook className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noreferrer"
            aria-label="YouTube"
            className="hover:text-[#F7D2D6] transition-colors p-1"
          >
            <Youtube className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
