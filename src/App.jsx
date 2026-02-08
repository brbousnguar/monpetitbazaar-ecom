import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import CartSidebar from './components/CartSidebar';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import LegalNotice from './pages/LegalNotice';
import TermsOfSale from './pages/TermsOfSale';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookiePolicy from './pages/CookiePolicy';
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
              <Route path="/product/:slug" element={<ProductPage />} />
              <Route path="/legal-notice" element={<LegalNotice />} />
              <Route path="/terms" element={<TermsOfSale />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/cookie-policy" element={<CookiePolicy />} />
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
