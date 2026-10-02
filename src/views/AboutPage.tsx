import React from 'react';
import { Sparkles, Heart, Leaf, ShieldCheck, Award, Users } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const AboutPage: React.FC = () => {
  const { navigateToCategory } = useShop();

  return (
    <div className="bg-[#FAF7F5] min-h-screen py-12 sm:py-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Banner Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#93444B] uppercase">
            Our Heritage &amp; Ethos
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-medium text-[#2A1E20] tracking-tight mt-2 mb-4">
            About Velvetique Beauty
          </h1>
          <p className="text-sm sm:text-base text-[#614D51] font-light leading-relaxed">
            Velvetique Beauty is a modern beauty brand created to make everyday self-care simple, enjoyable and accessible.
          </p>
          <div className="w-16 h-0.5 bg-[#D19B9E] mx-auto mt-4" />
        </div>

        {/* Story Grid with Generated Photography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 relative rounded-3xl overflow-hidden shadow-lg border border-[#EDE1E1] aspect-[4/3]">
            <img
              src="/src/assets/images/about_beauty_story_1790934351235.jpg"
              alt="Velvetique Beauty Laboratory and Botanical Formulations"
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-[#93444B]">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs font-semibold tracking-widest uppercase">Our Story</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-4xl text-[#2A1E20] font-medium leading-tight">
              Crafted with Botanical Precision &amp; Modern Dermatological Science
            </h2>

            <p className="text-xs sm:text-sm text-[#5C4549] leading-relaxed font-light">
              Founded in Karachi, Velvetique Beauty was born out of frustration with overly aggressive, chemically harsh cosmetics that promised instant miracles at the expense of long-term skin health.
            </p>

            <p className="text-xs sm:text-sm text-[#5C4549] leading-relaxed font-light">
              We spent over two years partnering with master cosmetic chemists to create clean, barrier-first formulas that respect your skin&rsquo;s natural physiology. By fusing time-tested plant botanicals like damask rose, centella, and green tea with gold-standard actives like 10% niacinamide and bio-retinols, we deliver visible results that last.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-[#EDE1E1]">
                <span className="font-serif text-2xl font-bold text-[#93444B] tabular-nums">100%</span>
                <p className="text-xs text-stone-600 mt-0.5 font-medium">Clean &amp; Non-Toxic Formulations</p>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-[#EDE1E1]">
                <span className="font-serif text-2xl font-bold text-[#93444B] tabular-nums">0%</span>
                <p className="text-xs text-stone-600 mt-0.5 font-medium">Animal Testing Ever</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Values Section */}
        <div className="mb-20">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#93444B] uppercase">
              What Guides Us
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#2A1E20] font-medium mt-1">
              Our Core Pillars
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Clean Beauty */}
            <div className="p-8 rounded-3xl bg-white border border-[#EDE1E1] shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FAF0F1] text-[#93444B] flex items-center justify-center mb-5">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-medium text-[#2A1E20] mb-2">
                  Clean Beauty
                </h3>
                <p className="text-xs sm:text-sm text-[#735D62] leading-relaxed font-light">
                  Every product is free from sulfates, parabens, formaldehydes, phthalates, and synthetic fillers. We hold ourselves to strict European Union cosmetic safety benchmarks.
                </p>
              </div>
            </div>

            {/* Cruelty Free */}
            <div className="p-8 rounded-3xl bg-white border border-[#EDE1E1] shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FAF0F1] text-[#93444B] flex items-center justify-center mb-5">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-medium text-[#2A1E20] mb-2">
                  Cruelty Free
                </h3>
                <p className="text-xs sm:text-sm text-[#735D62] leading-relaxed font-light">
                  We believe compassion is the purest form of beauty. We never test on animals at any stage of product development, nor do we commission third parties to do so.
                </p>
              </div>
            </div>

            {/* Sustainable Beauty */}
            <div className="p-8 rounded-3xl bg-white border border-[#EDE1E1] shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FAF0F1] text-[#93444B] flex items-center justify-center mb-5">
                  <Leaf className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-medium text-[#2A1E20] mb-2">
                  Sustainable Beauty
                </h3>
                <p className="text-xs sm:text-sm text-[#735D62] leading-relaxed font-light">
                  From frosted recyclable glass bottles to post-consumer recycled paper cartons and non-toxic soy ink, our packaging is thoughtfully created to minimize ecological footprint.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#2A1E20] text-white text-center max-w-4xl mx-auto shadow-xl">
          <h3 className="font-serif text-2xl sm:text-3xl font-medium mb-3">
            Experience the Velvetique Glow Today
          </h3>
          <p className="text-xs sm:text-sm text-stone-300 max-w-lg mx-auto font-light mb-6">
            Join thousands of happy customers who have transformed their skin health with our clean beauty essentials.
          </p>
          <button
            onClick={() => navigateToCategory('All')}
            className="px-8 py-3.5 bg-[#C47D82] hover:bg-[#A86166] text-white text-xs sm:text-sm font-semibold tracking-wider rounded-full transition-colors cursor-pointer"
          >
            DISCOVER THE COLLECTION
          </button>
        </div>
      </div>
    </div>
  );
};
