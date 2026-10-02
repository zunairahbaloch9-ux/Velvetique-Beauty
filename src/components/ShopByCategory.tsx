import React from 'react';
import { CATEGORIES } from '../data/products';
import { useShop } from '../context/ShopContext';
import { createProductSvg } from '../utils/productImages';

export const ShopByCategory: React.FC = () => {
  const { navigateToCategory } = useShop();

  const getCategoryVisual = (id: string) => {
    switch (id) {
      case 'Skincare':
        return createProductSvg('dropper', '#F8E8E9', '#A65561', 'Skincare Ritual');
      case 'Makeup':
        return createProductSvg('lipstick', '#F9E2E5', '#9B2D45', 'Lip & Cheek Velvet');
      case 'Haircare':
        return createProductSvg('jar', '#EFE8E5', '#8E6754', 'Silk Bond Mask');
      case 'Bodycare':
        return createProductSvg('pump', '#F3E8E2', '#A36852', 'Velvet Body Glow');
      case 'Sun Care':
        return createProductSvg('tube', '#FEF5E7', '#C87F1C', 'SPF 50 Shield');
      case 'Gift Sets':
        return createProductSvg('box', '#FCE8E8', '#9B3F50', 'Deluxe Gift Set');
      default:
        return createProductSvg('jar', '#F5E6E6', '#C47D82', 'Beauty');
    }
  };

  return (
    <section className="py-14 sm:py-20 bg-[#FAF7F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs font-sans font-semibold tracking-[0.2em] text-[#93444B] uppercase">
            Curated Collections
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl text-[#2A1E20] font-medium tracking-tight mt-1.5">
            SHOP BY CATEGORY
          </h2>
          <div className="w-12 h-0.5 bg-[#D19B9E] mx-auto mt-3" />
        </div>

        {/* 6 Circular Category Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
          {CATEGORIES.map((category) => {
            const visualSrc = getCategoryVisual(category.id);
            return (
              <button
                key={category.id}
                onClick={() => navigateToCategory(category.id)}
                className="group flex flex-col items-center text-center focus:outline-none cursor-pointer"
              >
                {/* Circular Image Container */}
                <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden p-1.5 bg-white border border-[#EADCDA] shadow-sm group-hover:shadow-md group-hover:border-[#C47D82] transition-all duration-300 transform group-hover:-translate-y-1.5">
                  <div className="w-full h-full rounded-full overflow-hidden bg-[#FAF6F4] flex items-center justify-center">
                    <img
                      src={visualSrc}
                      alt={category.name}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500 ease-out"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                {/* Category Title */}
                <h3 className="font-sans text-xs sm:text-sm font-semibold tracking-wider text-[#2A1E20] mt-3.5 group-hover:text-[#93444B] transition-colors">
                  {category.name}
                </h3>
                <span className="text-[11px] text-[#8C767B] font-light mt-0.5">
                  {category.itemCount}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
