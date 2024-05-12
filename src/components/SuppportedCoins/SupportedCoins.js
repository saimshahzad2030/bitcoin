import React from "react";

const SupportedCoins = () => {
  return (
    <div className="w-full h-auto flex flex-col-reverse md:flex-row items-center justify-evenly py-12">
      <div className="flex flex-col items-center md:items-start w-full md:w-5/12 md:mt-0 mt-12">
        <h2 className="text-4xl font-bold text-black postsenOne md:text-start text-center md:px-0 px-8">
          OVER 90+ SUPPORTED COINS
        </h2>
        <h2 className="mt-8 text-sm text-gray-500 postsenOne md:text-start text-center  md:px-0 px-8">
          Discover a diverse range of over 90 cryptocurrencies supported on our
          platform. From popular options like Bitcoin and Ethereum to emerging
          coins, we&apos;ve got you covered. Explore the world of digital assets with
          ease and confidence.
        </h2>
      </div>
      <img
        className=" w-11/12 md:w-6/12 h-auto   bg-no-repeat bg-center bg-cover "
        src="/assets/coins/crypto-coins.png"
        alt="crypto-logo"
      />
    </div>
  );
};

export default SupportedCoins;
