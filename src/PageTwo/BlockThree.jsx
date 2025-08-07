import React from "react";
import Img1 from "../assets/imagesPageTwo/img1.png";
import Img2 from "../assets/imagesPageTwo/img2.png";
import Img3 from "../assets/imagesPageTwo/img3.png";
import Img4 from "../assets/imagesPageTwo/img4.png";

const BlockThree = () => {
  return (
    <div>
      <div className="container max-w-[90%] mx-auto">
        <div className="flex flex-col sm:flex-row sm:justify-between gap-8 sm:gap-4">
          <div className="flex flex-col items-center sm:max-w-[18rem]">
            <img
              src={Img1}
              alt="The Dandy chair"
              className="w-full object-cover"
            />
            <h3 className="mt-2 text-center text-lg sm:text-xl">
              The Dandy chair
            </h3>
            <span className="text-center text-gray-700">£250</span>
          </div>
          <div className="flex flex-col items-center sm:max-w-[18rem]">
            <img
              src={Img2}
              alt="Rustic Vase Set"
              className="w-full object-cover"
            />
            <h3 className="mt-2 text-center text-lg sm:text-xl">
              Rustic Vase Set
            </h3>
            <span className="text-center text-gray-700">£155</span>
          </div>
          <div className="flex flex-col items-center sm:max-w-[18rem]">
            <img
              src={Img3}
              alt="The Silky Vase"
              className="w-full object-cover"
            />
            <h3 className="mt-2 text-center text-lg sm:text-xl">
              The Silky Vase
            </h3>
            <span className="text-center text-gray-700">£125</span>
          </div>
          <div className="flex flex-col items-center sm:max-w-[18rem]">
            <img
              src={Img4}
              alt="The Lucy Lamp"
              className="w-full object-cover"
            />
            <h3 className="mt-2 text-center text-lg sm:text-xl">
              The Lucy Lamp
            </h3>
            <span className="text-center text-gray-700">£399</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center my-20">
        <button className="py-3 px-5 bg-gray-100 hover:scale-105 duration-300 transition-transform">
          View collection
        </button>
      </div>
    </div>
  );
};

export default BlockThree;
