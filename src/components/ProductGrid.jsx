import React from 'react';
import { ShoppingCart, Heart } from 'lucide-react';

const ProductGrid = ({ products, onProductClick, onAddToCart, onToggleWishlist, isInWishlist }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="group bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300"
        >
          <div
            className="aspect-square overflow-hidden rounded-t-lg bg-gray-100 cursor-pointer relative"
            onClick={() => onProductClick(product)}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleWishlist(product);
              }}
              className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-200 ${
                isInWishlist(product.id)
                  ? 'bg-red-500 text-white shadow-lg'
                  : 'bg-white/80 text-gray-600 hover:bg-white hover:text-red-500'
              }`}
            >
              <Heart size={16} fill={isInWishlist(product.id) ? 'currentColor' : 'none'} />
            </button>
          </div>
          <div className="p-4">
            <h3
              className="text-lg font-medium text-gray-900 hover:text-teal-600 transition-colors cursor-pointer"
              onClick={() => onProductClick(product)}
            >
              {product.name}
            </h3>
            <p className="text-gray-600 text-sm mt-1">{product.description}</p>
            <div className="flex justify-between items-center mt-3 mb-3">
              <div className="flex items-center space-x-2">
                <span className="text-xl font-semibold text-gray-900">£{product.price}</span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-500 line-through">£{product.originalPrice}</span>
                )}
              </div>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onAddToCart(product);
              }}
              className="w-full bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 transition-colors flex items-center justify-center space-x-2 font-medium"
            >
              <ShoppingCart size={16} />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
