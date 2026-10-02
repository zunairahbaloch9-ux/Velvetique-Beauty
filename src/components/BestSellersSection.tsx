import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';
import { useShop } from '../context/ShopContext';

export const BestSellersSection: React.FC = () => {
  const { navigateToCategory } = useShop();
  // Filter the first 8 best sellers or specifically the bestSeller marked items
  const bestSellers = PRODUCTS.filter((p) => p.isBestSeller).slice(0, 8);

  return (
    <section id="best-sellers-section" className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-14">
          <div>
            <span className="text-xs font-sans font-semibold tracking-[0.25em] text-[#93444B] uppercase">
              Customer Favorites
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-[#2A1E20] font-medium tracking-tight mt-1">
              BEST SELLERS
            </h2>
          </div>

          <button
            onClick={() => navigateToCategory('All')}
            className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#93444B] hover:text-[#2A1E20] transition-colors pb-1 border-b border-[#D19B9E] w-fit"
          >
            <span>VIEW ALL PRODUCTS</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 8 Products Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
