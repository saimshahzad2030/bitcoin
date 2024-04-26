import React from "react";
import UnChangeAblePrices from "../UnChangeAblePrices/UnChangeAblePrices";

const ReturnOnInvestment = ({
  initalInvestmentOutLevel,
  setInitalInvestmentOutLevel,
  numberOfTokens,
  averagePurchasePrice,
}) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-auto w-full">
        <div className="flex flex-col items-start justify-between w-10/12 py-16">
          <h2 className=" text-lg w-full mb-4">I.I.O Price</h2>
          <input
            type="text"
            value={initalInvestmentOutLevel}
            onChange={(e) => {
              const newValue = e.target.value.replace(/\D/g, "");
              setInitalInvestmentOutLevel(newValue);
            }}
            pattern="\d*"
            className="w-full  bg-white border border-black rounded-md py-5 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <UnChangeAblePrices
        text={"Return On Investment: $ "}
        value={numberOfTokens * averagePurchasePrice}
      />
    </>
  );
};

export default ReturnOnInvestment;
