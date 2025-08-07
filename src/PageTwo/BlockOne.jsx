import React from "react";
import BgImg from "../assets/imagesPageTwo/background.jpg";

const BlockOne = () => {
  return (
    <div>
      <div
        className="h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${BgImg})` }}
      >
        <div className="container max-w-[90%] mx-auto flex justify-end pt-40">
          <div className="bg-white p-6 sm:p-8 md:p-10 max-w-md sm:max-w-lg md:max-w-xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl leading-snug">
              Luxury homeware for people <br /> who love timeless design quality
            </h1>
            <p className="mt-6 sm:mt-8 mb-12 text-gray-400 text-sm sm:text-base">
              Shop the new Spring 2022 collection today
            </p>
            <button className="py-2 px-4 sm:py-3 sm:px-5 bg-gray-100 hover:scale-105 duration-300 transition-transform">
              View collection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockOne;
