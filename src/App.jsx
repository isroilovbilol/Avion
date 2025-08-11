

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductGrid from './components/ProductGrid';
import ProductModal from './components/ProductModal';
import CartModal from './components/CartModal';
import { products } from './data/products';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [priceRange, setPriceRange] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cartItems');
    const savedWishlist = localStorage.getItem('wishlistItems');
    
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
    if (savedWishlist) {
      setWishlistItems(JSON.parse(savedWishlist));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const categories = [
    { id: 'all', name: 'All products', count: products.length },
    { id: 'chairs', name: 'Chairs', count: products.filter(p => p.category === 'chairs').length },
    { id: 'lighting', name: 'Lighting', count: products.filter(p => p.category === 'lighting').length },
    { id: 'furniture', name: 'Furniture', count: products.filter(p => p.category === 'furniture').length },
    { id: 'decor', name: 'Home Decor', count: products.filter(p => p.category === 'decor').length },
    { id: 'accessories', name: 'Accessories', count: products.filter(p => p.category === 'accessories').length }
  ];

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
    
    if (priceRange.length === 0) return categoryMatch;
    
    return categoryMatch && priceRange.some(range => {
      switch(range) {
        case 'under100': return product.price < 100;
        case '100-300': return product.price >= 100 && product.price <= 300;
        case '300-500': return product.price >= 300 && product.price <= 500;
        case 'over500': return product.price > 500;
        default: return true;
      }
    });
  });

  const productsPerPage = 12;
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handlePriceRangeChange = (range) => {
    setPriceRange(prev => 
      prev.includes(range) 
        ? prev.filter(r => r !== range)
        : [...prev, range]
    );
    setCurrentPage(1);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const addToCart = (product, quantity = 1) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };


  const updateCartQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const toggleWishlist = (product) => {
    setWishlistItems(prev => {
      const isInWishlist = prev.some(item => item.id === product.id);
      if (isInWishlist) {
        return prev.filter(item => item.id !== product.id);
      }
      return [...prev, product];
    });
  };

  const isInWishlist = (productId) => {
    return wishlistItems.some(item => item.id === productId);
  };

  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        cartItemsCount={cartItemsCount}
        onCartClick={() => setIsCartOpen(true)}
      />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Categories</h2>
              <ul className="space-y-2">
                {categories.map(category => (
                  <li key={category.id}>
                    <button
                      onClick={() => handleCategoryChange(category.id)}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-teal-100 text-teal-900 font-medium'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {category.name} ({category.count})
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price Filter */}
            <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Price Range</h3>
              <div className="space-y-2">
                {[
                  { id: 'under100', label: 'Under £100' },
                  { id: '100-300', label: '£100 - £300' },
                  { id: '300-500', label: '£300 - £500' },
                  { id: 'over500', label: 'Over £500' }
                ].map(range => (
                  <label key={range.id} className="flex items-center">
                    <input 
                      type="checkbox" 
                      className="rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                      checked={priceRange.includes(range.id)}
                      onChange={() => handlePriceRangeChange(range.id)}
                    />
                    <span className="ml-2 text-sm text-gray-600">{range.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Wishlist Summary */}
            <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Wishlist</h3>
              <p className="text-sm text-gray-600">
                {wishlistItems.length} items saved
              </p>
            </div>
          </aside>


          {/* Main Content */}
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-4 sm:mb-0">
                {selectedCategory === 'all' ? 'All Products' : categories.find(c => c.id === selectedCategory)?.name}
                <span className="text-sm font-normal text-gray-500 ml-2">
                  ({filteredProducts.length} products)
                </span>
              </h1>
              <div className="flex items-center space-x-4">
                <select className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500">
                  <option>Sort by: Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest First</option>
                </select>
              </div>
            </div>

            <ProductGrid 
              products={currentProducts} 
              onProductClick={handleProductClick}
              onAddToCart={addToCart}
              onToggleWishlist={toggleWishlist}
              isInWishlist={isInWishlist}
            />

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-8">
                <nav className="flex items-center space-x-2">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    Previous
                  </button>
                  
                  {[...Array(totalPages)].map((_, index) => {
                    const page = index + 1;
                    return (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                          currentPage === page
                            ? 'bg-teal-600 text-white shadow-md'
                            : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        {page}
                      </button>
                    );
                  })}
                  
                  <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    Next
                  </button>
                </nav>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />

      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={handleCloseModal}
          onAddToCart={addToCart}
          onToggleWishlist={toggleWishlist}
          isInWishlist={isInWishlist(selectedProduct.id)}
        />
      )}

      {isCartOpen && (
        <CartModal
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cartItems={cartItems}
          onUpdateQuantity={updateCartQuantity}
          onRemoveItem={removeFromCart}
          onClearCart={clearCart}
          cartTotal={cartTotal}
        />
      )}
    </div>
  );
}

export default App;
