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
      className={`relative p-[4px] h-auto ${styling} flex flex-row items-center justify-center`}
    >
      <img
        src={images[textIndex]}
        alt="Your Image"
        className={`w-10/12 h-auto opacity-70 rounded-2xl`}
      />

      <div
        className={`absolute bottom-[20%] md:bottom-[35%] lg:bottom-[20%] left-[5%] w-auto p-4 bg-indigo-500 opacity-80`}
      >
        <p className=" font-bold text-sm sm:text-lg md:text-md lg:text-xl xl:text-2xl 2xl:text-3xl text-white opacity-100">
          {text[textIndex]}
        </p>
      </div>
    </div>
  );
};

export default CustomCarousel;
