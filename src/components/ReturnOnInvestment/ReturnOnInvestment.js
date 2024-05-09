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
        <div className="flex flex-col items-start justify-between w-10/12 ">
          <input
            type="text"
            value={initalInvestmentOutLevel ? initalInvestmentOutLevel : ""}
            onChange={(e) => {
              const newValue = e.target.value.replace(/\D/g, "");
              setInitalInvestmentOutLevel(newValue);
            }}
            placeholder="I.I.O Price "
            pattern="\d*"
            className="w-full  bg-white border border-black rounded-lg py-4 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <UnChangeAblePrices
        text={"ROI: $ "}
        value={numberOfTokens * averagePurchasePrice}
      />
    </>
  );
};

export default ReturnOnInvestment;
