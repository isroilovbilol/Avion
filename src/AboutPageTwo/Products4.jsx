import React from 'react';

const NewsletterSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-xl md:text-2xl font-medium text-gray-900 mb-4">
          Join the club and get the benefits
        </h2>
        <p className="text-sm text-gray-600 mb-8">
          Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more
        </p>

        <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="your@email.com"
            className="w-full sm:w-72 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-gray-900 text-white text-sm rounded hover:bg-gray-800 transition"
          >
            Sign up
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
