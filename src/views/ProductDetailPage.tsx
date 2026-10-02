import React, { useState } from 'react';
import {
  Star,
  ShoppingBag,
  Heart,
  Truck,
  ShieldCheck,
  RotateCcw,
  Sparkles,
  Plus,
  Minus,
  Check,
  ChevronRight
} from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';

export const ProductDetailPage: React.FC = () => {
  const {
    selectedProduct,
    addToCart,
    toggleWishlist,
    isInWishlist,
    setActivePage,
    navigateToCategory
  } = useShop();

  const product = selectedProduct || PRODUCTS[0];
  const [selectedThumb, setSelectedThumb] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'benefits' | 'ingredients' | 'how-to'>('benefits');

  const isFavorited = isInWishlist(product.id);
  const currentImage = product.thumbnails[selectedThumb] || product.image;

  // Related products
  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  const handleBuyNow = () => {
    addToCart(product, quantity);
    setActivePage('checkout');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#FAF7F5] min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-[#8C767B] mb-8 overflow-x-auto whitespace-nowrap">
          <button
            onClick={() => setActivePage('home')}
            className="hover:text-[#2A1E20] transition-colors"
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5" />
          <button
            onClick={() => navigateToCategory(product.category)}
            className="hover:text-[#2A1E20] transition-colors"
          >
            {product.category}
          </button>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="font-semibold text-[#2A1E20] truncate max-w-xs">{product.name}</span>
        </nav>

        {/* Product Showcase Section */}
        <div className="bg-white rounded-3xl border border-[#EDE1E1] shadow-sm p-6 sm:p-10 lg:p-12 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Gallery Column (5 cols) */}
            <div className="lg:col-span-6 flex flex-col-reverse sm:flex-row gap-4">
              {/* Thumbnails */}
              <div className="flex sm:flex-col gap-3 justify-center sm:justify-start overflow-x-auto sm:overflow-visible">
                {product.thumbnails.map((thumb, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedThumb(idx)}
                    className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-[#FAF6F4] p-1.5 border transition-all cursor-pointer shrink-0 ${
                      selectedThumb === idx
                        ? 'border-[#93444B] ring-2 ring-[#93444B]/20 shadow-xs'
                        : 'border-[#EDE1E1] hover:border-[#D19B9E]'
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

              {/* Main Image */}
              <div className="flex-1 aspect-square rounded-2xl bg-[#FAF6F4] border border-[#EDE1E1] p-8 flex items-center justify-center relative overflow-hidden shadow-inner">
                <img
                  src={currentImage}
                  alt={product.name}
                  className="w-full h-full object-contain transform transition-transform duration-500 hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {product.discountPercent && (
                  <span className="absolute top-4 left-4 bg-[#93444B] text-white text-xs font-semibold uppercase tracking-wider py-1 px-3 rounded-full">
                    SAVE {product.discountPercent}%
                  </span>
                )}
              </div>
            </div>

            {/* Product Details & Purchase Module (7 cols) */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div>
                {/* Category & Stock Tag */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-sans font-semibold tracking-widest uppercase text-[#93444B]">
                    {product.category} · {product.subcategory}
                  </span>
                  <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
                    In Stock &amp; Ready to Ship
                  </span>
                </div>

                {/* Title */}
                <h1 className="font-serif text-2xl sm:text-4xl font-medium text-[#2A1E20] tracking-tight leading-snug">
                  {product.name}
                </h1>

                {/* Rating & Reviews */}
                <div className="flex items-center gap-3 mt-3">
                  <div className="flex items-center text-[#E5A93C]">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? 'fill-[#E5A93C]'
                            : 'fill-stone-200 text-stone-200'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-[#2A1E20] tabular-nums">
                    {product.rating}
                  </span>
                  <span className="text-xs text-stone-400">
                    ({product.reviewsCount} verified customer reviews)
                  </span>
                </div>

                {/* Price Display */}
                <div className="flex items-baseline gap-3 my-5 pb-5 border-b border-[#F0E6E6]">
                  <span className="font-sans font-bold text-3xl sm:text-4xl text-[#2A1E20] tabular-nums">
                    Rs. {product.price.toLocaleString()}
                  </span>
                  {product.oldPrice && (
                    <span className="text-base text-stone-400 line-through tabular-nums">
                      Rs. {product.oldPrice.toLocaleString()}
                    </span>
                  )}
                  {product.volume && (
                    <span className="text-xs text-stone-500 ml-2 font-medium">
                      ({product.volume})
                    </span>
                  )}
                </div>

                {/* Short Overview */}
                <p className="text-xs sm:text-sm text-[#5C4549] leading-relaxed font-light mb-6">
                  {product.description}
                </p>

                {/* Purchase Action Controls */}
                <div className="space-y-4 pt-2">
                  <div className="flex items-center gap-3">
                    {/* Quantity Stepper */}
                    <div className="flex items-center border border-[#DDD0D2] rounded-xl bg-[#FAF8F8] p-1">
                      <button
                        onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                        className="p-2 hover:bg-white text-stone-600 hover:text-[#93444B] rounded-lg transition-colors cursor-pointer"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-4 text-sm font-bold text-[#2A1E20] tabular-nums">
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity((q) => q + 1)}
                        className="p-2 hover:bg-white text-stone-600 hover:text-[#93444B] rounded-lg transition-colors cursor-pointer"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Add to Cart */}
                    <button
                      onClick={() => addToCart(product, quantity)}
                      className="flex-1 py-3.5 px-6 bg-[#2A1E20] hover:bg-[#8A3A43] text-white text-xs sm:text-sm font-semibold tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      <span>ADD TO BAG</span>
                    </button>

                    {/* Wishlist */}
                    <button
                      onClick={() => toggleWishlist(product)}
                      className={`p-3.5 rounded-xl border transition-colors cursor-pointer ${
                        isFavorited
                          ? 'bg-[#93444B] text-white border-[#93444B]'
                          : 'border-[#DDD0D2] text-[#2A1E20] hover:bg-[#FAF0F1] hover:text-[#93444B]'
                      }`}
                      aria-label="Wishlist"
                    >
                      <Heart className="w-5 h-5" fill={isFavorited ? 'currentColor' : 'none'} />
                    </button>
                  </div>

                  {/* Buy Now Direct Button */}
                  <button
                    onClick={handleBuyNow}
                    className="w-full py-3.5 px-6 bg-[#FAF0F1] hover:bg-[#93444B] text-[#93444B] hover:text-white border border-[#E8D4D6] text-xs sm:text-sm font-semibold tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>BUY IT NOW</span>
                  </button>
                </div>

                {/* Trust guarantees list */}
                <div className="grid grid-cols-3 gap-2 pt-6 border-t border-[#F0E6E6] mt-6 text-[11px] text-stone-600">
                  <div className="flex items-center gap-1.5">
                    <Truck className="w-4 h-4 text-[#93444B] shrink-0" />
                    <span>Free Shipping &gt; Rs. 999</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#93444B] shrink-0" />
                    <span>100% Authentic</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <RotateCcw className="w-4 h-4 text-[#93444B] shrink-0" />
                    <span>7-Day Return Guarantee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tabbed Info Section: Benefits, Ingredients, How to Use */}
          <div className="mt-14 pt-10 border-t border-[#F0E6E6]">
            {/* Tabs Bar */}
            <div className="flex border-b border-[#F0E6E6] gap-8 mb-6">
              <button
                onClick={() => setActiveTab('benefits')}
                className={`pb-3 text-xs sm:text-sm font-semibold uppercase tracking-wider relative transition-colors ${
                  activeTab === 'benefits'
                    ? 'text-[#93444B]'
                    : 'text-stone-500 hover:text-[#2A1E20]'
                }`}
              >
                Key Benefits
                {activeTab === 'benefits' && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#93444B] rounded-full" />
                )}
              </button>

              <button
                onClick={() => setActiveTab('ingredients')}
                className={`pb-3 text-xs sm:text-sm font-semibold uppercase tracking-wider relative transition-colors ${
                  activeTab === 'ingredients'
                    ? 'text-[#93444B]'
                    : 'text-stone-500 hover:text-[#2A1E20]'
                }`}
              >
                Clean Ingredients
                {activeTab === 'ingredients' && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#93444B] rounded-full" />
                )}
              </button>

              <button
                onClick={() => setActiveTab('how-to')}
                className={`pb-3 text-xs sm:text-sm font-semibold uppercase tracking-wider relative transition-colors ${
                  activeTab === 'how-to'
                    ? 'text-[#93444B]'
                    : 'text-stone-500 hover:text-[#2A1E20]'
                }`}
              >
                How To Use
                {activeTab === 'how-to' && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#93444B] rounded-full" />
                )}
              </button>
            </div>

            {/* Tab Contents */}
            <div className="text-xs sm:text-sm text-[#5C4549] leading-relaxed max-w-3xl font-light">
              {activeTab === 'benefits' && (
                <div className="space-y-3 animate-in fade-in duration-200">
                  {product.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-[#FAF0F1] text-[#93444B] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'ingredients' && (
                <div className="space-y-3 animate-in fade-in duration-200">
                  <p className="font-mono text-xs bg-[#FAF7F5] p-4 rounded-xl border border-[#EDE1E1] leading-relaxed">
                    {product.ingredients}
                  </p>
                  <p className="text-[11px] text-stone-500 italic">
                    Formulated without parabens, sulfates, phthalates, synthetic mineral oils, or artificial colorants.
                  </p>
                </div>
              )}

              {activeTab === 'how-to' && (
                <div className="bg-[#FAF7F5] p-5 rounded-xl border border-[#EDE1E1] animate-in fade-in duration-200">
                  <h4 className="font-serif text-base font-semibold text-[#2A1E20] mb-2">
                    Application Ritual:
                  </h4>
                  <p>{product.howToUse}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* YOU MAY ALSO LIKE Section */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-xs font-sans font-semibold tracking-[0.25em] text-[#93444B] uppercase">
                Complete Your Ritual
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#2A1E20] font-medium tracking-tight mt-1">
                YOU MAY ALSO LIKE
              </h2>
              <div className="w-12 h-0.5 bg-[#D19B9E] mx-auto mt-3" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {relatedProducts.map((relProduct) => (
                <ProductCard key={relProduct.id} product={relProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
