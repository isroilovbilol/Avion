import React from "react";
import Img from "../assets/imagesPageTwo/BlockImg.png";

const BlockFour = () => {
  return (
    <div className="container max-w-[90%] mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 my-20">
        {/* Left content block */}
        <div className="bg-[#2A254B] text-white p-8 md:p-12 flex flex-col justify-between h-[28rem] md:h-[30rem] flex-1 md:max-w-lg rounded">
          <div>
            <h2 className="text-3xl sm:text-4xl leading-tight mb-6">
              It started with a small <br /> idea
            </h2>
            <p className="text-lg sm:text-xl font-light">
              A global brand with local beginnings, our story began in a small
              studio in South London in early 2014
            </p>
          </div>
          <button className="mt-8 py-3 px-5 bg-[#F9F9F926] rounded hover:scale-105 transition-transform duration-300 self-start">
            View collection
          </button>
        </div>

        {/* Right image */}
        <div className="flex-1 max-w-full  ">
          <img
            src={Img}
            alt="Story image"
            className="w-full h-120 object-cover rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default BlockFour;
