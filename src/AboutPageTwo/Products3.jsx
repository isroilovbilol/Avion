import React from 'react';

const features = [
  {
    icon: '🚚',
    title: 'Next day as standard',
    text: 'Order before 3pm and get your order the next day as standard',
  },
  {
    icon: '🛠️',
    title: 'Made by true artisans',
    text: 'Handmade crafted goods made with real passion and craftsmanship',
  },
  {
    icon: '💳',
    title: 'Unbeatable prices',
    text: 'For our materials and quality you won’t find better prices anywhere',
  },
  {
    icon: '♻️',
    title: 'Recycled packaging',
    text: 'We use 100% recycled to ensure our footprint is more manageable',
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-white text-center">
      <h2 className="text-xl md:text-2xl font-medium mb-12">
        What makes our brand different
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-md text-left flex flex-col gap-2 shadow-sm hover:shadow-md transition"
          >
            <div className="text-2xl">{feature.icon}</div>
            <h3 className="font-semibold text-gray-900">{feature.title}</h3>
            <p className="text-gray-700 text-sm">{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;

