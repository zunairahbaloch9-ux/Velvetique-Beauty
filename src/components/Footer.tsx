import React, { useState } from 'react';
import { Mail, ArrowRight, ShieldCheck, Heart, Sparkles, Check } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { PageView } from '../types';

export const Footer: React.FC = () => {
  const { setActivePage, navigateToCategory, addToast } = useShop();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      addToast('Please enter a valid email address', 'warning');
      return;
    }
    setSubscribed(true);
    addToast('Thank you for subscribing! Check your inbox for 15% off.', 'success');
    setEmail('');
  };

  const handleLink = (page: PageView) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#201215] text-[#FAF5F5] pt-16 pb-10 border-t border-[#361E23] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-[#361E23]">
          {/* Brand Column (Col 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <span className="font-serif text-2xl tracking-[0.2em] font-semibold text-white uppercase block">
              VELVETIQUE
            </span>
            <span className="text-[10px] tracking-[0.35em] text-[#C47D82] uppercase block font-medium -mt-2">
              BEAUTY
            </span>

            <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed max-w-sm pt-2">
              Thoughtful beauty for every skin, every day. Dermatologist-tested, clean formulations crafted to nourish, enhance, and celebrate your natural glow.
            </p>

            <div className="flex items-center gap-3 pt-3 text-xs text-[#D8B4B8]">
              <span className="flex items-center gap-1">
                <Heart className="w-3.5 h-3.5 fill-[#C47D82] text-[#C47D82]" /> Cruelty-Free
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Toxin-Free
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" /> 100% Clean
              </span>
            </div>
          </div>

          {/* Quick Links (Col 5-6) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-serif text-base font-semibold tracking-wider text-white uppercase mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-xs text-stone-300 font-light">
              <li>
                <button
                  onClick={() => handleLink('home')}
                  className="hover:text-[#C47D82] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    navigateToCategory('All');
                  }}
                  className="hover:text-[#C47D82] transition-colors"
                >
                  Shop Catalog
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    navigateToCategory('Skincare');
                  }}
                  className="hover:text-[#C47D82] transition-colors"
                >
                  Skincare Collections
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('about')}
                  className="hover:text-[#C47D82] transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('blog')}
                  className="hover:text-[#C47D82] transition-colors"
                >
                  Beauty Journal
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('contact')}
                  className="hover:text-[#C47D82] transition-colors"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Care (Col 7-8) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-serif text-base font-semibold tracking-wider text-white uppercase mb-4">
              Customer Care
            </h3>
            <ul className="space-y-2 text-xs text-stone-300 font-light">
              <li>
                <button
                  onClick={() => handleLink('contact')}
                  className="hover:text-[#C47D82] transition-colors"
                >
                  Track Your Order
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('contact')}
                  className="hover:text-[#C47D82] transition-colors"
                >
                  Shipping Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('contact')}
                  className="hover:text-[#C47D82] transition-colors"
                >
                  Returns &amp; Refunds
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('contact')}
                  className="hover:text-[#C47D82] transition-colors"
                >
                  Terms &amp; Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('contact')}
                  className="hover:text-[#C47D82] transition-colors"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('contact')}
                  className="hover:text-[#C47D82] transition-colors"
                >
                  FAQs
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter Column (Col 9-12) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="font-serif text-base font-semibold tracking-wider text-white uppercase mb-2">
              Stay In The Glow
            </h3>
            <p className="text-xs text-stone-300 font-light leading-relaxed">
              Subscribe to get special offers, beauty tips and 15% off your first luxury order.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex rounded-xl overflow-hidden border border-[#4D2D34] bg-[#2E181D] focus-within:border-[#C47D82]">
                <div className="pl-3.5 flex items-center justify-center text-stone-400">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-3 py-3 bg-transparent text-xs text-white placeholder-stone-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-5 bg-[#C47D82] hover:bg-[#A86166] text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-1 cursor-pointer shrink-0"
                >
                  <span>Join</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {subscribed && (
                <p className="text-[11px] text-emerald-400 flex items-center gap-1">
                  <Check className="w-3 h-3" /> You are subscribed! Check your inbox soon.
                </p>
              )}
            </form>

            <div className="pt-2">
              <span className="text-[11px] text-stone-400 uppercase tracking-wider block mb-2 font-medium">
                Accepted Payment Methods
              </span>
              <div className="flex flex-wrap items-center gap-2 text-stone-300 text-[10px] font-mono">
                <span className="px-2 py-1 bg-[#2C191E] rounded border border-[#44272D]">VISA</span>
                <span className="px-2 py-1 bg-[#2C191E] rounded border border-[#44272D]">Mastercard</span>
                <span className="px-2 py-1 bg-[#2C191E] rounded border border-[#44272D]">RuPay</span>
                <span className="px-2 py-1 bg-[#2C191E] rounded border border-[#44272D]">UPI</span>
                <span className="px-2 py-1 bg-[#2C191E] rounded border border-[#44272D] text-[#E0B5B9]">Cash on Delivery</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>© 2026 Velvetique Beauty. All Rights Reserved.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Clean Formulations</span>
            <span>·</span>
            <span>Ethically Made</span>
            <span>·</span>
            <span>Karachi, Pakistan</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
