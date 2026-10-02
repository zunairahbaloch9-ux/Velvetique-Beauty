import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem, PageView, ToastMessage, Order, OrderCustomer } from '../types';
import { PRODUCTS } from '../data/products';

interface PromoDiscount {
  code: string;
  rate: number; // e.g. 0.15 for 15%
  description: string;
}

interface ShopContextType {
  // Navigation & Page State
  activePage: PageView;
  setActivePage: (page: PageView) => void;
  selectedProduct: Product | null;
  setSelectedProduct: (product: Product | null) => void;
  selectedCategoryFilter: string | null;
  setSelectedCategoryFilter: (cat: string | null) => void;
  selectedConcernFilter: string | null;
  setSelectedConcernFilter: (concern: string | null) => void;
  navigateToProduct: (product: Product) => void;
  navigateToCategory: (category: string) => void;
  navigateToConcern: (concern: string) => void;

  // Cart State
  cart: CartItem[];
  cartCount: number;
  subtotal: number;
  shipping: number;
  discount: number;
  total: number;
  freeShippingThreshold: number;
  amountUntilFreeShipping: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;

  // Promo Code
  appliedPromo: PromoDiscount | null;
  applyPromoCode: (code: string) => { success: boolean; message: string };
  removePromoCode: () => void;

  // Wishlist State
  wishlist: Product[];
  wishlistCount: number;
  isWishlistOpen: boolean;
  setIsWishlistOpen: (open: boolean) => void;
  toggleWishlist: (product: Product) => void;
  isInWishlist: (productId: string) => boolean;

  // Search State
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;

  // Quick View Modal
  quickViewProduct: Product | null;
  setQuickViewProduct: (product: Product | null) => void;

  // Account Modal / User
  isAccountOpen: boolean;
  setIsAccountOpen: (open: boolean) => void;
  user: { name: string; email: string; phone?: string; isLoggedIn: boolean } | null;
  loginUser: (name: string, email: string, phone?: string) => void;
  logoutUser: () => void;

  // Orders
  orders: Order[];
  lastConfirmedOrder: Order | null;
  createOrder: (
    customer: OrderCustomer,
    paymentMethod: 'Cash on Delivery' | 'Bank Transfer' | 'Card Payment',
    shippingMethod: 'Standard Delivery' | 'Express Delivery'
  ) => Order;

  // Toast Notifications
  toasts: ToastMessage[];
  addToast: (message: string, type?: 'success' | 'info' | 'warning') => void;
  removeToast: (id: string) => void;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

const VALID_PROMOS: Record<string, PromoDiscount> = {
  GLOW15: { code: 'GLOW15', rate: 0.15, description: '15% Off Your Entire Order' },
  WELCOME15: { code: 'WELCOME15', rate: 0.15, description: '15% Off Welcome Discount' },
  BUNDLE10: { code: 'BUNDLE10', rate: 0.10, description: '10% Off Bundle Savings' },
  FREESHIP: { code: 'FREESHIP', rate: 0, description: 'Free Express Shipping' }
};

const FREE_SHIPPING_THRESHOLD = 999;
const STANDARD_SHIPPING_FEE = 150;

export const ShopProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Navigation
  const [activePage, setActivePage] = useState<PageView>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string | null>(null);
  const [selectedConcernFilter, setSelectedConcernFilter] = useState<string | null>(null);

  // Cart
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('velvetique_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [appliedPromo, setAppliedPromo] = useState<PromoDiscount | null>(() => {
    try {
      const saved = localStorage.getItem('velvetique_promo');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  // Wishlist
  const [wishlist, setWishlist] = useState<Product[]>(() => {
    try {
      const saved = localStorage.getItem('velvetique_wishlist');
      if (saved) {
        const ids: string[] = JSON.parse(saved);
        return PRODUCTS.filter((p) => ids.includes(p.id));
      }
      return [];
    } catch {
      return [];
    }
  });
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  // Search & Modals
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  // User
  const [user, setUser] = useState<{ name: string; email: string; phone?: string; isLoggedIn: boolean } | null>(() => {
    try {
      const saved = localStorage.getItem('velvetique_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  // Orders
  const [orders, setOrders] = useState<Order[]>(() => {
    try {
      const saved = localStorage.getItem('velvetique_orders');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [lastConfirmedOrder, setLastConfirmedOrder] = useState<Order | null>(null);

  // Toasts
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Sync state to local storage
  useEffect(() => {
    localStorage.setItem('velvetique_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('velvetique_wishlist', JSON.stringify(wishlist.map((p) => p.id)));
  }, [wishlist]);

  useEffect(() => {
    if (appliedPromo) {
      localStorage.setItem('velvetique_promo', JSON.stringify(appliedPromo));
    } else {
      localStorage.removeItem('velvetique_promo');
    }
  }, [appliedPromo]);

  useEffect(() => {
    if (user) {
      localStorage.setItem('velvetique_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('velvetique_user');
    }
  }, [user]);

  useEffect(() => {
    localStorage.setItem('velvetique_orders', JSON.stringify(orders));
  }, [orders]);

  // Toast dispatch
  const addToast = (message: string, type: 'success' | 'info' | 'warning' = 'success') => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2, 5);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 3500);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Cart operations
  const addToCart = (product: Product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    addToast('Product added to cart successfully!');
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
    addToast('Item removed from cart', 'info');
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  // Calculations
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const discount = appliedPromo && appliedPromo.rate > 0
    ? Math.round(subtotal * appliedPromo.rate)
    : 0;

  const isFreeShipPromo = appliedPromo?.code === 'FREESHIP';
  const shipping = subtotal >= FREE_SHIPPING_THRESHOLD || isFreeShipPromo || subtotal === 0
    ? 0
    : STANDARD_SHIPPING_FEE;

  const total = Math.max(0, subtotal - discount + shipping);
  const amountUntilFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);

  // Promo code handler
  const applyPromoCode = (inputCode: string) => {
    const cleanCode = inputCode.trim().toUpperCase();
    const found = VALID_PROMOS[cleanCode];
    if (found) {
      setAppliedPromo(found);
      addToast(`Promo code ${cleanCode} applied! Saved discount.`, 'success');
      return { success: true, message: `Applied: ${found.description}` };
    }
    addToast('Invalid promo code. Try GLOW15 or WELCOME15', 'warning');
    return { success: false, message: 'Invalid promo code. Please check and try again.' };
  };

  const removePromoCode = () => {
    setAppliedPromo(null);
    addToast('Promo code removed', 'info');
  };

  // Wishlist operations
  const toggleWishlist = (product: Product) => {
    const exists = wishlist.some((item) => item.id === product.id);
    if (exists) {
      setWishlist((prev) => prev.filter((item) => item.id !== product.id));
      addToast('Removed from your wishlist', 'info');
    } else {
      setWishlist((prev) => [...prev, product]);
      addToast('Added to your wishlist!');
    }
  };

  const isInWishlist = (productId: string) => {
    return wishlist.some((item) => item.id === productId);
  };

  // Navigation helpers
  const navigateToProduct = (product: Product) => {
    setSelectedProduct(product);
    setActivePage('product-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToCategory = (category: string) => {
    setSelectedCategoryFilter(category === 'All' ? null : category);
    setSelectedConcernFilter(null);
    setActivePage('shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToConcern = (concern: string) => {
    setSelectedConcernFilter(concern);
    setSelectedCategoryFilter(null);
    setActivePage('shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Account
  const loginUser = (name: string, email: string, phone?: string) => {
    const newUser = { name, email, phone, isLoggedIn: true };
    setUser(newUser);
    setIsAccountOpen(false);
    addToast(`Welcome back, ${name}!`);
  };

  const logoutUser = () => {
    setUser(null);
    addToast('You have been logged out.', 'info');
  };

  // Checkout & Order creation
  const createOrder = (
    customer: OrderCustomer,
    paymentMethod: 'Cash on Delivery' | 'Bank Transfer' | 'Card Payment',
    shippingMethod: 'Standard Delivery' | 'Express Delivery'
  ): Order => {
    const randomSuffix = Math.floor(10000 + Math.random() * 90000);
    const orderNumber = `VB-${randomSuffix}`;

    const newOrder: Order = {
      id: `ord_${Date.now()}`,
      orderNumber,
      date: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      }),
      customer,
      items: [...cart],
      subtotal,
      shipping: shippingMethod === 'Express Delivery' ? shipping + 150 : shipping,
      discount,
      total: total + (shippingMethod === 'Express Delivery' ? 150 : 0),
      paymentMethod,
      shippingMethod,
      status: 'Confirmed'
    };

    setOrders((prev) => [newOrder, ...prev]);
    setLastConfirmedOrder(newOrder);
    clearCart();
    setAppliedPromo(null);
    addToast('Order placed successfully!');
    return newOrder;
  };

  return (
    <ShopContext.Provider
      value={{
        activePage,
        setActivePage,
        selectedProduct,
        setSelectedProduct,
        selectedCategoryFilter,
        setSelectedCategoryFilter,
        selectedConcernFilter,
        setSelectedConcernFilter,
        navigateToProduct,
        navigateToCategory,
        navigateToConcern,
        cart,
        cartCount,
        subtotal,
        shipping,
        discount,
        total,
        freeShippingThreshold: FREE_SHIPPING_THRESHOLD,
        amountUntilFreeShipping,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        appliedPromo,
        applyPromoCode,
        removePromoCode,
        wishlist,
        wishlistCount: wishlist.length,
        isWishlistOpen,
        setIsWishlistOpen,
        toggleWishlist,
        isInWishlist,
        isSearchOpen,
        setIsSearchOpen,
        searchQuery,
        setSearchQuery,
        quickViewProduct,
        setQuickViewProduct,
        isAccountOpen,
        setIsAccountOpen,
        user,
        loginUser,
        logoutUser,
        orders,
        lastConfirmedOrder,
        createOrder,
        toasts,
        addToast,
        removeToast
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};
