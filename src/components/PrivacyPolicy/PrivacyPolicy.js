import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="w-full h-auto postsenOne">
      <div className="flex flex-col items-center container mx-auto pt-20 pb-20">
        <h1 className="text-3xl font-bold my-16">PrivacyPolicy</h1>
        <div className="w-full flex flex-col items-start px-20  ">
          <p className="text-lg">
            This exit calculator helps you determine the optimal time to exit
            your cryptocurrency investments based on various factors such as
            selected coins and holding duration. By using this calculator, you
            can make informed decisions to maximize your profits while
            minimizing risks.
          </p>
          <h2 className={`text-xl mt-8`}>1. Selected Coins</h2>
          <p className="text-lg">
            Choose the cryptocurrencies you are currently holding in your
            portfolio. Enter the details of each coin, including the amount held
            and the purchase price.
          </p>
          <h2 className={`text-xl mt-8`}>2. Holding Duration</h2>
          <p className="text-lg">
            Specify the duration for which you plan to hold your investments.
            This duration will be used to calculate potential exit points based
            on historical price data and market trends.
          </p>
          <h2 className={`text-xl mt-8`}>3. Calculations</h2>
          <p className="text-lg">
            The calculator will analyze the selected coins and holding duration
            to provide you with potential exit points. It will consider factors
            such as price fluctuations, market volatility, and historical
            performance to estimate optimal exit times.
          </p>
          <h2 className={`text-xl mt-8`}>4. Security</h2>
          <p className="text-lg">
            Your data is securely processed and stored using industry-standard
            encryption techniques. We prioritize the privacy and security of
            your information and ensure compliance with data protection
            regulations.
          </p>
          <h2 className={`text-xl mt-8`}>5. Recommendations</h2>
          <p className="text-lg">
            Based on the calculations, the calculator will provide
            recommendations on potential exit points for your cryptocurrency
            investments. These recommendations are for informational purposes
            only and should not be considered financial advice.
          </p>
          <h2 className={`text-xl mt-8`}>6. Disclaimer</h2>
          <p className="text-lg">
            The exit calculator is intended for educational and informational
            purposes only. It does not guarantee specific investment outcomes
            and should not be used as the sole basis for financial decisions.
            Always conduct thorough research and consult with a financial
            advisor before making investment decisions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
