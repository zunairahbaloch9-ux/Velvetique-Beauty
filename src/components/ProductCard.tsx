import React from 'react';
import { Heart, Eye, ShoppingBag, Star } from 'lucide-react';
import { Product } from '../types';
import { useShop } from '../context/ShopContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const {
    addToCart,
    toggleWishlist,
    isInWishlist,
    setQuickViewProduct,
    navigateToProduct
  } = useShop();

  const isFavorited = isInWishlist(product.id);

  return (
    <div className="group relative flex flex-col bg-white rounded-2xl border border-[#EDE1E1] overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-[#D19B9E]/60 hover:-translate-y-1">
      {/* Visual Image Slot */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#FAF6F4]">
        {/* Discount Tag */}
        {product.discountPercent && (
          <span className="absolute top-3 left-3 z-10 bg-[#93444B] text-white text-[10px] font-semibold uppercase tracking-wider py-1 px-2.5 rounded-full shadow-xs">
            {product.discountPercent}% OFF
          </span>
        )}

        {/* Wishlist Heart Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product);
          }}
          className={`absolute top-3 right-3 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 shadow-sm ${
            isFavorited
              ? 'bg-[#93444B] text-white'
              : 'bg-white/85 text-[#2A1E20] hover:bg-white hover:text-[#93444B]'
          }`}
          aria-label={isFavorited ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart className="w-4 h-4" fill={isFavorited ? 'currentColor' : 'none'} />
        </button>

        {/* Product Image */}
        <button
          onClick={() => navigateToProduct(product)}
          className="w-full h-full p-4 flex items-center justify-center cursor-pointer focus:outline-none"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain object-center transform group-hover:scale-106 transition-transform duration-500 ease-out"
            referrerPolicy="no-referrer"
          />
        </button>

        {/* Quick View Floating Action Bar (visible on hover) */}
        <div className="absolute inset-x-3 bottom-3 z-10 hidden sm:flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setQuickViewProduct(product);
            }}
            className="flex-1 py-2 bg-white/95 hover:bg-white text-[#2A1E20] text-xs font-semibold rounded-lg shadow-md flex items-center justify-center gap-1.5 transition-colors backdrop-blur-xs cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Quick View</span>
          </button>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between bg-white">
        <div>
          {/* Category & Rating Row */}
          <div className="flex items-center justify-between gap-2 text-xs mb-1.5">
            <span className="text-[11px] font-sans font-medium uppercase tracking-wider text-[#8A7175]">
              {product.category}
            </span>
            <div className="flex items-center gap-1 text-[#2A1E20]">
              <Star className="w-3 h-3 fill-[#E5A93C] text-[#E5A93C]" />
              <span className="font-semibold text-xs tabular-nums">{product.rating}</span>
              <span className="text-[10px] text-stone-400">({product.reviewsCount})</span>
            </div>
          </div>

          {/* Product Title */}
          <h3
            onClick={() => navigateToProduct(product)}
            className="font-serif text-base sm:text-lg font-medium text-[#2A1E20] group-hover:text-[#93444B] transition-colors cursor-pointer line-clamp-1 leading-snug"
          >
            {product.name}
          </h3>

          {/* Short description */}
          <p className="text-xs text-[#7A6468] line-clamp-1 mt-1 font-light">
            {product.shortDescription}
          </p>
        </div>

        {/* Pricing & Add to Bag */}
        <div className="mt-4 pt-3 border-t border-[#F5ECEC] flex items-center justify-between gap-2">
          <div className="flex items-baseline gap-2">
            <span className="font-sans font-bold text-base sm:text-lg text-[#2A1E20] tabular-nums">
              Rs. {product.price.toLocaleString()}
            </span>
            {product.oldPrice && (
              <span className="text-xs text-stone-400 line-through tabular-nums">
                Rs. {product.oldPrice.toLocaleString()}
              </span>
            )}
          </div>

          <button
            onClick={() => addToCart(product, 1)}
            className="p-2 sm:px-3 sm:py-2 bg-[#FAF0F1] hover:bg-[#2A1E20] text-[#93444B] hover:text-white rounded-lg transition-all duration-200 flex items-center gap-1.5 focus:outline-none cursor-pointer"
            title="Add to Cart"
            aria-label="Add to Cart"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden sm:inline text-xs font-semibold tracking-wide">
              ADD
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
