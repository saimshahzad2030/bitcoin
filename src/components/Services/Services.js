import React from "react";

const Services = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 w-full postsenOne py-12">
      <div className="flex flex-col items-center w-full md:w-10/12">
        <img
          src="/assets/services/security.svg"
          alt="security"
          className="w-16 h-auto"
        />
        <h1 className="text-xl text-center font-bold mt-2">Security</h1>
        <p className="text-xs text-center mt-4 md:px-0 px-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, consectetur
          adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, consectetur adipiscing elit.
        </p>
      </div>
      <div className="flex flex-col items-center w-full md:w-10/12 md:mt-0 mt-12">
        <img
          src="/assets/services/currency.svg"
          alt="security"
          className="w-16 h-auto"
        />
        <h1 className="text-xl text-center font-bold mt-2 px-8">Currencies</h1>
        <p className="text-xs text-center mt-4 md:px-0 px-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, consectetur
          adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, consectetur adipiscing elit.
        </p>
      </div>
      <div className="flex flex-col items-center w-full md:w-10/12 md:mt-0 mt-12">
        <img
          src="/assets/services/graph.svg"
          alt="security"
          className="w-16 h-auto"
        />
        <h1 className="text-xl text-center font-bold mt-2 px-8">
          Graphical view
        </h1>
        <p className="text-xs text-center mt-4 md:px-0 px-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, consectetur
          adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, consectetur adipiscing elit.
        </p>
      </div>
    </div>
  );
};

export default Services;
