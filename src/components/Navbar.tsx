import React, { useState, useEffect } from 'react';
import {
  Search,
  User,
  ShoppingBag,
  Heart,
  Menu,
  X,
  ChevronDown
} from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { PageView } from '../types';

export const Navbar: React.FC = () => {
  const {
    activePage,
    setActivePage,
    cartCount,
    wishlistCount,
    setIsCartOpen,
    setIsWishlistOpen,
    setIsSearchOpen,
    setIsAccountOpen,
    navigateToCategory,
    user
  } = useShop();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
  const [collectionsDropdownOpen, setCollectionsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: PageView) => {
    setActivePage(page);
    setMobileMenuOpen(false);
    setShopDropdownOpen(false);
    setCollectionsDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryClick = (category: string) => {
    navigateToCategory(category);
    setMobileMenuOpen(false);
    setShopDropdownOpen(false);
  };

  const handleCollectionClick = (collection: string) => {
    if (collection === 'Offers') {
      setActivePage('home');
      setMobileMenuOpen(false);
      setCollectionsDropdownOpen(false);
      setTimeout(() => {
        const el = document.getElementById('special-offers-section');
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }
    navigateToCategory('All');
    setMobileMenuOpen(false);
    setCollectionsDropdownOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF7F5]/95 backdrop-blur-md shadow-sm border-b border-[#E8DCDC]'
          : 'bg-[#FAF7F5] border-b border-[#F0E6E6]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Mobile Menu Button (Left on small screens) */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#2A1E20] hover:text-[#C47D82] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C47D82]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* ZONE 1: BRAND LOGO */}
          <div className="flex items-center shrink-0">
            <button
              onClick={() => handleNavClick('home')}
              className="text-left group focus:outline-none"
            >
              <span className="block font-serif text-2xl sm:text-3xl tracking-[0.2em] font-semibold text-[#2A1E20] group-hover:text-[#93444B] transition-colors uppercase">
                Velvetique
              </span>
              <span className="block text-[9px] sm:text-[10px] tracking-[0.35em] text-[#8C6D73] uppercase font-sans font-medium -mt-0.5">
                Beauty
              </span>
            </button>
          </div>

          {/* ZONE 2: DESKTOP NAVIGATION LINKS */}
          <nav className="hidden lg:flex items-center space-x-7 font-sans text-sm font-medium tracking-wide text-[#3E2C30]">
            <button
              onClick={() => handleNavClick('home')}
              className={`hover:text-[#C47D82] transition-colors py-2 relative ${
                activePage === 'home' ? 'text-[#C47D82] font-semibold' : ''
              }`}
            >
              Home
              {activePage === 'home' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C47D82] rounded-full" />
              )}
            </button>

            {/* Shop Dropdown */}
            <div
              className="relative py-2"
              onMouseEnter={() => setShopDropdownOpen(true)}
              onMouseLeave={() => setShopDropdownOpen(false)}
            >
              <button
                onClick={() => handleCategoryClick('All')}
                className={`flex items-center gap-1 hover:text-[#C47D82] transition-colors py-1 ${
                  activePage === 'shop' ? 'text-[#C47D82] font-semibold' : ''
                }`}
              >
                Shop
                <ChevronDown className="w-3.5 h-3.5 text-stone-400 group-hover:text-[#C47D82] transition-transform" />
              </button>

              {shopDropdownOpen && (
                <div className="absolute top-full left-0 w-52 bg-white rounded-xl shadow-xl border border-[#F0E6E6] py-3 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <button
                    onClick={() => handleCategoryClick('All')}
                    className="w-full text-left px-4 py-2 text-xs font-semibold text-[#2A1E20] hover:bg-[#FDF7F7] hover:text-[#C47D82] transition-colors"
                  >
                    All Products
                  </button>
                  <div className="h-px bg-[#F5ECEC] my-1" />
                  <button
                    onClick={() => handleCategoryClick('Skincare')}
                    className="w-full text-left px-4 py-1.5 text-xs text-stone-600 hover:bg-[#FDF7F7] hover:text-[#C47D82] transition-colors"
                  >
                    Skincare
                  </button>
                  <button
                    onClick={() => handleCategoryClick('Makeup')}
                    className="w-full text-left px-4 py-1.5 text-xs text-stone-600 hover:bg-[#FDF7F7] hover:text-[#C47D82] transition-colors"
                  >
                    Makeup
                  </button>
                  <button
                    onClick={() => handleCategoryClick('Haircare')}
                    className="w-full text-left px-4 py-1.5 text-xs text-stone-600 hover:bg-[#FDF7F7] hover:text-[#C47D82] transition-colors"
                  >
                    Haircare
                  </button>
                  <button
                    onClick={() => handleCategoryClick('Bodycare')}
                    className="w-full text-left px-4 py-1.5 text-xs text-stone-600 hover:bg-[#FDF7F7] hover:text-[#C47D82] transition-colors"
                  >
                    Bodycare
                  </button>
                  <button
                    onClick={() => handleCategoryClick('Sun Care')}
                    className="w-full text-left px-4 py-1.5 text-xs text-stone-600 hover:bg-[#FDF7F7] hover:text-[#C47D82] transition-colors"
                  >
                    Sun Care
                  </button>
                  <button
                    onClick={() => handleCategoryClick('Gift Sets')}
                    className="w-full text-left px-4 py-1.5 text-xs text-stone-600 hover:bg-[#FDF7F7] hover:text-[#C47D82] transition-colors font-medium text-[#C47D82]"
                  >
                    Gift Sets
                  </button>
                </div>
              )}
            </div>

            {/* Collections Dropdown */}
            <div
              className="relative py-2"
              onMouseEnter={() => setCollectionsDropdownOpen(true)}
              onMouseLeave={() => setCollectionsDropdownOpen(false)}
            >
              <button
                onClick={() => handleCategoryClick('All')}
                className="flex items-center gap-1 hover:text-[#C47D82] transition-colors py-1"
              >
                Collections
                <ChevronDown className="w-3.5 h-3.5 text-stone-400 group-hover:text-[#C47D82] transition-transform" />
              </button>

              {collectionsDropdownOpen && (
                <div className="absolute top-full left-0 w-48 bg-white rounded-xl shadow-xl border border-[#F0E6E6] py-3 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <button
                    onClick={() => handleCollectionClick('Best Sellers')}
                    className="w-full text-left px-4 py-1.5 text-xs text-stone-700 hover:bg-[#FDF7F7] hover:text-[#C47D82] transition-colors"
                  >
                    Best Sellers
                  </button>
                  <button
                    onClick={() => handleCollectionClick('New Arrivals')}
                    className="w-full text-left px-4 py-1.5 text-xs text-stone-700 hover:bg-[#FDF7F7] hover:text-[#C47D82] transition-colors"
                  >
                    New Arrivals
                  </button>
                  <button
                    onClick={() => handleCollectionClick('Trending')}
                    className="w-full text-left px-4 py-1.5 text-xs text-stone-700 hover:bg-[#FDF7F7] hover:text-[#C47D82] transition-colors"
                  >
                    Trending
                  </button>
                  <button
                    onClick={() => handleCollectionClick('Limited Edition')}
                    className="w-full text-left px-4 py-1.5 text-xs text-stone-700 hover:bg-[#FDF7F7] hover:text-[#C47D82] transition-colors"
                  >
                    Limited Edition
                  </button>
                  <button
                    onClick={() => handleCollectionClick('Offers')}
                    className="w-full text-left px-4 py-1.5 text-xs font-semibold text-[#C47D82] hover:bg-[#FDF7F7] transition-colors"
                  >
                    Offers &amp; Sales
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('about')}
              className={`hover:text-[#C47D82] transition-colors py-2 relative ${
                activePage === 'about' ? 'text-[#C47D82] font-semibold' : ''
              }`}
            >
              About Us
              {activePage === 'about' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C47D82] rounded-full" />
              )}
            </button>

            <button
              onClick={() => handleNavClick('blog')}
              className={`hover:text-[#C47D82] transition-colors py-2 relative ${
                activePage === 'blog' ? 'text-[#C47D82] font-semibold' : ''
              }`}
            >
              Blog
              {activePage === 'blog' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C47D82] rounded-full" />
              )}
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className={`hover:text-[#C47D82] transition-colors py-2 relative ${
                activePage === 'contact' ? 'text-[#C47D82] font-semibold' : ''
              }`}
            >
              Contact
              {activePage === 'contact' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C47D82] rounded-full" />
              )}
            </button>
          </nav>

          {/* ZONE 3: ACTIONS & ICONS */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Search Icon */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-[#2A1E20] hover:text-[#C47D82] hover:bg-[#F5EAEB] rounded-full transition-colors focus:outline-none"
              title="Search products"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Wishlist Icon */}
            <button
              onClick={() => setIsWishlistOpen(true)}
              className="p-2 text-[#2A1E20] hover:text-[#C47D82] hover:bg-[#F5EAEB] rounded-full transition-colors relative focus:outline-none"
              title="Wishlist"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#C47D82] text-white text-[10px] font-bold rounded-full flex items-center justify-center tabular-nums shadow-sm">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* User Account Icon */}
            <button
              onClick={() => setIsAccountOpen(true)}
              className="p-2 text-[#2A1E20] hover:text-[#C47D82] hover:bg-[#F5EAEB] rounded-full transition-colors relative focus:outline-none"
              title={user ? `Signed in as ${user.name}` : 'Sign In / Account'}
              aria-label="Account"
            >
              <User className="w-5 h-5" />
              {user?.isLoggedIn && (
                <span className="absolute bottom-1 right-1 w-2 h-2 bg-emerald-500 rounded-full ring-2 ring-white" />
              )}
            </button>

            {/* Shopping Bag / Cart */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-2 py-2 px-3 bg-[#2A1E20] hover:bg-[#432C30] text-white rounded-full transition-all duration-200 shadow-sm focus:outline-none"
              aria-label="Shopping Cart"
            >
              <div className="relative">
                <ShoppingBag className="w-4 h-4" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 w-4 h-4 bg-[#C47D82] text-white text-[9px] font-bold rounded-full flex items-center justify-center tabular-nums">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="hidden sm:inline text-xs font-medium tracking-wide">
                Bag {cartCount > 0 ? `(${cartCount})` : ''}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE COLLAPSIBLE MENU */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF7F5] border-t border-[#F0E6E6] px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top duration-200">
          <button
            onClick={() => handleNavClick('home')}
            className={`block w-full text-left py-2.5 px-3 rounded-lg text-sm font-medium ${
              activePage === 'home' ? 'bg-[#F2E4E6] text-[#C47D82] font-semibold' : 'text-[#2A1E20]'
            }`}
          >
            Home
          </button>

          {/* Mobile Shop Categories */}
          <div className="py-2 border-y border-[#EDE3E3]">
            <span className="block px-3 py-1 text-xs font-semibold text-stone-400 uppercase tracking-widest">
              Shop Categories
            </span>
            <div className="grid grid-cols-2 gap-1 mt-1">
              <button
                onClick={() => handleCategoryClick('All')}
                className="text-left py-1.5 px-3 text-xs text-stone-700 hover:text-[#C47D82]"
              >
                All Products
              </button>
              <button
                onClick={() => handleCategoryClick('Skincare')}
                className="text-left py-1.5 px-3 text-xs text-stone-700 hover:text-[#C47D82]"
              >
                Skincare
              </button>
              <button
                onClick={() => handleCategoryClick('Makeup')}
                className="text-left py-1.5 px-3 text-xs text-stone-700 hover:text-[#C47D82]"
              >
                Makeup
              </button>
              <button
                onClick={() => handleCategoryClick('Haircare')}
                className="text-left py-1.5 px-3 text-xs text-stone-700 hover:text-[#C47D82]"
              >
                Haircare
              </button>
              <button
                onClick={() => handleCategoryClick('Bodycare')}
                className="text-left py-1.5 px-3 text-xs text-stone-700 hover:text-[#C47D82]"
              >
                Bodycare
              </button>
              <button
                onClick={() => handleCategoryClick('Sun Care')}
                className="text-left py-1.5 px-3 text-xs text-stone-700 hover:text-[#C47D82]"
              >
                Sun Care
              </button>
              <button
                onClick={() => handleCategoryClick('Gift Sets')}
                className="text-left py-1.5 px-3 text-xs font-semibold text-[#C47D82]"
              >
                Gift Sets ✨
              </button>
            </div>
          </div>

          <button
            onClick={() => handleNavClick('about')}
            className={`block w-full text-left py-2.5 px-3 rounded-lg text-sm font-medium ${
              activePage === 'about' ? 'bg-[#F2E4E6] text-[#C47D82] font-semibold' : 'text-[#2A1E20]'
            }`}
          >
            About Us
          </button>

          <button
            onClick={() => handleNavClick('blog')}
            className={`block w-full text-left py-2.5 px-3 rounded-lg text-sm font-medium ${
              activePage === 'blog' ? 'bg-[#F2E4E6] text-[#C47D82] font-semibold' : 'text-[#2A1E20]'
            }`}
          >
            Blog &amp; Journal
          </button>

          <button
            onClick={() => handleNavClick('contact')}
            className={`block w-full text-left py-2.5 px-3 rounded-lg text-sm font-medium ${
              activePage === 'contact' ? 'bg-[#F2E4E6] text-[#C47D82] font-semibold' : 'text-[#2A1E20]'
            }`}
          >
            Contact
          </button>
        </div>
      )}
    </header>
  );
};
