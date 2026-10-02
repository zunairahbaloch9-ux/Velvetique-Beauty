import React, { useState } from 'react';
import { X, Star, ShoppingBag, Heart, Check, Plus, Minus, ArrowRight } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const QuickViewModal: React.FC = () => {
  const {
    quickViewProduct,
    setQuickViewProduct,
    addToCart,
    toggleWishlist,
    isInWishlist,
    navigateToProduct,
    setActivePage
  } = useShop();

  const [quantity, setQuantity] = useState(1);
  const [selectedThumb, setSelectedThumb] = useState(0);

  if (!quickViewProduct) return null;

  const product = quickViewProduct;
  const isWish = isInWishlist(product.id);
  const currentImage = product.thumbnails[selectedThumb] || product.image;

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setQuickViewProduct(null);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    setQuickViewProduct(null);
    setActivePage('checkout');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-12 bg-[#2A1E20]/60 backdrop-blur-sm flex items-center justify-center animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-[#EDE1E1] overflow-hidden">
        {/* Close Button */}
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 z-10 p-2 text-stone-400 hover:text-[#2A1E20] hover:bg-stone-100 rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Gallery */}
          <div className="p-6 sm:p-8 bg-[#FAF7F5] flex flex-col items-center justify-between border-b md:border-b-0 md:border-r border-[#F0E6E6]">
            <div className="relative w-full aspect-square max-w-[280px] bg-white rounded-2xl p-4 shadow-sm border border-[#EADCDA] flex items-center justify-center mb-4">
              <img
                src={currentImage}
                alt={product.name}
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2 justify-center">
              {product.thumbnails.map((thumb, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedThumb(idx)}
                  className={`w-14 h-14 rounded-lg bg-white p-1 border transition-all cursor-pointer ${
                    selectedThumb === idx
                      ? 'border-[#93444B] ring-2 ring-[#93444B]/20'
                      : 'border-[#EDE1E1] opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={thumb}
                    alt=""
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Product Details */}
          <div className="p-6 sm:p-8 flex flex-col justify-between">
            <div>
              {/* Category & Status */}
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-sans font-semibold uppercase tracking-wider text-[#93444B]">
                  {product.category}
                </span>
                <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                  In Stock
                </span>
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#2A1E20] leading-snug">
                {product.name}
              </h3>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center text-[#E5A93C]">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < Math.floor(product.rating)
                          ? 'fill-[#E5A93C]'
                          : 'fill-stone-200 text-stone-200'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs font-semibold text-[#2A1E20] tabular-nums">
                  {product.rating}
                </span>
                <span className="text-xs text-stone-400">
                  ({product.reviewsCount} customer reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 my-4">
                <span className="text-2xl font-bold font-sans text-[#2A1E20] tabular-nums">
                  Rs. {product.price.toLocaleString()}
                </span>
                {product.oldPrice && (
                  <span className="text-sm text-stone-400 line-through tabular-nums">
                    Rs. {product.oldPrice.toLocaleString()}
                  </span>
                )}
                {product.discountPercent && (
                  <span className="text-xs font-bold text-[#93444B] bg-[#FAF0F1] px-2 py-0.5 rounded-md">
                    SAVE {product.discountPercent}%
                  </span>
                )}
              </div>

              {/* Short Description */}
              <p className="text-xs sm:text-sm text-[#634E52] leading-relaxed font-light mb-4">
                {product.shortDescription}
              </p>

              {/* Key Benefits snippet */}
              <div className="space-y-1.5 mb-6 text-xs text-[#523E42]">
                {product.benefits.slice(0, 2).map((benefit, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3 pt-4 border-t border-[#F0E6E6]">
              <div className="flex items-center gap-3">
                {/* Quantity Stepper */}
                <div className="flex items-center border border-[#DDD0D2] rounded-xl bg-white p-1">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="p-1.5 hover:bg-[#FAF0F1] text-stone-600 hover:text-[#93444B] rounded-lg transition-colors"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-4 text-xs font-semibold text-[#2A1E20] tabular-nums">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="p-1.5 hover:bg-[#FAF0F1] text-stone-600 hover:text-[#93444B] rounded-lg transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Add to Cart */}
                <button
                  onClick={handleAddToCart}
                  className="flex-1 py-3 px-4 bg-[#2A1E20] hover:bg-[#8A3A43] text-white text-xs font-semibold tracking-wider rounded-xl transition-all duration-200 shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>ADD TO CART</span>
                </button>

                {/* Wishlist */}
                <button
                  onClick={() => toggleWishlist(product)}
                  className={`p-3 rounded-xl border transition-colors ${
                    isWish
                      ? 'bg-[#93444B] text-white border-[#93444B]'
                      : 'border-[#DDD0D2] text-[#2A1E20] hover:bg-[#FAF0F1] hover:text-[#93444B]'
                  }`}
                  aria-label="Wishlist"
                >
                  <Heart className="w-4 h-4" fill={isWish ? 'currentColor' : 'none'} />
                </button>
              </div>

              {/* Full Details Link */}
              <button
                onClick={() => {
                  setQuickViewProduct(null);
                  navigateToProduct(product);
                }}
                className="w-full text-center text-xs text-[#93444B] hover:text-[#2A1E20] font-semibold py-1.5 flex items-center justify-center gap-1 transition-colors"
              >
                <span>View Full Product Details &amp; Ingredients</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
