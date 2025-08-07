import React from 'react';
import Page2 from '../assets/AboutPageTwoImg/page2.svg'
const AboutSection = () => {
  return (
    <section className="flex flex-col lg:flex-row w-full min-h-screen bg-white pt-[30px]">
      {/* Левая часть (фото-заглушка) */}
      <div className="w-full lg:w-1/2 h-96 lg:h-auto flex items-center justify-center">
       <img className='w-[720px]' src={Page2} alt="" />
       <div className="w-[80%] h-[80%]"></div>
      </div>

      <div className="w-full lg:w-1/2 px-6 md:px-12 py-12 flex flex-col justify-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
          Our service isn’t just personal, it’s actually hyper personally exquisite
        </h2>
        <p className="text-gray-700 mb-4">
          When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.
        </p>
        <p className="text-gray-700 mb-8">
          Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique became the hotbed for the London interior design community.
        </p>
        <button className="w-fit px-6 py-2 border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition">
          Get in touch
        </button>
      </div>
    </section>
  );
};

export default AboutSection;
