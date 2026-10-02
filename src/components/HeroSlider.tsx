import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { useShop } from '../context/ShopContext';

interface Slide {
  kicker: string;
  title: string;
  subtitle: string;
  buttonText: string;
  image: string;
  action: 'shop' | 'collection' | 'sale';
}

const SLIDES: Slide[] = [
  {
    kicker: 'NEW IN',
    title: 'Radiant Skin.\nReal Confidence.',
    subtitle: 'Clean beauty that nourishes, enhances and empowers you.',
    buttonText: 'SHOP NOW',
    image: '/src/assets/images/hero_luxury_skincare_1790934299479.jpg',
    action: 'shop'
  },
  {
    kicker: 'NEW COLLECTION',
    title: 'Your Everyday\nBeauty Essentials',
    subtitle: 'Discover skincare and beauty products made for your routine.',
    buttonText: 'EXPLORE COLLECTION',
    image: '/src/assets/images/hero_everyday_essentials_1790934313862.jpg',
    action: 'collection'
  },
  {
    kicker: 'LIMITED OFFER',
    title: 'Glow More,\nSave More',
    subtitle: 'Enjoy special offers on selected best sellers.',
    buttonText: 'SHOP SALE',
    image: '/src/assets/images/hero_glow_sale_1790934328249.jpg',
    action: 'sale'
  }
];

export const HeroSlider: React.FC = () => {
  const { navigateToCategory, setActivePage } = useShop();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  useEffect(() => {
    if (isHovered) return;
    timerRef.current = setInterval(() => {
      nextSlide();
    }, 5500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovered, currentSlide]);

  const handleAction = (slide: Slide) => {
    if (slide.action === 'sale') {
      const el = document.getElementById('special-offers-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    navigateToCategory('All');
  };

  return (
    <section
      className="relative w-full overflow-hidden bg-[#FAF4F2]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Velvetique Beauty Featured Collections"
    >
      {/* Slides Container */}
      <div className="relative min-h-[500px] sm:min-h-[580px] md:min-h-[640px] lg:min-h-[680px] w-full flex items-center">
        {SLIDES.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {/* Background Image with luxury soft contrast scrim */}
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={slide.image}
                  alt={slide.title.replace('\n', ' ')}
                  className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-7000 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F5]/95 via-[#FAF7F5]/75 to-transparent md:via-[#FAF7F5]/60" />
                <div className="absolute inset-0 bg-[#361920]/10 mix-blend-multiply" />
              </div>

              {/* Content Box */}
              <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
                <div className="max-w-xl py-12 md:py-20 animate-in fade-in slide-in-from-left-4 duration-700">
                  {/* Kicker badge / unboxed metadata */}
                  <div className="flex items-center gap-2 mb-3 sm:mb-4">
                    <span className="w-6 h-px bg-[#C47D82]" />
                    <span className="text-xs sm:text-sm font-sans tracking-[0.25em] text-[#93444B] font-semibold uppercase">
                      {slide.kicker}
                    </span>
                  </div>

                  {/* Main Display Headline */}
                  <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#2A1E20] leading-[1.12] whitespace-pre-line mb-4 sm:mb-6">
                    {slide.title}
                  </h1>

                  {/* Description */}
                  <p className="font-sans text-sm sm:text-base md:text-lg text-[#5A4549] max-w-lg mb-8 leading-relaxed font-light">
                    {slide.subtitle}
                  </p>

                  {/* Action Button */}
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => handleAction(slide)}
                      className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#2A1E20] hover:bg-[#8A3A43] text-white text-xs sm:text-sm font-sans font-semibold tracking-wider rounded-full transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none cursor-pointer"
                    >
                      <span>{slide.buttonText}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button
                      onClick={() => {
                        const el = document.getElementById('best-sellers-section');
                        el?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="hidden sm:inline-flex items-center px-6 py-3.5 border border-[#2A1E20]/25 hover:border-[#2A1E20] text-[#2A1E20] text-xs sm:text-sm font-sans font-medium tracking-wider rounded-full transition-colors bg-white/40 backdrop-blur-xs"
                    >
                      VIEW BEST SELLERS
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Slider Controls: Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/80 hover:bg-white text-[#2A1E20] flex items-center justify-center shadow-md backdrop-blur-sm transition-all hover:scale-105 focus:outline-none"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/80 hover:bg-white text-[#2A1E20] flex items-center justify-center shadow-md backdrop-blur-sm transition-all hover:scale-105 focus:outline-none"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Slider Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-2.5">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`transition-all duration-300 rounded-full ${
              idx === currentSlide
                ? 'w-8 h-2 bg-[#8A3A43]'
                : 'w-2 h-2 bg-stone-300 hover:bg-stone-400'
            }`}
          />
        ))}
      </div>
    </section>
  );
};
