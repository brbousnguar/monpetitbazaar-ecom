import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import CartSidebar from './components/CartSidebar';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductPage from './pages/ProductPage';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';
import LegalNotice from './pages/LegalNotice';
import TermsOfSale from './pages/TermsOfSale';
import DataProtection from './pages/DataProtection';
import DataUsage from './pages/DataUsage';
import ReturnPolicy from './pages/ReturnPolicy';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/product/:slug" element={<ProductPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/legal-notice" element={<LegalNotice />} />
              <Route path="/terms" element={<TermsOfSale />} />
              <Route path="/privacy-policy" element={<DataProtection />} />
              <Route path="/cookie-policy" element={<DataUsage />} />
              <Route path="/returns" element={<ReturnPolicy />} />
            </Routes>
          </main>
          <Footer />
          <CartSidebar />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
