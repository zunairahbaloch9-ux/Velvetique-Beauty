import React from 'react';
import { X, Heart, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const WishlistDrawer: React.FC = () => {
  const {
    isWishlistOpen,
    setIsWishlistOpen,
    wishlist,
    wishlistCount,
    toggleWishlist,
    addToCart,
    navigateToProduct,
    setActivePage
  } = useShop();

  if (!isWishlistOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        onClick={() => setIsWishlistOpen(false)}
        className="absolute inset-0 bg-[#2A1E20]/50 backdrop-blur-xs transition-opacity"
      />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-5 border-b border-[#F0E6E6] flex items-center justify-between bg-[#FAF7F5]">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-[#93444B] fill-[#93444B]" />
              <h2 className="font-serif text-lg sm:text-xl font-semibold text-[#2A1E20]">
                My Wishlist ({wishlistCount})
              </h2>
            </div>
            <button
              onClick={() => setIsWishlistOpen(false)}
              className="p-1.5 text-stone-400 hover:text-[#2A1E20] hover:bg-stone-200/50 rounded-full transition-colors"
              aria-label="Close wishlist"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {wishlist.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#FAF0F1] text-[#93444B] flex items-center justify-center">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-xl font-medium text-[#2A1E20]">Your wishlist is empty</h3>
                <p className="text-xs text-[#826E72] max-w-xs font-light">
                  Save your favorite beauty and skincare products here to purchase anytime.
                </p>
                <button
                  onClick={() => {
                    setIsWishlistOpen(false);
                    setActivePage('shop');
                  }}
                  className="px-6 py-2.5 bg-[#2A1E20] hover:bg-[#8A3A43] text-white text-xs font-semibold rounded-full transition-colors"
                >
                  EXPLORE BEST SELLERS
                </button>
              </div>
            ) : (
              wishlist.map((product) => (
                <div
                  key={product.id}
                  className="flex gap-4 p-3 rounded-xl border border-[#F0E6E6] bg-[#FAF8F8] hover:border-[#D19B9E]/60 transition-colors"
                >
                  <div
                    onClick={() => {
                      setIsWishlistOpen(false);
                      navigateToProduct(product);
                    }}
                    className="w-20 h-20 rounded-lg overflow-hidden bg-white shrink-0 border border-[#EDE1E1] p-1 cursor-pointer"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4
                          onClick={() => {
                            setIsWishlistOpen(false);
                            navigateToProduct(product);
                          }}
                          className="font-serif text-sm font-medium text-[#2A1E20] hover:text-[#93444B] transition-colors cursor-pointer line-clamp-1"
                        >
                          {product.name}
                        </h4>
                        <button
                          onClick={() => toggleWishlist(product)}
                          className="text-stone-400 hover:text-rose-600 transition-colors p-1"
                          title="Remove from wishlist"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <span className="text-[11px] text-[#8C767B]">
                        {product.category}
                      </span>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <span className="text-sm font-bold text-[#2A1E20] tabular-nums">
                        Rs. {product.price.toLocaleString()}
                      </span>

                      <button
                        onClick={() => {
                          addToCart(product, 1);
                        }}
                        className="px-3 py-1.5 bg-[#FAF0F1] hover:bg-[#2A1E20] text-[#93444B] hover:text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Move to Bag</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {wishlist.length > 0 && (
            <div className="p-5 border-t border-[#F0E6E6] bg-[#FAF7F5]">
              <button
                onClick={() => {
                  wishlist.forEach((p) => addToCart(p, 1));
                  setIsWishlistOpen(false);
                }}
                className="w-full py-3 bg-[#2A1E20] hover:bg-[#8A3A43] text-white text-xs sm:text-sm font-semibold tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>ADD ALL TO BAG</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
