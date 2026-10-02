import React from 'react';
import { ShopProvider, useShop } from './context/ShopContext';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { HeroSlider } from './components/HeroSlider';
import { TrustBenefits } from './components/TrustBenefits';
import { ShopByCategory } from './components/ShopByCategory';
import { PromoBanner } from './components/PromoBanner';
import { BestSellersSection } from './components/BestSellersSection';
import { NewArrivalsSection } from './components/NewArrivalsSection';
import { SpecialOffersSection } from './components/SpecialOffersSection';
import { ShopByConcernSection } from './components/ShopByConcernSection';
import { Footer } from './components/Footer';

// Drawers & Modals
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { QuickViewModal } from './components/QuickViewModal';
import { SearchModal } from './components/SearchModal';
import { AccountModal } from './components/AccountModal';
import { ToastContainer } from './components/ToastContainer';
import { ScrollToTop } from './components/ScrollToTop';

// Dedicated Page Views
import { ShopPage } from './views/ShopPage';
import { ProductDetailPage } from './views/ProductDetailPage';
import { CheckoutPage } from './views/CheckoutPage';
import { AboutPage } from './views/AboutPage';
import { BlogPage } from './views/BlogPage';
import { ContactPage } from './views/ContactPage';

const AppContent: React.FC = () => {
  const { activePage } = useShop();

  const renderActiveView = () => {
    switch (activePage) {
      case 'shop':
        return <ShopPage />;
      case 'product-detail':
        return <ProductDetailPage />;
      case 'checkout':
        return <CheckoutPage />;
      case 'about':
        return <AboutPage />;
      case 'blog':
        return <BlogPage />;
      case 'contact':
        return <ContactPage />;
      case 'home':
      default:
        return (
          <main>
            <HeroSlider />
            <TrustBenefits />
            <ShopByCategory />
            <PromoBanner />
            <BestSellersSection />
            <NewArrivalsSection />
            <SpecialOffersSection />
            <ShopByConcernSection />
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F5] text-[#2A1E20] antialiased selection:bg-[#F2DEE0] selection:text-[#381F24]">
      {/* Top Announcement Bar */}
      <AnnouncementBar />

      {/* Main Header / Navigation */}
      <Navbar />

      {/* Active Page View */}
      <div className="flex-1">{renderActiveView()}</div>

      {/* Luxury Footer */}
      <Footer />

      {/* Slide-out Drawers & Modals */}
      <CartDrawer />
      <WishlistDrawer />
      <QuickViewModal />
      <SearchModal />
      <AccountModal />
      <ToastContainer />
      <ScrollToTop />
    </div>
  );
};

export default function App() {
  return (
    <ShopProvider>
      <AppContent />
    </ShopProvider>
  );
}
