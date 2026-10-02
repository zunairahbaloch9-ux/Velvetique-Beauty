import React, { useState, useMemo } from 'react';
import { Filter, SlidersHorizontal, Star, X, RotateCcw, ChevronDown } from 'lucide-react';
import { PRODUCTS, CATEGORIES, SKIN_CONCERNS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { useShop } from '../context/ShopContext';

export const ShopPage: React.FC = () => {
  const {
    selectedCategoryFilter,
    setSelectedCategoryFilter,
    selectedConcernFilter,
    setSelectedConcernFilter,
    setActivePage
  } = useShop();

  const [sortBy, setSortBy] = useState<'featured' | 'newest' | 'price-low' | 'price-high' | 'rating'>('featured');
  const [maxPrice, setMaxPrice] = useState<number>(2500);
  const [minRating, setMinRating] = useState<number>(0);
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);
  const [mobileFilterOpen, setMobileFilterOpen] = useState<boolean>(false);
  const [visibleCount, setVisibleCount] = useState<number>(8);

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category filter
      if (selectedCategoryFilter && selectedCategoryFilter !== 'All') {
        if (product.category !== selectedCategoryFilter) return false;
      }

      // Concern filter
      if (selectedConcernFilter) {
        if (!product.concern.includes(selectedConcernFilter)) return false;
      }

      // Price filter
      if (product.price > maxPrice) return false;

      // Rating filter
      if (minRating > 0 && product.rating < minRating) return false;

      // In stock
      if (inStockOnly && !product.inStock) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'newest') return (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0);
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      // Default: featured (best sellers first)
      return (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0);
    });
  }, [selectedCategoryFilter, selectedConcernFilter, maxPrice, minRating, inStockOnly, sortBy]);

  const activeFilterCount =
    (selectedCategoryFilter ? 1 : 0) +
    (selectedConcernFilter ? 1 : 0) +
    (maxPrice < 2500 ? 1 : 0) +
    (minRating > 0 ? 1 : 0) +
    (inStockOnly ? 1 : 0);

  const resetAllFilters = () => {
    setSelectedCategoryFilter(null);
    setSelectedConcernFilter(null);
    setMaxPrice(2500);
    setMinRating(0);
    setInStockOnly(false);
    setSortBy('featured');
  };

  const displayedProducts = filteredProducts.slice(0, visibleCount);

  return (
    <div className="bg-[#FAF7F5] min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#8C767B] mb-6">
          <button
            onClick={() => setActivePage('home')}
            className="hover:text-[#2A1E20] transition-colors"
          >
            Home
          </button>
          <span>/</span>
          <span className="font-semibold text-[#2A1E20]">Shop All Products</span>
          {selectedCategoryFilter && (
            <>
              <span>/</span>
              <span className="text-[#93444B] font-medium">{selectedCategoryFilter}</span>
            </>
          )}
        </div>

        {/* Page Banner / Header */}
        <div className="mb-8 sm:mb-12">
          <span className="text-xs font-sans font-semibold tracking-[0.25em] text-[#93444B] uppercase">
            The Complete Collection
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-medium text-[#2A1E20] tracking-tight mt-1">
            {selectedCategoryFilter || selectedConcernFilter || 'All Products'}
          </h1>
          <p className="text-xs sm:text-sm text-[#735D62] mt-2 max-w-xl font-light">
            Indulge in our range of botanical-infused, high-performance skincare, cosmetics, and self-care treatments.
          </p>
        </div>

        {/* Top Control Bar: Mobile Filter Toggle, Product Count, and Sort Dropdown */}
        <div className="bg-white p-4 rounded-2xl border border-[#EDE1E1] shadow-xs flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center justify-between sm:justify-start gap-4">
            {/* Mobile Filter Button */}
            <button
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 bg-[#FAF0F1] hover:bg-[#F2DEE0] text-[#93444B] rounded-xl text-xs font-semibold transition-colors"
            >
              <Filter className="w-4 h-4" />
              <span>Filters {activeFilterCount > 0 ? `(${activeFilterCount})` : ''}</span>
            </button>

            <span className="text-xs text-[#6B5458] font-medium">
              Showing <strong className="text-[#2A1E20]">{displayedProducts.length}</strong> of{' '}
              <strong className="text-[#2A1E20]">{filteredProducts.length}</strong> products
            </span>
          </div>

          <div className="flex items-center gap-3 self-end sm:self-auto">
            <span className="text-xs text-[#8C767B] font-medium hidden sm:inline">Sort By:</span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="appearance-none bg-[#FAF7F5] border border-[#DDD0D2] rounded-xl text-xs font-medium text-[#2A1E20] py-2 pl-3.5 pr-8 focus:outline-none focus:border-[#93444B] cursor-pointer"
              >
                <option value="featured">Featured / Best Sellers</option>
                <option value="newest">Newest Arrivals</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-stone-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Active Filter Tags */}
        {activeFilterCount > 0 && (
          <div className="flex flex-wrap items-center gap-2 mb-6 animate-in fade-in duration-200">
            <span className="text-xs text-[#8C767B] font-medium mr-1">Active Filters:</span>

            {selectedCategoryFilter && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FAF0F1] text-[#93444B] text-xs font-semibold rounded-full border border-[#F0DADE]">
                Category: {selectedCategoryFilter}
                <button
                  onClick={() => setSelectedCategoryFilter(null)}
                  className="hover:text-[#2A1E20]"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            {selectedConcernFilter && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FAF0F1] text-[#93444B] text-xs font-semibold rounded-full border border-[#F0DADE]">
                Concern: {selectedConcernFilter}
                <button
                  onClick={() => setSelectedConcernFilter(null)}
                  className="hover:text-[#2A1E20]"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            {maxPrice < 2500 && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FAF0F1] text-[#93444B] text-xs font-semibold rounded-full border border-[#F0DADE]">
                Max Price: Rs. {maxPrice}
                <button onClick={() => setMaxPrice(2500)} className="hover:text-[#2A1E20]">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            {minRating > 0 && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FAF0F1] text-[#93444B] text-xs font-semibold rounded-full border border-[#F0DADE]">
                {minRating}★ &amp; Above
                <button onClick={() => setMinRating(0)} className="hover:text-[#2A1E20]">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            <button
              onClick={resetAllFilters}
              className="text-xs font-semibold text-[#93444B] hover:text-[#2A1E20] flex items-center gap-1 ml-2 underline underline-offset-2"
            >
              <RotateCcw className="w-3 h-3" />
              Reset All
            </button>
          </div>
        )}

        {/* Main Layout: Sidebar Filters + Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Filter Sidebar */}
          <aside
            className={`lg:block ${
              mobileFilterOpen ? 'block fixed inset-0 z-50 bg-[#2A1E20]/60 p-4 overflow-y-auto' : 'hidden'
            } lg:relative lg:inset-auto lg:z-0 lg:bg-transparent lg:p-0`}
          >
            <div className="bg-white p-6 rounded-3xl border border-[#EDE1E1] shadow-xs space-y-6 max-w-sm mx-auto lg:max-w-none">
              <div className="flex items-center justify-between pb-4 border-b border-[#F0E6E6]">
                <div className="flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-[#93444B]" />
                  <h3 className="font-serif text-lg font-semibold text-[#2A1E20]">Refine Selection</h3>
                </div>
                {mobileFilterOpen && (
                  <button
                    onClick={() => setMobileFilterOpen(false)}
                    className="lg:hidden p-1 text-stone-400 hover:text-[#2A1E20]"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>

              {/* Category Filter */}
              <div>
                <h4 className="text-xs font-sans font-semibold uppercase tracking-wider text-[#2A1E20] mb-3">
                  Product Category
                </h4>
                <div className="space-y-1.5 text-xs">
                  <button
                    onClick={() => setSelectedCategoryFilter(null)}
                    className={`w-full text-left py-1.5 px-2.5 rounded-lg transition-colors flex justify-between items-center ${
                      selectedCategoryFilter === null
                        ? 'bg-[#FAF0F1] font-semibold text-[#93444B]'
                        : 'text-stone-600 hover:bg-[#FAF8F8]'
                    }`}
                  >
                    <span>All Categories</span>
                    <span className="text-[10px] text-stone-400">({PRODUCTS.length})</span>
                  </button>
                  {CATEGORIES.map((cat) => {
                    const count = PRODUCTS.filter((p) => p.category === cat.id).length;
                    const isSelected = selectedCategoryFilter === cat.id;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategoryFilter(isSelected ? null : cat.id)}
                        className={`w-full text-left py-1.5 px-2.5 rounded-lg transition-colors flex justify-between items-center ${
                          isSelected
                            ? 'bg-[#FAF0F1] font-semibold text-[#93444B]'
                            : 'text-stone-600 hover:bg-[#FAF8F8]'
                        }`}
                      >
                        <span>{cat.name}</span>
                        <span className="text-[10px] text-stone-400">({count})</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Skin Concern Filter */}
              <div className="pt-4 border-t border-[#F0E6E6]">
                <h4 className="text-xs font-sans font-semibold uppercase tracking-wider text-[#2A1E20] mb-3">
                  Skin Concern
                </h4>
                <div className="space-y-1.5 text-xs">
                  {SKIN_CONCERNS.map((concern) => {
                    const isSelected = selectedConcernFilter === concern.id;
                    return (
                      <button
                        key={concern.id}
                        onClick={() => setSelectedConcernFilter(isSelected ? null : concern.id)}
                        className={`w-full text-left py-1.5 px-2.5 rounded-lg transition-colors flex items-center justify-between ${
                          isSelected
                            ? 'bg-[#FAF0F1] font-semibold text-[#93444B]'
                            : 'text-stone-600 hover:bg-[#FAF8F8]'
                        }`}
                      >
                        <span className="flex items-center gap-1.5">
                          <span>{concern.icon}</span>
                          <span>{concern.name}</span>
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Price Range Slider */}
              <div className="pt-4 border-t border-[#F0E6E6]">
                <div className="flex items-center justify-between text-xs mb-2">
                  <h4 className="font-sans font-semibold uppercase tracking-wider text-[#2A1E20]">
                    Price Range
                  </h4>
                  <span className="font-bold text-[#93444B] tabular-nums">Up to Rs. {maxPrice}</span>
                </div>
                <input
                  type="range"
                  min="300"
                  max="2500"
                  step="50"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-[#93444B] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-stone-400 mt-1">
                  <span>Rs. 300</span>
                  <span>Rs. 2,500</span>
                </div>
              </div>

              {/* Min Rating */}
              <div className="pt-4 border-t border-[#F0E6E6]">
                <h4 className="text-xs font-sans font-semibold uppercase tracking-wider text-[#2A1E20] mb-2">
                  Rating
                </h4>
                <div className="space-y-1 text-xs">
                  {[4.8, 4.7, 4.5].map((starVal) => (
                    <label
                      key={starVal}
                      className="flex items-center gap-2 cursor-pointer p-1 rounded hover:bg-[#FAF8F8]"
                    >
                      <input
                        type="radio"
                        name="rating"
                        checked={minRating === starVal}
                        onChange={() => setMinRating(minRating === starVal ? 0 : starVal)}
                        className="accent-[#93444B]"
                      />
                      <div className="flex items-center text-[#E5A93C]">
                        <Star className="w-3.5 h-3.5 fill-[#E5A93C]" />
                        <span className="ml-1 text-stone-700 font-medium">{starVal} &amp; above</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* In Stock toggle */}
              <div className="pt-4 border-t border-[#F0E6E6]">
                <label className="flex items-center justify-between text-xs cursor-pointer">
                  <span className="text-stone-700 font-medium">In Stock Only</span>
                  <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={(e) => setInStockOnly(e.target.checked)}
                    className="rounded accent-[#93444B]"
                  />
                </label>
              </div>

              {mobileFilterOpen && (
                <button
                  onClick={() => setMobileFilterOpen(false)}
                  className="w-full py-3 bg-[#2A1E20] text-white rounded-xl text-xs font-semibold"
                >
                  APPLY FILTERS
                </button>
              )}
            </div>
          </aside>

          {/* Right Product Grid */}
          <div className="lg:col-span-3">
            {filteredProducts.length === 0 ? (
              <div className="bg-white p-12 rounded-3xl border border-[#EDE1E1] text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#FAF0F1] text-[#93444B] flex items-center justify-center mx-auto">
                  <Filter className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-medium text-[#2A1E20]">
                  No matching products
                </h3>
                <p className="text-xs text-[#826E72] max-w-sm mx-auto font-light">
                  We couldn't find any products matching your selected criteria. Try adjusting the filters or price limit.
                </p>
                <button
                  onClick={resetAllFilters}
                  className="px-6 py-2.5 bg-[#2A1E20] hover:bg-[#8A3A43] text-white text-xs font-semibold rounded-full transition-colors"
                >
                  RESET ALL FILTERS
                </button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {displayedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>

                {/* Load More Button */}
                {visibleCount < filteredProducts.length && (
                  <div className="text-center mt-12">
                    <button
                      onClick={() => setVisibleCount((prev) => prev + 6)}
                      className="px-8 py-3.5 bg-white hover:bg-[#FAF0F1] text-[#2A1E20] hover:text-[#93444B] border border-[#DDD0D2] rounded-full text-xs font-semibold tracking-wider transition-all shadow-xs hover:shadow-md cursor-pointer"
                    >
                      LOAD MORE PRODUCTS ({filteredProducts.length - visibleCount} REMAINING)
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
