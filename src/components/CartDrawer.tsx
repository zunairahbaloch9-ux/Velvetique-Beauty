import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Sparkles, Check } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const CartDrawer: React.FC = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cart,
    cartCount,
    subtotal,
    shipping,
    discount,
    total,
    freeShippingThreshold,
    amountUntilFreeShipping,
    updateQuantity,
    removeFromCart,
    appliedPromo,
    applyPromoCode,
    removePromoCode,
    setActivePage
  } = useShop();

  const [promoInput, setPromoInput] = useState('');
  const [promoMessage, setPromoMessage] = useState<{ text: string; error?: boolean } | null>(null);

  if (!isCartOpen) return null;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoInput.trim()) return;
    const res = applyPromoCode(promoInput);
    if (res.success) {
      setPromoMessage({ text: res.message, error: false });
      setPromoInput('');
    } else {
      setPromoMessage({ text: res.message, error: true });
    }
  };

  const handleCheckoutClick = () => {
    setIsCartOpen(false);
    setActivePage('checkout');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const percentProgress = Math.min(
    100,
    Math.round(((freeShippingThreshold - amountUntilFreeShipping) / freeShippingThreshold) * 100)
  );

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-[#2A1E20]/50 backdrop-blur-xs transition-opacity"
      />

      {/* Drawer Container */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          {/* Drawer Header */}
          <div className="p-5 border-b border-[#F0E6E6] flex items-center justify-between bg-[#FAF7F5]">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#93444B]" />
              <h2 className="font-serif text-lg sm:text-xl font-semibold text-[#2A1E20]">
                Shopping Bag ({cartCount})
              </h2>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 text-stone-400 hover:text-[#2A1E20] hover:bg-stone-200/50 rounded-full transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="px-5 py-3.5 bg-[#FAF0F1] border-b border-[#F2DEE0]">
            <div className="flex items-center justify-between text-xs mb-1.5">
              {amountUntilFreeShipping > 0 ? (
                <span className="text-[#6D494F] font-medium">
                  Add <span className="font-bold text-[#93444B] tabular-nums">Rs. {amountUntilFreeShipping.toLocaleString()}</span> more for <strong className="font-semibold text-[#2A1E20]">FREE SHIPPING</strong>
                </span>
              ) : (
                <span className="text-emerald-700 font-semibold flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> Congratulations! You unlocked Free Shipping!
                </span>
              )}
              <span className="text-[11px] font-bold text-[#93444B] tabular-nums">{percentProgress}%</span>
            </div>
            <div className="w-full h-1.5 bg-[#E8D0D3] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#93444B] rounded-full transition-all duration-500 ease-out"
                style={{ width: `${percentProgress}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#FAF0F1] text-[#93444B] flex items-center justify-center">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-xl font-medium text-[#2A1E20]">Your bag is empty</h3>
                <p className="text-xs text-[#826E72] max-w-xs font-light">
                  Looks like you haven’t added any items yet. Discover our best-selling clean skincare and cosmetics.
                </p>
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    setActivePage('shop');
                  }}
                  className="px-6 py-2.5 bg-[#2A1E20] hover:bg-[#8A3A43] text-white text-xs font-semibold rounded-full transition-colors"
                >
                  START SHOPPING
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-4 p-3 rounded-xl border border-[#F0E6E6] bg-[#FAF8F8] hover:border-[#D19B9E]/60 transition-colors"
                >
                  {/* Thumbnail */}
                  <div className="w-20 h-20 rounded-lg overflow-hidden bg-white shrink-0 border border-[#EDE1E1] p-1">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-serif text-sm font-medium text-[#2A1E20] line-clamp-1">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-stone-400 hover:text-rose-600 transition-colors p-1"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <span className="text-[11px] text-[#8C767B]">
                        {item.product.volume || item.product.category}
                      </span>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      {/* Quantity Stepper */}
                      <div className="flex items-center border border-[#DDD0D2] rounded-lg bg-white overflow-hidden">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="p-1 hover:bg-[#FAF0F1] text-stone-600 hover:text-[#93444B] transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2.5 text-xs font-semibold text-[#2A1E20] tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="p-1 hover:bg-[#FAF0F1] text-stone-600 hover:text-[#93444B] transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Price */}
                      <span className="text-sm font-bold text-[#2A1E20] tabular-nums">
                        Rs. {(item.product.price * item.quantity).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Drawer Footer / Checkout summary */}
          {cart.length > 0 && (
            <div className="p-5 border-t border-[#F0E6E6] bg-[#FAF7F5] space-y-4">
              {/* Promo Code Form */}
              <div>
                {appliedPromo ? (
                  <div className="flex items-center justify-between p-2.5 bg-[#FAF0F1] rounded-lg border border-[#F2DEE0] text-xs">
                    <div className="flex items-center gap-1.5 text-[#93444B]">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span className="font-semibold">{appliedPromo.code}</span>
                      <span className="text-stone-500 font-light">({appliedPromo.description})</span>
                    </div>
                    <button
                      onClick={removePromoCode}
                      className="text-stone-400 hover:text-[#93444B] text-[11px] underline cursor-pointer"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApplyPromo} className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Promo code (e.g. GLOW15)"
                      value={promoInput}
                      onChange={(e) => setPromoInput(e.target.value)}
                      className="flex-1 px-3 py-2 text-xs bg-white border border-[#DDD0D2] rounded-lg uppercase tracking-wider focus:outline-none focus:border-[#93444B]"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-[#2A1E20] hover:bg-[#8A3A43] text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                    >
                      Apply
                    </button>
                  </form>
                )}
                {promoMessage && (
                  <p className={`text-[11px] mt-1 ${promoMessage.error ? 'text-rose-600' : 'text-emerald-700'}`}>
                    {promoMessage.text}
                  </p>
                )}
              </div>

              {/* Breakdown */}
              <div className="space-y-1.5 text-xs text-[#5C4549] pt-1">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#2A1E20] tabular-nums">
                    Rs. {subtotal.toLocaleString()}
                  </span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-emerald-700 font-medium">
                    <span>Discount</span>
                    <span className="tabular-nums">- Rs. {discount.toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="font-semibold text-[#2A1E20] tabular-nums">
                    {shipping === 0 ? <strong className="text-emerald-700">FREE</strong> : `Rs. ${shipping}`}
                  </span>
                </div>
                <div className="flex justify-between text-sm sm:text-base font-bold text-[#2A1E20] pt-2 border-t border-[#EBDCDD]">
                  <span>Total</span>
                  <span className="tabular-nums">Rs. {total.toLocaleString()}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={handleCheckoutClick}
                className="w-full py-3.5 bg-[#2A1E20] hover:bg-[#8A3A43] text-white text-xs sm:text-sm font-semibold tracking-wider rounded-xl transition-all duration-200 shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>PROCEED TO CHECKOUT</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[11px] text-center text-[#8C767B]">
                Taxes included. Cash on Delivery available at checkout.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
