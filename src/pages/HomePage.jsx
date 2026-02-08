import { ArrowRight, Package, Truck, Shield, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import products from '../data/products.json';

const HomePage = () => {
  const featuredProducts = products.filter(p => p.isFeatured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-amber-50 py-20 md:py-32 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Hero Content */}
            <div className="text-center lg:text-left">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-full text-sm font-semibold mb-6 shadow-lg shadow-primary-500/30">
                🎉 Nouveautés Disponibles
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
                Qualité Premium,
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800">
                  Prix Imbattables
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Découvrez notre sélection de produits soigneusement choisis : mode, électronique et créations artisanales. 
                <span className="block mt-2 font-medium text-gray-700">Chaque article est testé pour votre satisfaction.</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link 
                  to="/shop" 
                  className="group btn-primary inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold shadow-xl shadow-primary-500/30 hover:shadow-2xl hover:shadow-primary-500/40 transform hover:-translate-y-0.5 transition-all"
                >
                  Découvrir la Collection
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/about" 
                  className="btn-outline inline-flex items-center justify-center px-8 py-4 text-lg font-semibold"
                >
                  En Savoir Plus
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mt-16 pt-12 border-t-2 border-gray-200">
                <div className="text-center lg:text-left">
                  <div className="text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent mb-2">500+</div>
                  <div className="text-sm font-medium text-gray-600">Clients Satisfaits</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent mb-2">50+</div>
                  <div className="text-sm font-medium text-gray-600">Produits Uniques</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent mb-2">4.8</div>
                  <div className="text-sm font-medium text-gray-600">Note Moyenne</div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative hidden lg:block">
              <div className="relative z-10 group">
                <img
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80"
                  alt="Shopping Experience"
                  className="rounded-3xl shadow-2xl shadow-gray-900/20 ring-1 ring-gray-900/5 group-hover:shadow-3xl group-hover:scale-[1.02] transition-all duration-300"
                />
                {/* Floating badge */}
                <div className="absolute -top-6 -right-6 bg-gradient-to-br from-accent-500 to-accent-600 text-white px-6 py-4 rounded-2xl shadow-xl shadow-accent-500/40 transform rotate-3 hover:rotate-6 transition-transform">
                  <div className="text-3xl font-bold">-30%</div>
                  <div className="text-sm font-medium">Sur Sélection</div>
                </div>
                {/* Trust badge */}
                <div className="absolute -bottom-6 -left-6 bg-white px-6 py-4 rounded-2xl shadow-xl shadow-gray-900/10 ring-1 ring-gray-900/5 transform -rotate-3 hover:-rotate-6 transition-transform">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      <div className="w-10 h-10 rounded-full bg-primary-100 ring-2 ring-white flex items-center justify-center text-primary-700 font-bold">A</div>
                      <div className="w-10 h-10 rounded-full bg-accent-100 ring-2 ring-white flex items-center justify-center text-accent-700 font-bold">M</div>
                      <div className="w-10 h-10 rounded-full bg-green-100 ring-2 ring-white flex items-center justify-center text-green-700 font-bold">+</div>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">500+ Clients</div>
                      <div className="text-sm text-gray-600">Nous font confiance</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-12 -left-12 w-72 h-72 bg-gradient-to-br from-primary-200 to-primary-300 rounded-full blur-3xl opacity-20 -z-10 animate-pulse" />
              <div className="absolute bottom-12 -right-12 w-72 h-72 bg-gradient-to-br from-accent-200 to-accent-300 rounded-full blur-3xl opacity-20 -z-10 animate-pulse animation-delay-2000" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pourquoi Choisir Mon Petit Bazaar ?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Des garanties solides pour votre tranquillité d'esprit</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                <Package className="text-primary-600" size={32} />
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg">Sélection Premium</h3>
              <p className="text-gray-600 leading-relaxed">
                Chaque produit personnellement testé et approuvé pour sa qualité
              </p>
            </div>
            
            <div className="group text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                <Truck className="text-green-600" size={32} />
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg">Livraison Rapide</h3>
              <p className="text-gray-600 leading-relaxed">
                Expédition soignée et rapide directement chez vous
              </p>
            </div>
            
            <div className="group text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                <Shield className="text-blue-600" size={32} />
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg">Paiement Sécurisé</h3>
              <p className="text-gray-600 leading-relaxed">
                Transactions 100% sécurisées et protection des données
              </p>
            </div>
            
            <div className="group text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-accent-100 to-accent-200 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                <HeartHandshake className="text-accent-600" size={32} />
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg">Satisfaction Garantie</h3>
              <p className="text-gray-600 leading-relaxed">
                Votre bonheur est notre priorité absolue
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
              ⭐ Nos Coups de Cœur
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Produits en Vedette
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Découvrez notre sélection exclusive de produits premium à prix imbattables
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-16">
            <Link 
              to="/shop" 
              className="group btn-primary inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40"
            >
              Voir Tous les Produits
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-6">
            📧 Restez Informé
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Rejoignez Notre Communauté
          </h2>
          <p className="text-xl text-primary-50 mb-10 leading-relaxed max-w-2xl mx-auto">
            Abonnez-vous pour recevoir des offres exclusives et être le premier informé de nos nouveautés
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-grow px-6 py-4 rounded-xl focus:ring-4 focus:ring-white/30 outline-none text-gray-900 placeholder-gray-500 shadow-xl"
            />
            <button className="bg-white text-primary-700 px-10 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105 whitespace-nowrap">
              S'abonner
            </button>
          </div>
          <p className="text-sm text-primary-100 mt-6">
            ✓ Offres exclusives · ✓ Nouveautés en avant-première · ✓ Désabonnement facile
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
