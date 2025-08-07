import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { CiCreditCard1 } from "react-icons/ci";
import { PiPlant } from "react-icons/pi";

const BlockTwo = () => {
  return (
    <div className="my-20">
      <div>
        <h2 className="text-3xl text-center my-10">
          What makes our brand different
        </h2>
        <div className="container max-w-[90%] mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-6">
            <div className="bg-gray-100 p-5 flex-1 max-w-full md:max-w-[18rem]">
              <CiDeliveryTruck size={39} />
              <h3 className="text-2xl mt-3">Next day as standard</h3>
              <p className="text-lg text-gray-700 mt-2">
                Order before 3 pm and get your order the next day as standard
              </p>
            </div>
            <div className="bg-gray-100 p-5 flex-1 max-w-full md:max-w-[18rem]">
              <IoIosCheckmarkCircleOutline size={39} />
              <h3 className="text-2xl mt-3">Made by true artisans</h3>
              <p className="text-lg text-gray-700 mt-2">
                Handmade crafted goods made with real passion and craftsmanship
              </p>
            </div>
            <div className="bg-gray-100 p-5 flex-1 max-w-full md:max-w-[18rem]">
              <CiCreditCard1 size={39} />
              <h3 className="text-2xl mt-3">Unbeatable prices</h3>
              <p className="text-lg text-gray-700 mt-2">
                For our materials and quality you won’t find better prices
                anywhere
              </p>
            </div>
            <div className="bg-gray-100 p-5 flex-1 max-w-full md:max-w-[18rem]">
              <PiPlant size={39} />
              <h3 className="text-2xl mt-3">Recycled packaging</h3>
              <p className="text-lg text-gray-700 mt-2">
                We use 100% recycled to ensure our footprint is more manageable
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockTwo;
