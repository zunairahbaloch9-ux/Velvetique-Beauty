import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ShoppingBag, Star, ArrowRight } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';

export const SearchModal: React.FC = () => {
  const {
    isSearchOpen,
    setIsSearchOpen,
    searchQuery,
    setSearchQuery,
    navigateToProduct,
    addToCart
  } = useShop();

  const [inputVal, setInputVal] = useState(searchQuery);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setInputVal('');
    }
  }, [isSearchOpen]);

  if (!isSearchOpen) return null;

  const query = inputVal.trim().toLowerCase();

  const matchingProducts = query
    ? PRODUCTS.filter((p) => {
        const matchesName = p.name.toLowerCase().includes(query);
        const matchesCat = p.category.toLowerCase().includes(query);
        const matchesSub = p.subcategory.toLowerCase().includes(query);
        const matchesConcern = p.concern.some((c) => c.toLowerCase().includes(query));
        const matchesDesc = p.shortDescription.toLowerCase().includes(query);
        return matchesName || matchesCat || matchesSub || matchesConcern || matchesDesc;
      })
    : [];

  const handleProductSelect = (product: typeof PRODUCTS[0]) => {
    setIsSearchOpen(false);
    navigateToProduct(product);
  };

  const popularSearches = ['Niacinamide', 'Moisturizer', 'Lipstick', 'Sunscreen', 'Face Wash', 'Rosewater'];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-20 bg-[#2A1E20]/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl border border-[#EDE1E1] overflow-hidden">
        {/* Search Input Bar */}
        <div className="p-4 sm:p-6 border-b border-[#F0E6E6] flex items-center gap-3 bg-[#FAF7F5]">
          <Search className="w-5 h-5 text-[#93444B] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search skincare, makeup, concern, or ingredients..."
            value={inputVal}
            onChange={(e) => {
              setInputVal(e.target.value);
              setSearchQuery(e.target.value);
            }}
            className="flex-1 bg-transparent text-sm sm:text-base font-sans text-[#2A1E20] placeholder-stone-400 focus:outline-none"
          />
          {inputVal && (
            <button
              onClick={() => {
                setInputVal('');
                setSearchQuery('');
              }}
              className="p-1 text-stone-400 hover:text-stone-600 rounded-full"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={() => setIsSearchOpen(false)}
            className="px-3 py-1.5 text-xs font-semibold text-[#2A1E20] hover:bg-stone-200/60 rounded-lg transition-colors"
          >
            ESC
          </button>
        </div>

        {/* Results / Suggestions Container */}
        <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6">
          {!query && (
            <div>
              <span className="text-xs font-semibold text-[#8C767B] tracking-wider uppercase block mb-3">
                Trending Searches
              </span>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map((term) => (
                  <button
                    key={term}
                    onClick={() => {
                      setInputVal(term);
                      setSearchQuery(term);
                    }}
                    className="px-3.5 py-1.5 bg-[#FAF0F1] hover:bg-[#2A1E20] text-[#93444B] hover:text-white rounded-full text-xs font-medium transition-colors cursor-pointer"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}

          {query && matchingProducts.length === 0 && (
            <div className="text-center py-12 space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#FAF0F1] text-[#93444B] flex items-center justify-center mx-auto">
                <Search className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-lg font-medium text-[#2A1E20]">No products found</h4>
              <p className="text-xs text-[#826E72] max-w-sm mx-auto font-light">
                We couldn't find any items matching &ldquo;{query}&rdquo;. Try checking spelling or searching for a concern like &ldquo;Acne&rdquo; or &ldquo;Dry Skin&rdquo;.
              </p>
            </div>
          )}

          {query && matchingProducts.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-[#8C767B] pb-2 border-b border-[#F0E6E6]">
                <span>Matching Products ({matchingProducts.length})</span>
                <span className="text-[11px]">Click item to view details</span>
              </div>

              {matchingProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center justify-between p-2.5 rounded-xl hover:bg-[#FAF5F5] transition-colors border border-transparent hover:border-[#F0DADE] group cursor-pointer"
                  onClick={() => handleProductSelect(product)}
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-14 h-14 rounded-lg bg-white p-1 border border-[#EDE1E1] shrink-0">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] font-sans font-semibold uppercase tracking-wider text-[#8A7175]">
                        {product.category}
                      </span>
                      <h4 className="font-serif text-sm font-medium text-[#2A1E20] group-hover:text-[#93444B] transition-colors">
                        {product.name}
                      </h4>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <Star className="w-3 h-3 fill-[#E5A93C] text-[#E5A93C]" />
                        <span className="text-xs font-semibold tabular-nums">{product.rating}</span>
                        <span className="text-xs font-bold text-[#2A1E20] ml-2 tabular-nums">
                          Rs. {product.price.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(product, 1);
                      }}
                      className="p-2 bg-[#FAF0F1] hover:bg-[#2A1E20] text-[#93444B] hover:text-white rounded-lg transition-colors"
                      title="Add to cart"
                    >
                      <ShoppingBag className="w-4 h-4" />
                    </button>
                    <ArrowRight className="w-4 h-4 text-stone-300 group-hover:text-[#93444B] group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
