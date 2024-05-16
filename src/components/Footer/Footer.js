"use client";
import Link from "next/link";
import React, { useState } from "react";

const Footer = () => {
  const [query, setQuery] = useState("");
  return (
    <div className={` bg-indigo-700 sm:py-8 md:py-12 h-auto w-full `}>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-8 postsenOne bg-indigo-700 overflow-hidden">
        <div
          className="w-full flex flex-col items-center justify-end sm:px-0 px-8"
          data-aos="fade-right"
        >
          <img
            className="w-16 h-auto"
            src="/assets/landing/crypto-logo.png"
            alt="logo"
          />
          <p className="text-gray-300 text-md text-center mt-4 sm:px-12">
            Maximize your crypto investments with our intuitive calculator,
            guiding you to optimal entry and exit points. Gain valuable trading
            insights in just a few clicks, ensuring you&apos;re always ahead of
            the market trends. Invest smarter, trade better, and watch your
            profits soar with our crypto calculator.
          </p>
        </div>
        <div
          className="w-full flex  flex-col items-start md:items-center lg:mt-0 md:mt-8 mt-12 sm:px-0 px-8"
          data-aos="zoom-out"
        >
          <h3 className="text-white text-center mt-4 text-3xl sm:text-2xl px-4 md:px-0">
            GET IN TOUCH
          </h3>
          <div className="flex flex-col items-start text-indigo-200 px-4 md:px-0">
            {" "}
            <p className="text-md sm:text-sm text-center mt-4 ">
              PHONE: +92 313-9183-132
            </p>
            <p className="text-md sm:text-sm text-center mt-2 ">
              FAX: +3213xxxxxxx
            </p>
            <p className=" text-md sm:text-sm text-center mt-2 ">
              EMAIL: nouser@gmail.com
            </p>
          </div>
        </div>
        <div
          className=" flex flex-col items-start lg:mt-0 md:mt-8 mt-12 sm:px-0 px-8"
          data-aos="fade-left"
        >
          <h3 className="text-white text-center mt-4 text-2xl px-4">
            Connect With us
          </h3>

          <div className="flex flex-col  items-start  mt-4 text-indigo-200  px-4">
            <Link
              href={"/contact-us"}
              className="hover:text-white transition-colors duration-300"
            >
              Contact Us
            </Link>
            <Link
              href={"/privacy-policy"}
              className="hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </Link>
          </div>
          <div className="flex flex-row items-start mt-4  px-4">
            <img
              src="/assets/footer/facebook.svg"
              alt="facebook"
              className="w-8 h-auto cursor-pointer hover:scale-125 transition-transform duration-500 mr-4"
            />
            <img
              src="/assets/footer/twitter.svg"
              alt="twitter"
              className="w-8 h-auto cursor-pointer hover:scale-125 transition-transform duration-500 mr-4"
            />
            <img
              src="/assets/footer/instagram.svg"
              alt="instagram"
              className="w-8 h-auto cursor-pointer hover:scale-125 transition-transform duration-500 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
