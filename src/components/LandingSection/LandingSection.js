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
          <div className="flex flex-row items-center   w-full sm:w-9/12 mt-8">
            <button className="bg-white text-indigo-700 px-4 py-3 rounded-md border border-white hover:bg-indigo-700 hover:text-white transition-colors duration-500">
              GET STARTED
            </button>
            <button className="ml-4 border border-white text-white  rounded-md  px-4 py-3 hover:bg-white hover:text-indigo-700 transition-colors duration-500">
              VIEW MARKET
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
