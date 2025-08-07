import React, { useState } from "react";
import { Check } from "lucide-react";

const BlockFive = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter signup logic here
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  const benefits = ["Exclusive offers", "Free events", "Large discounts"];

  return (
    <section className="relative py-16 px-6 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-400 via-orange-500 to-amber-600"></div>

      {/* Background Pattern/Texture */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10"></div>

      <div className="relative max-w-4xl mx-auto text-center text-white">
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
          Join the club and get the benefits
        </h2>

        {/* Subheading */}
        <p className="text-lg md:text-xl mb-10 opacity-90 max-w-2xl mx-auto leading-relaxed">
          Sign up for our newsletter and receive exclusive offers on
          <br />
          new ranges, sales, pop up stores and more
        </p>

        {/* Benefits List */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="flex-shrink-0 w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                <Check className="w-3 h-3 text-white" strokeWidth={3} />
              </div>
              <span className="text-sm md:text-base font-medium">
                {benefit}
              </span>
            </div>
          ))}
        </div>

        {/* Email Signup Form */}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 px-4 py-3 rounded-lg bg-white/95 backdrop-blur-sm text-gray-800 placeholder-gray-500 border-0 focus:outline-none focus:ring-2 focus:ring-white/50 transition"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-slate-800 hover:bg-slate-900 text-white font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-slate-700"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BlockFive;
