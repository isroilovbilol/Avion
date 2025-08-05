import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X, Heart } from 'lucide-react';

const Header = ({ cartItemsCount, onCartClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-900">Avion</h1>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-teal-600 transition-colors">Plant pots</a>
            <a href="#" className="text-gray-700 hover:text-teal-600 transition-colors">Ceramics</a>
            <a href="#" className="text-gray-700 hover:text-teal-600 transition-colors">Tables</a>
            <a href="#" className="text-gray-700 hover:text-teal-600 transition-colors">Chairs</a>
            <a href="#" className="text-gray-700 hover:text-teal-600 transition-colors">Crockery</a>
            <a href="#" className="text-gray-700 hover:text-teal-600 transition-colors">Tableware</a>
            <a href="#" className="text-gray-700 hover:text-teal-600 transition-colors">Cutlery</a>
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-700 hover:text-teal-600 transition-colors">
              <Search size={20} />
            </button>
            <button className="p-2 text-gray-700 hover:text-teal-600 transition-colors">
              <Heart size={20} />
            </button>
            <button 
              onClick={onCartClick}
              className="relative p-2 text-gray-700 hover:text-teal-600 transition-colors"
            >
              <ShoppingCart size={20} />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-teal-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                  {cartItemsCount}
                </span>
              )}
            </button>
            <button className="p-2 text-gray-700 hover:text-teal-600 transition-colors">
              <User size={20} />
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-teal-600">Plant pots</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-teal-600">Ceramics</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-teal-600">Tables</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-teal-600">Chairs</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-teal-600">Crockery</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-teal-600">Tableware</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-teal-600">Cutlery</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;