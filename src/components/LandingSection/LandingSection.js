import React from "react";

const LandingSection = () => {
  return (
    <div className="postsenOne h-[100vh] w-full bg-indigo-700 absolute z-20 top-0 flex flex-row items-center justify-start">
      <div className="h-[100vh] w-full relative  flex flex-row items-center justify-start">
        <div className="flex flex-col items-start w-9/12 sm:w-8/12 lg:w-6/12 xl:w-6/12 2xl:w-6/12 px-4 z-40">
          <h2 className="text-4xl font-bold text-white">
            Digital Currency is going to be most powerful thing
          </h2>
          <h2 className="mt-8 text-sm text-white">
            Lorem Epsum adasd casdc lohgfphk wqen qwenwqen qweqw nqwewnq
          </h2>
          <div className="flex flex-row items-center justify-between  w-full sm:w-9/12 mt-8">
            <button className="bg-green-600 text-white p-4  rounded-xl hover:scale-110 transition-transform duration-300">
              Get Started
            </button>
            <button className="border border-white text-white  p-4  hover:scale-110 transition-transform duration-300">
              View Market
            </button>
          </div>
        </div>
        <img
          className="w-[45%] opacity-40 h-auto absolute  z-30   right-0  bg-no-repeat bg-center bg-cover"
          src="/assets/landing/crypto-logo.png"
          alt="crypto-logo"
        />
      </div>
    </div>
  );
};

export default LandingSection;
