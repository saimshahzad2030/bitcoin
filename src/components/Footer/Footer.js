"use client";
import React, { useState } from "react";

const Footer = () => {
  const [query, setQuery] = useState("");
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-8 postsenOne bg-indigo-700">
      <div className="w-full flex flex-col items-center justify-end">
        <img
          className="w-16 h-auto"
          src="/assets/landing/crypto-logo.png"
          alt="logo"
        />
        <p className="text-gray-300 text-sm text-center mt-4 px-12">
          Crypto is a platform that allows you to invest in cryptocurrencies
          with ease.
        </p>
        <div className="flex flex-row items-center w-6/12 justify-evenly mt-4">
          <img
            src="/assets/footer/facebook.svg"
            alt="facebook"
            className="w-8 h-auto cursor-pointer"
          />
          <img
            src="/assets/footer/twitter.svg"
            alt="twitter"
            className="w-8 h-auto cursor-pointer"
          />
          <img
            src="/assets/footer/instagram.svg"
            alt="instagram"
            className="w-8 h-auto cursor-pointer"
          />
        </div>
      </div>
      <div className="w-full flex  flex-col items-center md:mt-0 mt-12">
        <h3 className="text-white text-center mt-4 text-2xl ">About Us</h3>
        <p className="text-gray-300 text-sm text-center mt-4 px-12">
          We are initiated towards the better future of trading and betterment
          of user experience towards safe trading
        </p>
      </div>
      <div className="w-full flex  flex-col items-center lg:mt-0 md:mt-8 mt-12">
        <h3 className="text-white text-center mt-4 text-2xl">Contact Us</h3>
        <p className="text-gray-300 text-sm text-center mt-4">
          +92 313-9183-132
        </p>
        <p className="text-gray-300 text-sm text-center mt-2">
          +92 313-9183-132
        </p>
      </div>
      <div className="w-full flex  flex-col items-center lg:mt-0 md:mt-8 mt-12">
        <h3 className="text-white text-center mt-4 text-2xl">Query</h3>
        <input
          type="text"
          id="username"
          value={query}
          placeholder="Type any query..."
          onChange={(e) => setQuery(e.target.value)}
          className="appearance-none border rounded-lg p-4 w-7/12 py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-4 "
        />
        <button className="p-4 rounded-lg  text-indigo-700 bg-white mt-4 ">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Footer;
