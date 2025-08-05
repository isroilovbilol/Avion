import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Avion</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              21 New York Street<br />
              New York City<br />
              United States of America<br />
              432 34
            </p>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-medium mb-4">Social links</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h4 className="font-medium mb-4">Menu</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">New arrivals</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Best sellers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Recently viewed</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Popular this week</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">All products</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-medium mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Crockery</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Furniture</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Homeware</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Plant pots</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Chairs</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="font-medium mb-2">Join the club and get the benefits</h4>
              <p className="text-gray-300 text-sm">
                Sign up for our newsletter and receive exclusive offers on new<br />
                ranges, sales, pop up stores and more
              </p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="bg-gray-800 border border-gray-700 rounded-l-md px-4 py-2 text-sm flex-1 md:w-64 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <button className="bg-white text-gray-900 px-6 py-2 rounded-r-md text-sm font-medium hover:bg-gray-100 transition-colors">
                Sign up
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>Copyright 2022 Avion LTD</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;