"use client";
import React from "react";

import Slider from "react-slick";
const CoinsSection = () => {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5  w-full flex-wrap h-auto  postsenOne my-12">
      <div className="  flex flex-row items-center justify-center p-12 h-auto w-full">
        <img
          className="w-20 h-auto"
          src="/assets/coins/bitcoin.svg"
          alt="bitcoin"
        />
        <div className="flex flex-col items-start ">
          <h1 className="font-bold">USD/mon</h1>
          <p>22.00</p>
        </div>
      </div>
      <div className="  flex flex-row items-center justify-center p-12 h-auto w-full">
        <img
          className="w-20 h-auto"
          src="/assets/coins/ethereum.svg"
          alt="ethereum"
        />
        <div className="flex flex-col items-start ">
          <h1 className="font-bold">USD/mon</h1>
          <p>22.00</p>
        </div>
      </div>
      <div className=" flex flex-row items-center justify-center p-12 h-auto w-full">
        <img
          className="w-20 h-auto"
          src="/assets/coins/bitcoin.svg"
          alt="bitcoin"
        />

        <div className="flex flex-col items-start ">
          <h1 className="font-bold">USD/mon</h1>
          <p>22.00</p>
        </div>
      </div>
      <div className="  flex flex-row items-center justify-center p-12 h-auto w-full">
        <img
          className="w-20 h-auto"
          src="/assets/coins/ethereum.svg"
          alt="ethereum"
        />

        <div className="flex flex-col items-start ">
          <h1 className="font-bold">USD/mon</h1>
          <p>22.00</p>
        </div>
      </div>
      <div className="  flex flex-row items-center justify-center p-12 h-auto w-full">
        <img
          className="w-20 h-auto"
          src="/assets/coins/bitcoin.svg"
          alt="bitcoin"
        />

        <div className="flex flex-col items-start ">
          <h1 className="font-bold">USD/mon</h1>
          <p>22.00</p>
        </div>
      </div>
    </div>
  );
};

export default CoinsSection;
