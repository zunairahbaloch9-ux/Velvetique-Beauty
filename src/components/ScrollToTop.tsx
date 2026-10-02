import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-6 left-6 z-40 w-11 h-11 rounded-full bg-white/90 hover:bg-[#2A1E20] text-[#2A1E20] hover:text-white shadow-lg border border-[#EDE1E1] flex items-center justify-center transition-all duration-300 hover:scale-105 backdrop-blur-xs cursor-pointer"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};
