import React from "react";

const InvestmentPlan = () => {
  return (
    <div className="w-full h-auto flex flex-col md:flex-row items-center justify-evenly py-12">
      <img
        className="w-full md:w-6/12 h-auto   bg-no-repeat bg-center bg-cover"
        src="/assets/invesmentplans/chart.jpg"
        alt="investment plans"
      />
      <div className="flex flex-col items-center w-full md:w-5/12">
        <h2 className="text-4xl font-bold text-black postsenOne text-center md:px-0 px-8">
          INVESTMENT PLAN
        </h2>
        <p className="mt-8 text-sm text-gray-500 postsenOne text-center  md:px-0 px-8">
          Get started with our product to get the health proof investment plan
          based on your calculations
        </p>
        <button className="mt-8 px-4 py-3 bg-indigo-700 border border-indigo-700 text-center rounded-md text-white  hover:bg-white hover:text-indigo-700 transition-colors duration-500">
          START TRADING NOW
        </button>
      </div>
    </div>
  );
};

export default InvestmentPlan;
