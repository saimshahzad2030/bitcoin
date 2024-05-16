import React from "react";

const Services = () => {
  return (
    <div className="w-full h-auto bg-indigo-700">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 w-full postsenOne py-12">
          <div className="flex flex-col items-center w-full md:w-10/12">
            <img
              src="/assets/services/security.svg"
              alt="security"
              className="w-16 h-auto"
            />
            <h1 className="text-2xl text-white text-center font-bold mt-2">
              SECURITY
            </h1>
            <p className="text-md text-indigo-300 text-center mt-4 md:px-0 px-8">
              Our app employs cutting-edge encryption and security protocols,
              ensuring your assets are safeguarded at all times. Rest easy
              knowing that your investments are protected against any potential
              threats.
            </p>
          </div>
          <div className="flex flex-col items-center w-full md:w-10/12 md:mt-0 mt-12">
            <img
              src="/assets/services/currency.svg"
              alt="security"
              className="w-16 h-auto"
            />
            <h1 className="text-2xl text-white text-center font-bold mt-2 px-8">
              CURRENCY
            </h1>
            <p className="text-md text-indigo-300 text-center mt-4 md:px-0 px-8">
              With real-time currency updates, our app keeps you informed about
              the latest exchange rates and fluctuations across various
              cryptocurrencies. Stay ahead of the curve and make informed
              decisions with up-to-date currency information.
            </p>
          </div>
          <div className="flex flex-col items-center w-full md:w-10/12 md:mt-0 mt-12">
            <img
              src="/assets/services/graph.svg"
              alt="security"
              className="w-16 h-auto"
            />
            <h1 className="text-2xl text-white text-center font-bold mt-2 px-8">
              GRAPHICAL VIEW
            </h1>
            <p className="text-md text-indigo-300 text-center mt-4 md:px-0 px-8">
              Visualize market trends and patterns effortlessly with our
              intuitive graph view feature. Analyze historical data and track
              price movements over time, empowering you to make data-driven
              investment decisions with confidence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
