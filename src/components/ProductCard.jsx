import { Link } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const discountPercent = product.comparePrice
    ? Math.round(((product.comparePrice - product.price) / product.comparePrice) * 100)
    : 0;

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <Link to={`/product/${product.slug}`} className="group">
      <div className="card overflow-hidden h-full flex flex-col">
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.isNew && (
              <span className="badge-new">NEW</span>
            )}
            {discountPercent > 0 && (
              <span className="badge-sale">-{discountPercent}%</span>
            )}
          </div>

          {/* Quick Add Button */}
          <button
            onClick={handleAddToCart}
            className="absolute bottom-3 right-3 bg-white text-gray-900 p-3 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-primary-600 hover:text-white transform translate-y-2 group-hover:translate-y-0"
          >
            <ShoppingCart size={20} />
          </button>
        </div>

        {/* Product Info */}
        <div className="p-4 flex flex-col flex-grow">
          {/* Category */}
          <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
            {product.category}
          </p>

          {/* Product Name */}
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                />
              ))}
            </div>
            <span className="text-xs text-gray-600">
              ({product.reviewCount})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2 mt-auto">
            <span className="text-xl font-bold text-primary-600">
              €{product.price.toFixed(2)}
            </span>
            {product.comparePrice && (
              <span className="text-sm text-gray-500 line-through">
                €{product.comparePrice.toFixed(2)}
              </span>
            )}
          </div>

          {/* Stock Status */}
          {product.stock < 10 && product.stock > 0 && (
            <p className="text-xs text-accent-600 mt-2">
              Only {product.stock} left in stock!
            </p>
          )}
          {product.stock === 0 && (
            <p className="text-xs text-gray-500 mt-2">
              Out of stock
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
