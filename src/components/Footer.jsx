import { Link } from 'react-router-dom';
import { Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src="/logo.svg" alt="Mon Petit Bazaar" className="h-10 w-auto" />
            </div>
            <p className="text-gray-600 mb-4 max-w-md">
              Produits sélectionnés et créations artisanales. Articles de qualité à prix imbattables, 
              personnellement choisis et testés pour votre satisfaction.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-600 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Liens Rapides
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Boutique
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-primary-600 transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Customer Service */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Informations Légales
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/legal-notice" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Mentions Légales
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-primary-600 transition-colors">
                  CGV
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Confidentialité
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Cookies
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Retours & Remboursements
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Mon Petit Bazaar. Tous droits réservés.
            </p>
            <div className="flex items-center space-x-2 text-gray-600 text-sm">
              <Mail size={16} />
              <a href="mailto:contact@monpetitbazaar.fr" className="hover:text-primary-600 transition-colors">
                contact@monpetitbazaar.fr
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
