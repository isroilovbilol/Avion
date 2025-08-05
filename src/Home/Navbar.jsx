import React, { useState } from 'react'
import { Search, User, ShoppingCart, Check, Truck, CreditCard, Leaf, X, Minus, Plus } from 'lucide-react'

const Navbar = () => {
    const [showMore1, setShowMore1] = useState(false);
    const [showMore2, setShowMore2] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [mobileMenu, setMobileMenu] = useState(false);

    const products = [
        { id: 1, name: "The Dandy chair", price: "£250", image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=400&fit=crop", bgColor: "bg-slate-400", description: "A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.", features: ["Premium material", "Handmade upholstery", "Quality timeless classic"], dimensions: { height: "110cm", width: "75cm", depth: "50cm" } },
        { id: 2, name: "Modern Sofa", price: "£155", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop", bgColor: "bg-stone-300", description: "A contemporary sofa with clean lines and premium fabric upholstery. Perfect for modern living spaces.", features: ["Premium fabric", "Comfortable seating", "Modern design"], dimensions: { height: "85cm", width: "200cm", depth: "90cm" } },
        { id: 3, name: "Wooden Table", price: "£125", image: "https://images.unsplash.com/photo-1549497538-303791108f95?w=400&h=400&fit=crop", bgColor: "bg-gray-600", description: "An elegant wooden dining table crafted from solid oak. Traditional craftsmanship with modern functionality.", features: ["Solid oak wood", "Handcrafted", "Durable finish"], dimensions: { height: "75cm", width: "160cm", depth: "90cm" } },
        { id: 4, name: "Office Desk", price: "£399", image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=400&h=400&fit=crop", bgColor: "bg-cyan-400", description: "A stylish office desk with built-in storage and cable management. Perfect for home offices.", features: ["Built-in storage", "Cable management", "Contemporary design"], dimensions: { height: "75cm", width: "140cm", depth: "70cm" } },
        { id: 5, name: "Bookshelf", price: "£89", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop", bgColor: "bg-amber-200", description: "A modern bookshelf with multiple compartments for books and decorative items.", features: ["Multiple shelves", "Sturdy construction", "Modern aesthetic"], dimensions: { height: "180cm", width: "80cm", depth: "30cm" } },
        { id: 6, name: "Armchair", price: "£65", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&h=400&fit=crop", bgColor: "bg-green-300", description: "A comfortable armchair perfect for reading corners and living rooms.", features: ["Ergonomic design", "Premium upholstery", "Comfortable seating"], dimensions: { height: "95cm", width: "75cm", depth: "80cm" } },
        { id: 7, name: "Coffee Table", price: "£35", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop", bgColor: "bg-rose-200", description: "A stylish coffee table with a unique design. Perfect for living rooms and lounge areas.", features: ["Unique design", "Quality materials", "Stylish appearance"], dimensions: { height: "45cm", width: "120cm", depth: "60cm" } },
        { id: 8, name: "Wardrobe", price: "£180", image: "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=400&h=400&fit=crop", bgColor: "bg-purple-300", description: "A spacious wardrobe with multiple compartments and hanging space.", features: ["Multiple compartments", "Elegant design", "Spacious storage"], dimensions: { height: "200cm", width: "150cm", depth: "60cm" } }
    ];

    const products2 = [
        { id: 9, name: "Dining Chair", price: "£25", image: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=400&h=400&fit=crop", bgColor: "bg-rose-50", description: "A beautifully designed dining chair with modern aesthetics.", features: ["Modern design", "Comfortable seating", "Durable construction"], dimensions: { height: "85cm", width: "45cm", depth: "50cm" } },
        { id: 10, name: "Side Table", price: "£85", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop", bgColor: "bg-indigo-50", description: "An elegant side table perfect for living rooms and bedrooms.", features: ["Compact design", "Elegant finish", "Versatile use"], dimensions: { height: "55cm", width: "50cm", depth: "40cm" } },
        { id: 11, name: "Cabinet", price: "£55", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop", bgColor: "bg-yellow-50", description: "A stylish cabinet perfect for storage and display.", features: ["Multiple compartments", "Stylish design", "Quality construction"], dimensions: { height: "120cm", width: "80cm", depth: "40cm" } },
        { id: 12, name: "Ottoman", price: "£75", image: "https://images.unsplash.com/photo-1549497538-303791108f95?w=400&h=400&fit=crop", bgColor: "bg-teal-50", description: "A comfortable ottoman with premium upholstery.", features: ["Premium upholstery", "Multi-functional", "Comfortable design"], dimensions: { height: "40cm", width: "60cm", depth: "40cm" } }
    ];

    const navItems = ["Home", "Products", "About", "Contact", "Blog", "Cart"];
    const features = [
        { icon: Truck, title: "Next day as standard", desc: "Order before 3pm and get your order the next day as standard" },
        { icon: Check, title: "Made by true artisans", desc: "Handmade crafted goods made with real passion and craftmanship" },
        { icon: CreditCard, title: "Unbeatable prices", desc: "For our materials and quality you won't find better prices anywhere" },
        { icon: Leaf, title: "Recycled packaging", desc: "We use 100% recycled packaging to ensure our footprint is manageable" }
    ];

    const ProductCard = ({ product, onClick }) => (
        <div className="group cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl" onClick={() => onClick(product)}>
            <div className={`${product.bgColor} aspect-square rounded-lg overflow-hidden mb-4 relative flex items-center justify-center`}>
                <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
            </div>
            <div className="space-y-2">
                <h3 className="text-base sm:text-lg font-normal text-gray-900 group-hover:text-gray-600 transition-colors duration-200">{product.name}</h3>
                <p className="text-base sm:text-lg font-medium text-gray-900">{product.price}</p>
            </div>
        </div>
    );

    return (
        <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            {mobileMenu && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
                    <div className="bg-white w-64 h-full p-6">
                        <div className="flex justify-between items-center mb-8">
                            <h2 className="text-xl font-mono">Menu</h2>
                            <button onClick={() => setMobileMenu(false)}><X size={24} /></button>
                        </div>
                        <ul className="space-y-4">
                            {navItems.map((item, i) => <li key={i}><a href="#" className="text-gray-700 hover:text-gray-900">{item}</a></li>)}
                        </ul>
                    </div>
                </div>
            )}

            <div className='flex justify-between items-center py-4'>
                <Search className="cursor-pointer" size={20} />
                <button className='font-mono text-xl sm:text-2xl'>Avion</button>
                <div className='flex gap-4 items-center'>
                    <ShoppingCart size={20} className="cursor-pointer" />
                    <User size={20} className="cursor-pointer" />
                    <button className="md:hidden" onClick={() => setMobileMenu(true)}>
                        <div className="space-y-1">
                            <div className="w-5 h-0.5 bg-gray-600"></div>
                            <div className="w-5 h-0.5 bg-gray-600"></div>
                            <div className="w-5 h-0.5 bg-gray-600"></div>
                        </div>
                    </button>
                </div>
            </div>
            <div className='w-full h-[1px] bg-gray-200 my-4'></div>

            <ul className='hidden md:flex justify-around items-center text-gray-500 text-sm lg:text-base font-sans mb-10'>
                {navItems.map((item, i) => <li key={i}><a href="#" className="hover:text-gray-900">{item}</a></li>)}
            </ul>

            <div className='w-full flex flex-col md:flex-row mb-12 sm:mb-20'>
                <div className='w-full md:w-3/4 bg-blue-950 p-6 sm:p-8 lg:p-16 text-white'>
                    <div className='space-y-4 sm:space-y-6'>
                        <h1 className='text-2xl sm:text-3xl lg:text-4xl font-mono leading-tight'>The furniture brand for the future, with timeless designs</h1>
                        <button className='bg-gray-800 bg-opacity-40 px-6 py-3 text-sm sm:text-base hover:bg-opacity-60 transition-all'>View collection</button>
                        <div className='pt-4 sm:pt-8 space-y-2'>
                            <p className="text-sm sm:text-base opacity-90">A new era in eco friendly furniture with Avelon, the French luxury retail brand</p>
                            <p className="text-sm sm:text-base opacity-90">with nice fonts, tasteful colors and a beautiful way to display things digitally</p>
                            <p className="text-sm sm:text-base opacity-90">using modern web technologies.</p>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/4">
                    <img className='w-full h-64 md:h-full object-cover' src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop" alt="Chair" />
                </div>
            </div>

            <section className='text-center mb-12 sm:mb-20'>
                <h3 className='text-lg sm:text-xl font-medium text-gray-600 mb-6 sm:mb-10'>What makes our brand different</h3>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-gray-600'>
                    {features.map((feature, i) => (
                        <div key={i} className='flex flex-col items-start text-left space-y-2 sm:space-y-3'>
                            <feature.icon size={24} />
                            <h4 className="font-medium text-sm sm:text-base">{feature.title}</h4>
                            <p className="text-sm opacity-80">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className='mb-16 sm:mb-20'>
                <h3 className='text-2xl sm:text-3xl font-light text-gray-900 mb-8 sm:mb-12 text-center'>New Furniture</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
                    {(showMore1 ? products : products.slice(0, 4)).map((product) => (
                        <ProductCard key={product.id} product={product} onClick={setSelectedProduct} />
                    ))}
                </div>
                <div className="text-center">
                    <button onClick={() => setShowMore1(!showMore1)} className="bg-gray-900 text-white px-6 sm:px-8 py-3 font-medium hover:bg-gray-800 transition-colors text-sm sm:text-base">
                        {showMore1 ? 'Show Less' : 'View Collection'}
                    </button>
                </div>
            </section>

            <section className='mb-16 sm:mb-20'>
                <h3 className='text-2xl sm:text-3xl font-light text-slate-800 mb-8 sm:mb-12 text-center'>Classic Furniture</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
                    {(showMore2 ? products2.concat(products.slice(4)) : products2).map((product) => (
                        <ProductCard key={product.id} product={product} onClick={setSelectedProduct} />
                    ))}
                </div>
                <div className="text-center">
                    <button onClick={() => setShowMore2(!showMore2)} className="bg-slate-800 text-white px-6 sm:px-10 py-3 sm:py-4 font-light hover:bg-slate-700 transition-all transform hover:scale-105 text-sm sm:text-base">
                        {showMore2 ? 'Hide Details' : 'Explore Classics'}
                    </button>
                </div>
            </section>

            {selectedProduct && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="flex flex-col lg:flex-row">
                            <div className="lg:w-1/2 bg-gray-100 p-4 sm:p-8">
                                <div className="aspect-square bg-white rounded-lg overflow-hidden">
                                    <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-full object-cover" />
                                </div>
                            </div>
                            <div className="lg:w-1/2 p-4 sm:p-8">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <h2 className="text-2xl sm:text-3xl font-light text-gray-900 mb-4">{selectedProduct.name}</h2>
                                        <p className="text-xl sm:text-2xl font-medium text-gray-900">{selectedProduct.price}</p>
                                    </div>
                                    <button onClick={() => setSelectedProduct(null)} className="text-gray-400 hover:text-gray-600 text-xl sm:text-2xl"><X /></button>
                                </div>
                                <div className="mb-6">
                                    <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-3">Description</h3>
                                    <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base">{selectedProduct.description}</p>
                                    <ul className="space-y-2">
                                        {selectedProduct.features.map((feature, i) => (
                                            <li key={i} className="flex items-center text-gray-600 text-sm sm:text-base">
                                                <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>{feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mb-8">
                                    <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-4">Dimensions</h3>
                                    <div className="grid grid-cols-3 gap-4">
                                        {Object.entries(selectedProduct.dimensions).map(([key, value]) => (
                                            <div key={key}>
                                                <p className="text-xs sm:text-sm text-gray-500 capitalize">{key}</p>
                                                <p className="font-medium text-sm sm:text-base">{value}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="border-t pt-6">
                                    <div className="flex items-center justify-between mb-6">
                                        <span className="text-base sm:text-lg font-medium text-gray-900">Amount:</span>
                                        <div className="flex items-center space-x-4">
                                            <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-8 h-8 flex items-center justify-center border border-gray-300 text-gray-600 hover:bg-gray-100"><Minus size={16} /></button>
                                            <span className="w-8 text-center font-medium">{quantity}</span>
                                            <button onClick={() => setQuantity(quantity + 1)} className="w-8 h-8 flex items-center justify-center border border-gray-300 text-gray-600 hover:bg-gray-100"><Plus size={16} /></button>
                                        </div>
                                    </div>
                                    <button className="w-full bg-gray-900 text-white py-3 sm:py-4 font-medium hover:bg-gray-800 transition-colors text-sm sm:text-base">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <section className="bg-gray-100 py-12 sm:py-16 mb-12 sm:mb-20 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-2xl sm:text-3xl font-light text-gray-900 mb-4">Join the club and get the benefits</h2>
                    <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</p>
                    <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-2 sm:gap-0">
                        <input type="email" placeholder="your@email.com" className="flex-1 px-4 py-3 border border-gray-300 sm:rounded-l-md sm:rounded-r-none rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 text-sm sm:text-base" />
                        <button className="bg-gray-900 text-white px-6 sm:px-8 py-3 sm:rounded-r-md sm:rounded-l-none rounded-md hover:bg-gray-800 transition-colors text-sm sm:text-base">Sign up</button>
                    </div>
                </div>
            </section>

            <section className="mb-12 sm:mb-20">
                <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12">
                    <div className="lg:w-1/2 space-y-4 sm:space-y-6">
                        <h2 className="text-2xl sm:text-3xl font-light text-gray-900">From a studio in London to a global brand with over 400 outlets</h2>
                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.</p>
                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique became the hotbed for the London interior design community.</p>
                        <button className="bg-gray-100 text-gray-900 px-6 sm:px-8 py-3 hover:bg-gray-200 transition-colors font-medium text-sm sm:text-base">Get in touch</button>
                    </div>
                    <div className="lg:w-1/2">
                        <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=500&fit=crop" alt="Modern living room" className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg" />
                    </div>
                </div>
            </section>

            <footer className="bg-gray-900 text-white py-8 sm:py-12 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 mb-8">
                    <div>
                        <h3 className="font-medium mb-3 sm:mb-4 text-sm sm:text-base">Menu</h3>
                        <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-300">
                            {["New arrivals", "Best sellers", "Recently viewed", "Popular this week", "All products"].map((item, i) => (
                                <li key={i}><a href="#" className="hover:text-white">{item}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-medium mb-3 sm:mb-4 text-sm sm:text-base">Categories</h3>
                        <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-300">
                            {["Crockery", "Furniture", "Homeware", "Plant pots", "Chairs"].map((item, i) => (
                                <li key={i}><a href="#" className="hover:text-white">{item}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-medium mb-3 sm:mb-4 text-sm sm:text-base">Our company</h3>
                        <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-300">
                            {["About us", "Vacancies", "Contact us", "Privacy", "Returns policy"].map((item, i) => (
                                <li key={i}><a href="#" className="hover:text-white">{item}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div className="sm:col-span-2">
                        <h3 className="font-medium mb-3 sm:mb-4 text-sm sm:text-base">Join our mailing list</h3>
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
                            <input type="email" placeholder="your@email.com" className="flex-1 px-3 sm:px-4 py-2 bg-gray-800 border border-gray-700 sm:rounded-l-md sm:rounded-r-none rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 text-white text-sm" />
                            <button className="bg-white text-gray-900 px-4 sm:px-6 py-2 sm:rounded-r-md sm:rounded-l-none rounded-md hover:bg-gray-100 transition-colors font-medium text-sm">Sign up</button>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-xs sm:text-sm text-gray-400">Copyright 2022 Avion LTD</p>
                    <div className="flex space-x-4">
                        {[1,2,3,4,5].map(i => (
                            <a key={i} href="#" className="text-gray-400 hover:text-white">
                                <div className="w-4 h-4 sm:w-5 sm:h-5 bg-gray-600 rounded"></div>
                            </a>
                        ))}
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Navbar