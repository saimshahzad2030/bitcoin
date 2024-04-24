"use client";
import React, { useState, useEffect } from "react";

import { WELCOMEPAGE } from "../../../constants/constants";
const CustomCarousel = ({ styling }) => {
  const [textIndex, setTextIndex] = useState(0);
  const text = [
    "Welcome to Crypto Exit Calculator",
    "Calculate exit price at your own",
    "Invest at the right time",
  ];

  const images = WELCOMEPAGE;
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div
      className={`relative p-[4px] bg-white h-auto ${styling} flex flex-row items-center`}
    >
      <img
        src={images[textIndex]}
        alt="Your Image"
        className={`w-full h-full opacity-70 `}
      />

      <div className="absolute bottom-[20%] left-[5%] w-auto p-4 bg-gray-500 opacity-80">
        <p className=" font-bold text-lg md:text-md lg:text-2xl xl:text-4xl text-white opacity-100">
          {text[textIndex]}
        </p>
      </div>
    </div>
  );
};

export default CustomCarousel;
