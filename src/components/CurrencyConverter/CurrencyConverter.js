"use client";

import React from "react";
import { TOPCURRENCIES, DOLLAR } from "../../../constants/constants";
import style from "./CurrencyConverter.module.css";
const CurrencyConverter = () => {
  const [currencyIndex, setCurrencyIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrencyIndex((prevIndex) => (prevIndex + 1) % TOPCURRENCIES.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const currency = TOPCURRENCIES[currencyIndex];
  return (
    <div data-aos="fade-up" className="w-full bg-white ">
      <div className="container mx-auto">
        <div className=" relative flex flex-col items-center w-full h-auto  py-12 postsenOne">
          <div className="flex flex-col items-center w-auto">
            <h1 className="text-4xl text-black font-bold mt-8 text-center">
              Currency Converter
            </h1>
            <div className="bg-indigo-700 h-[2px] w-9/12 sm:w-full mt-2 rounded-full"></div>
          </div>
          <div className="flex flex-col md:flex-row items-center md:justify-center w-full mt-12">
            <div
              className="md:mb-0 mb-8 md:mr-8 flex flex-col items-center p-8 bg-indigo-700 w-8/12 sm:w-9/12  md:w-5/12 lg:w-3/12 rounded-xl"
              data-aos="fade-right"
            >
              <div className="relative flex flex-row items-center justify-start w-full">
                <img
                  src={currency.image}
                  alt={currency.name}
                  className="w-12 h-auto"
                />
                <div className="flex flex-col items-start ml-8">
                  <p className="text-white">{currency.symbol}</p>
                  <p className="text-white">{currency.name}</p>
                </div>
                <div
                  className={`absolute top-0 right-0 w-full h-full bg-indigo-700 z-10 ${style.expandHorizontal}`}
                ></div>
              </div>
              <div className="flex flex-col items-center w-full mt-8">
                <div className="flex flex-row items-center justify-between w-full">
                  <p className="text-white">1</p>
                  <div className="h-auto w-auto relative">
                    <p className="text-white">{currency.symbol}</p>{" "}
                    <div
                      className={`absolute top-0 right-0 w-full h-full bg-indigo-700 z-10 ${style.expandHorizontalFast}`}
                    ></div>
                  </div>
                </div>
                <div className="w-full h-[2px] bg-red-700"></div>
              </div>
            </div>
            <div
              className="flex flex-col items-center justify-center"
              data-aos="flip-left"
            >
              <img
                className="w-16 bg-white rounded-full h-auto"
                src="/assets/CurrencyConverter/swap-icon.svg"
                alt="sadsa"
              />
            </div>
            <div
              className={` md:mt-0 mt-8 md:ml-8 flex flex-col items-center p-8 bg-indigo-700 w-8/12 sm:w-9/12 md:w-5/12 lg:w-3/12 rounded-xl `}
              data-aos="fade-left"
            >
              {" "}
              <div className="relative flex flex-row items-center justify-start w-full">
                <img
                  src={DOLLAR.image}
                  alt={DOLLAR.name}
                  className="w-12 h-auto"
                />
                <div className="flex flex-col items-start ml-8">
                  <p className="text-white">{DOLLAR.symbol}</p>
                  <p className="text-white">{DOLLAR.name}</p>
                </div>

                <div
                  className={`absolute top-0 right-0 w-full h-full bg-indigo-700 z-a0 ${style.expandHorizontal}`}
                ></div>
              </div>
              <div className="flex flex-col items-center w-full mt-8">
                <div className="flex flex-row items-center justify-between w-full">
                  <div className="relative w-auto h-auto">
                    <p className="text-white">{currency.price}</p>
                    <div
                      className={`absolute top-0 right-0 w-full h-full bg-indigo-700 z-10 ${style.expandHorizontalFast}`}
                    ></div>
                  </div>
                  <p className="text-white">{DOLLAR.symbol}</p>
                </div>
                <div className="w-full h-[2px] bg-red-700"></div>
              </div>
            </div>
          </div>
          <div className="bg-white h-[1px] w-full rounded-full mt-12"></div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;
