import React from "react";
import Carousel from "./Carousel";
const Banner = () => {
  return (
    <div className="">
      <div className="bg-blue-100 flex flex-col justify-around h-96 bg-banner bg-center bg-cover">
        <div className="flex flex-col items-center">
          <h2 className="text-[36px] sm:text-[60px] sm:leading-[90px] font-bold dark:text-white mb-2">
            Crypto Currency
          </h2>
          <p className="text-gray-500 text-xs sm:text-base">
            Get all the Info regarding your favorite Crypto Currency
          </p>
        </div>
        <Carousel />
      </div>
    </div>
  );
};

export default Banner;
