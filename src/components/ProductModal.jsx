import React from 'react';
import { X, ShoppingCart, Heart, Plus, Minus } from 'lucide-react';

const ProductModal = ({ product, onClose, onAddToCart, onToggleWishlist, isInWishlist }) => {
  const [quantity, setQuantity] = React.useState(1);

  if (!product) return null;

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    onClose();
  };

  const handleToggleWishlist = () => {
    onToggleWishlist(product);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900">{product.name}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
          {/* Product Image */}
          <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-3xl font-bold text-gray-900">£{product.price}</span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">£{product.originalPrice}</span>
                )}
              </div>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Product Features */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Features:</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Premium quality materials</li>
                <li>• Handcrafted with attention to detail</li>
                <li>• Sustainable and eco-friendly</li>
                <li>• Perfect for modern interiors</li>
                <li>• Easy to clean and maintain</li>
              </ul>
            </div>

            {/* Dimensions */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Dimensions:</h4>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Height</span>
                  <p className="font-medium">110cm</p>
                </div>
                <div>
                  <span className="text-gray-500">Width</span>
                  <p className="font-medium">75cm</p>
                </div>
                <div>
                  <span className="text-gray-500">Depth</span>
                  <p className="font-medium">50cm</p>
                </div>
              </div>
            </div>

            {/* Quantity and Actions */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-gray-700">Quantity:</span>
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 hover:bg-gray-100 transition-colors"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="px-4 py-2 border-x border-gray-300 min-w-[3rem] text-center">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 hover:bg-gray-100 transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button 
                  onClick={handleAddToCart}
                  className="flex items-center justify-center space-x-2 bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700 transition-colors flex-1"
                >
                  <ShoppingCart size={20} />
                  <span>Add to Cart</span>
                </button>
                <button 
                  onClick={handleToggleWishlist}
                  className={`flex items-center justify-center space-x-2 px-6 py-3 rounded-md transition-colors ${
                    isInWishlist
                      ? 'bg-red-500 text-white hover:bg-red-600'
                      : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Heart size={20} />
                  <span>{isInWishlist ? 'Saved' : 'Save'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;