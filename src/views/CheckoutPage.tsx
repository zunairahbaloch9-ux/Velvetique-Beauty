import React, { useState } from 'react';
import {
  CheckCircle2,
  Truck,
  CreditCard,
  Banknote,
  Building,
  ShieldCheck,
  ArrowRight,
  ShoppingBag,
  Sparkles
} from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { OrderCustomer, Order } from '../types';

export const CheckoutPage: React.FC = () => {
  const {
    cart,
    subtotal,
    shipping,
    discount,
    total,
    appliedPromo,
    createOrder,
    lastConfirmedOrder,
    setActivePage,
    navigateToCategory,
    addToast
  } = useShop();

  // Form states
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('Karachi');
  const [province, setProvince] = useState('Sindh');
  const [postalCode, setPostalCode] = useState('75500');

  const [shippingMethod, setShippingMethod] = useState<'Standard Delivery' | 'Express Delivery'>(
    'Standard Delivery'
  );
  const [paymentMethod, setPaymentMethod] = useState<
    'Cash on Delivery' | 'Bank Transfer' | 'Card Payment'
  >('Cash on Delivery');

  const [cardHolder, setCardHolder] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedOrder, setConfirmedOrder] = useState<Order | null>(lastConfirmedOrder);

  // If order was just placed, show confirmation screen
  if (confirmedOrder) {
    return (
      <div className="bg-[#FAF7F5] min-h-screen py-12 sm:py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl border border-[#EDE1E1] shadow-md p-8 sm:p-12 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-5 border border-emerald-100">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <span className="text-xs font-sans font-semibold tracking-[0.25em] text-[#93444B] uppercase">
              ORDER CONFIRMED
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl text-[#2A1E20] font-medium tracking-tight mt-1 mb-2">
              Thank you for your order!
            </h1>
            <p className="text-xs sm:text-sm text-[#7A6468] max-w-md mx-auto mb-6">
              We&rsquo;ve received your order and are hand-packing your Velvetique beauty essentials with care.
            </p>

            {/* Order Card */}
            <div className="p-6 bg-[#FAF7F5] rounded-2xl border border-[#EDE1E1] text-left mb-8 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#E8DCDC]">
                <div>
                  <span className="text-[11px] text-stone-500 block">Order Reference</span>
                  <span className="font-mono text-base font-bold text-[#2A1E20]">
                    {confirmedOrder.orderNumber}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[11px] text-stone-500 block">Date</span>
                  <span className="text-xs font-semibold text-[#2A1E20]">{confirmedOrder.date}</span>
                </div>
              </div>

              {/* Delivery Details */}
              <div className="grid grid-cols-2 gap-4 text-xs text-[#523E42]">
                <div>
                  <span className="text-[11px] text-stone-400 block font-medium">Deliver To:</span>
                  <p className="font-semibold text-[#2A1E20]">{confirmedOrder.customer.fullName}</p>
                  <p>{confirmedOrder.customer.address}</p>
                  <p>
                    {confirmedOrder.customer.city}, {confirmedOrder.customer.province}
                  </p>
                  <p>{confirmedOrder.customer.phone}</p>
                </div>
                <div>
                  <span className="text-[11px] text-stone-400 block font-medium">Payment &amp; Method:</span>
                  <p className="font-semibold text-[#2A1E20]">{confirmedOrder.paymentMethod}</p>
                  <p>{confirmedOrder.shippingMethod}</p>
                  <span className="inline-block mt-2 font-bold text-sm text-[#93444B] tabular-nums">
                    Total: Rs. {confirmedOrder.total.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Items summary */}
              <div className="pt-3 border-t border-[#E8DCDC] space-y-2">
                <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider block">
                  Items Ordered ({confirmedOrder.items.length})
                </span>
                {confirmedOrder.items.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center text-xs">
                    <span className="text-[#2A1E20]">
                      {item.product.name} <span className="text-stone-400">× {item.quantity}</span>
                    </span>
                    <span className="font-medium tabular-nums">
                      Rs. {(item.product.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => {
                  setConfirmedOrder(null);
                  setActivePage('home');
                }}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#2A1E20] hover:bg-[#8A3A43] text-white text-xs sm:text-sm font-semibold tracking-wider rounded-full transition-colors cursor-pointer"
              >
                CONTINUE SHOPPING
              </button>
              <button
                onClick={() => {
                  setConfirmedOrder(null);
                  navigateToCategory('All');
                }}
                className="w-full sm:w-auto px-8 py-3.5 border border-[#DDD0D2] hover:bg-stone-50 text-[#2A1E20] text-xs sm:text-sm font-medium rounded-full transition-colors"
              >
                EXPLORE CATALOG
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // If cart is empty and no confirmed order
  if (cart.length === 0) {
    return (
      <div className="bg-[#FAF7F5] min-h-screen py-16 flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-[#FAF0F1] text-[#93444B] flex items-center justify-center mx-auto">
            <ShoppingBag className="w-8 h-8" />
          </div>
          <h2 className="font-serif text-2xl font-medium text-[#2A1E20]">Your bag is empty</h2>
          <p className="text-xs text-[#826E72] font-light">
            You don't have any items in your cart to checkout. Add some of our best-selling clean skincare products first.
          </p>
          <button
            onClick={() => setActivePage('shop')}
            className="px-6 py-3 bg-[#2A1E20] hover:bg-[#8A3A43] text-white text-xs font-semibold rounded-full transition-colors cursor-pointer"
          >
            BROWSE PRODUCTS
          </button>
        </div>
      </div>
    );
  }

  const finalShipping =
    shippingMethod === 'Express Delivery' ? shipping + 150 : shipping;
  const finalTotal = Math.max(0, subtotal - discount + finalShipping);

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !phone || !address || !city) {
      addToast('Please fill out all required shipping fields', 'warning');
      return;
    }

    if (paymentMethod === 'Card Payment' && (!cardNumber || !cardExpiry || !cardCvv)) {
      addToast('Please fill out your card payment details', 'warning');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      const customer: OrderCustomer = {
        fullName,
        email,
        phone,
        address,
        city,
        province,
        postalCode
      };

      const newOrder = createOrder(customer, paymentMethod, shippingMethod);
      setConfirmedOrder(newOrder);
      setIsSubmitting(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1000);
  };

  return (
    <div className="bg-[#FAF7F5] min-h-screen py-8 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="text-xs font-sans font-semibold tracking-[0.25em] text-[#93444B] uppercase">
            Secure Checkout
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#2A1E20] font-medium tracking-tight mt-1">
            Complete Your Purchase
          </h1>
        </div>

        <form onSubmit={handleSubmitOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Form: Customer info, Shipping, Payment (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* 1. Customer Information */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#EDE1E1] shadow-xs space-y-5">
              <h2 className="font-serif text-xl font-medium text-[#2A1E20] pb-3 border-b border-[#F0E6E6]">
                1. Customer &amp; Shipping Details
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#543E42] mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Fatima Ali"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#FAF7F5] border border-[#DDD0D2] rounded-xl focus:outline-none focus:border-[#93444B] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#543E42] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="fatima@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#FAF7F5] border border-[#DDD0D2] rounded-xl focus:outline-none focus:border-[#93444B] focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#543E42] mb-1">
                  Phone Number (for Courier SMS updates) *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+92 300 1234567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs bg-[#FAF7F5] border border-[#DDD0D2] rounded-xl focus:outline-none focus:border-[#93444B] focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#543E42] mb-1">
                  Street Address &amp; Apartment / Suite *
                </label>
                <input
                  type="text"
                  required
                  placeholder="House # 12-B, Street 5, Phase 6, DHA"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs bg-[#FAF7F5] border border-[#DDD0D2] rounded-xl focus:outline-none focus:border-[#93444B] focus:bg-white"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#543E42] mb-1">
                    City *
                  </label>
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#FAF7F5] border border-[#DDD0D2] rounded-xl focus:outline-none focus:border-[#93444B] focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#543E42] mb-1">
                    Province
                  </label>
                  <select
                    value={province}
                    onChange={(e) => setProvince(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#FAF7F5] border border-[#DDD0D2] rounded-xl focus:outline-none focus:border-[#93444B] focus:bg-white"
                  >
                    <option value="Sindh">Sindh</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Khyber Pakhtunkhwa">KPK</option>
                    <option value="Balochistan">Balochistan</option>
                    <option value="Islamabad Capital">Islamabad</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#543E42] mb-1">
                    Postal Code
                  </label>
                  <input
                    type="text"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#FAF7F5] border border-[#DDD0D2] rounded-xl focus:outline-none focus:border-[#93444B] focus:bg-white"
                  />
                </div>
              </div>
            </div>

            {/* 2. Shipping Method */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#EDE1E1] shadow-xs space-y-4">
              <h2 className="font-serif text-xl font-medium text-[#2A1E20] pb-3 border-b border-[#F0E6E6]">
                2. Shipping Method
              </h2>

              <div className="space-y-3">
                <label
                  className={`flex items-center justify-between p-4 rounded-2xl border transition-all cursor-pointer ${
                    shippingMethod === 'Standard Delivery'
                      ? 'border-[#93444B] bg-[#FAF0F1]'
                      : 'border-[#EDE1E1] hover:bg-[#FAF8F8]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="shippingMethod"
                      checked={shippingMethod === 'Standard Delivery'}
                      onChange={() => setShippingMethod('Standard Delivery')}
                      className="accent-[#93444B]"
                    />
                    <div>
                      <span className="font-semibold text-xs sm:text-sm text-[#2A1E20] block">
                        Standard Nationwide Delivery
                      </span>
                      <span className="text-[11px] text-[#7A6468]">
                        Delivered in 2–4 business days via verified courier
                      </span>
                    </div>
                  </div>
                  <span className="font-bold text-xs sm:text-sm text-[#2A1E20] tabular-nums">
                    {shipping === 0 ? <strong className="text-emerald-700">FREE</strong> : `Rs. ${shipping}`}
                  </span>
                </label>

                <label
                  className={`flex items-center justify-between p-4 rounded-2xl border transition-all cursor-pointer ${
                    shippingMethod === 'Express Delivery'
                      ? 'border-[#93444B] bg-[#FAF0F1]'
                      : 'border-[#EDE1E1] hover:bg-[#FAF8F8]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="shippingMethod"
                      checked={shippingMethod === 'Express Delivery'}
                      onChange={() => setShippingMethod('Express Delivery')}
                      className="accent-[#93444B]"
                    />
                    <div>
                      <span className="font-semibold text-xs sm:text-sm text-[#2A1E20] block">
                        Priority Express Delivery
                      </span>
                      <span className="text-[11px] text-[#7A6468]">
                        Next-day dispatch with live courier tracking
                      </span>
                    </div>
                  </div>
                  <span className="font-bold text-xs sm:text-sm text-[#2A1E20] tabular-nums">
                    Rs. {shipping + 150}
                  </span>
                </label>
              </div>
            </div>

            {/* 3. Payment Method */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#EDE1E1] shadow-xs space-y-4">
              <h2 className="font-serif text-xl font-medium text-[#2A1E20] pb-3 border-b border-[#F0E6E6]">
                3. Payment Method
              </h2>

              <div className="space-y-3">
                {/* Cash on Delivery */}
                <label
                  className={`flex items-center justify-between p-4 rounded-2xl border transition-all cursor-pointer ${
                    paymentMethod === 'Cash on Delivery'
                      ? 'border-[#93444B] bg-[#FAF0F1]'
                      : 'border-[#EDE1E1] hover:bg-[#FAF8F8]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="paymentMethod"
                      checked={paymentMethod === 'Cash on Delivery'}
                      onChange={() => setPaymentMethod('Cash on Delivery')}
                      className="accent-[#93444B]"
                    />
                    <Banknote className="w-5 h-5 text-[#93444B]" />
                    <div>
                      <span className="font-semibold text-xs sm:text-sm text-[#2A1E20] block">
                        Cash on Delivery (COD)
                      </span>
                      <span className="text-[11px] text-[#7A6468]">
                        Pay cash directly to the courier upon delivery
                      </span>
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider">
                    Popular
                  </span>
                </label>

                {/* Card Payment */}
                <label
                  className={`flex items-center justify-between p-4 rounded-2xl border transition-all cursor-pointer ${
                    paymentMethod === 'Card Payment'
                      ? 'border-[#93444B] bg-[#FAF0F1]'
                      : 'border-[#EDE1E1] hover:bg-[#FAF8F8]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="paymentMethod"
                      checked={paymentMethod === 'Card Payment'}
                      onChange={() => setPaymentMethod('Card Payment')}
                      className="accent-[#93444B]"
                    />
                    <CreditCard className="w-5 h-5 text-[#93444B]" />
                    <div>
                      <span className="font-semibold text-xs sm:text-sm text-[#2A1E20] block">
                        Debit / Credit Card
                      </span>
                      <span className="text-[11px] text-[#7A6468]">
                        Visa, Mastercard, RuPay with 256-bit SSL encryption
                      </span>
                    </div>
                  </div>
                </label>

                {paymentMethod === 'Card Payment' && (
                  <div className="p-4 bg-[#FAF7F5] rounded-2xl border border-[#EDE1E1] space-y-3 animate-in fade-in duration-200">
                    <div>
                      <label className="block text-[11px] font-semibold text-stone-600 mb-1">
                        Cardholder Name
                      </label>
                      <input
                        type="text"
                        placeholder="Name on card"
                        value={cardHolder}
                        onChange={(e) => setCardHolder(e.target.value)}
                        className="w-full px-3 py-2 text-xs bg-white border border-[#DDD0D2] rounded-xl focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-stone-600 mb-1">
                        Card Number
                      </label>
                      <input
                        type="text"
                        placeholder="•••• •••• •••• ••••"
                        maxLength={19}
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        className="w-full px-3 py-2 text-xs bg-white border border-[#DDD0D2] rounded-xl focus:outline-none font-mono"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-semibold text-stone-600 mb-1">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          maxLength={5}
                          value={cardExpiry}
                          onChange={(e) => setCardExpiry(e.target.value)}
                          className="w-full px-3 py-2 text-xs bg-white border border-[#DDD0D2] rounded-xl focus:outline-none font-mono"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-semibold text-stone-600 mb-1">
                          CVV / CVC
                        </label>
                        <input
                          type="password"
                          placeholder="•••"
                          maxLength={4}
                          value={cardCvv}
                          onChange={(e) => setCardCvv(e.target.value)}
                          className="w-full px-3 py-2 text-xs bg-white border border-[#DDD0D2] rounded-xl focus:outline-none font-mono"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Bank Transfer */}
                <label
                  className={`flex items-center justify-between p-4 rounded-2xl border transition-all cursor-pointer ${
                    paymentMethod === 'Bank Transfer'
                      ? 'border-[#93444B] bg-[#FAF0F1]'
                      : 'border-[#EDE1E1] hover:bg-[#FAF8F8]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="paymentMethod"
                      checked={paymentMethod === 'Bank Transfer'}
                      onChange={() => setPaymentMethod('Bank Transfer')}
                      className="accent-[#93444B]"
                    />
                    <Building className="w-5 h-5 text-[#93444B]" />
                    <div>
                      <span className="font-semibold text-xs sm:text-sm text-[#2A1E20] block">
                        Direct Bank Transfer
                      </span>
                      <span className="text-[11px] text-[#7A6468]">
                        Transfer via online banking / mobile app (Meezan, HBL, Alfalah)
                      </span>
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Right Summary: Order items & breakdown (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#EDE1E1] shadow-sm sticky top-28 space-y-6">
              <h2 className="font-serif text-xl font-medium text-[#2A1E20] pb-3 border-b border-[#F0E6E6]">
                Order Summary ({cart.length} items)
              </h2>

              {/* Items List */}
              <div className="space-y-3 max-h-64 overflow-y-auto pr-1">
                {cart.map((item) => (
                  <div key={item.product.id} className="flex items-center gap-3 text-xs">
                    <div className="w-14 h-14 rounded-lg bg-[#FAF7F5] border border-[#EDE1E1] p-1 shrink-0">
                      <img
                        src={item.product.image}
                        alt=""
                        className="w-full h-full object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif text-sm font-medium text-[#2A1E20] truncate">
                        {item.product.name}
                      </h4>
                      <span className="text-stone-400">Qty: {item.quantity}</span>
                    </div>
                    <span className="font-semibold text-[#2A1E20] tabular-nums shrink-0">
                      Rs. {(item.product.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>

              {/* Cost Calculation breakdown */}
              <div className="pt-4 border-t border-[#F0E6E6] space-y-2 text-xs text-[#5C4549]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#2A1E20] tabular-nums">
                    Rs. {subtotal.toLocaleString()}
                  </span>
                </div>

                {discount > 0 && (
                  <div className="flex justify-between text-emerald-700 font-medium">
                    <span className="flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> Discount ({appliedPromo?.code})
                    </span>
                    <span className="tabular-nums">- Rs. {discount.toLocaleString()}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span>Shipping ({shippingMethod})</span>
                  <span className="font-semibold text-[#2A1E20] tabular-nums">
                    {finalShipping === 0 ? (
                      <strong className="text-emerald-700">FREE</strong>
                    ) : (
                      `Rs. ${finalShipping}`
                    )}
                  </span>
                </div>

                <div className="flex justify-between text-base font-bold text-[#2A1E20] pt-3 border-t border-[#EBDCDD]">
                  <span>Total Amount</span>
                  <span className="tabular-nums">Rs. {finalTotal.toLocaleString()}</span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-[#2A1E20] hover:bg-[#8A3A43] text-white text-xs sm:text-sm font-semibold tracking-wider rounded-xl transition-all duration-200 shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
              >
                {isSubmitting ? (
                  <span>CONFIRMING ORDER...</span>
                ) : (
                  <>
                    <span>PLACE ORDER</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-stone-500 pt-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Encrypted 256-Bit SSL Checkout Protection</span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
