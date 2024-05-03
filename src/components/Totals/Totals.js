import React from "react";
import {
  weightedAveragePrice,
  totalRevenue,
  totalProfit,
} from "../../../utils/utils";
import { connect } from "react-redux";
const Totals = ({
  initialInvestments,
  customSellPriceValue,
  averagePurchasePrice,
  levelArray,
  numberOfTokens,
  levelRange,
}) => {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full h-auto mt-16 mb-16"
      style={{ display: initialInvestments ? "" : "none" }}
    >
      <div className="flex flex-col items-center justify-evenly h-auto w-12/12">
        <div className="mt-4 w-11/12 flex-col items-center  py-4 border border-black rounded-xl">
          <h2 className="text-center text-xl">
            Weighted Average: ${" "}
            {weightedAveragePrice(
              levelRange,
              levelArray,
              numberOfTokens
            ).toFixed(2)}
          </h2>
        </div>
      </div>
      <div className="flex flex-col items-center justify-evenly h-auto w-12/12">
        <div className="mt-4  w-11/12 flex-col items-center  py-4 border border-black rounded-xl">
          <h2 className="text-center text-xl">
            Expected ROI: $ {customSellPriceValue - averagePurchasePrice}
          </h2>
        </div>
      </div>
      <div className="flex flex-col items-center justify-evenly h-auto w-12/12">
        <div className="mt-4 w-11/12 flex-col items-center  py-4 border border-black rounded-xl">
          <h2 className="text-center text-xl">
            Total Revenue: ${" "}
            {totalRevenue(levelRange, levelArray, numberOfTokens).toFixed(2)}
          </h2>
        </div>
      </div>
      <div className="flex flex-col items-center justify-evenly h-auto w-12/12">
        <div className="mt-4  w-11/12 flex-col items-center  py-4 border border-black rounded-xl">
          <h2 className="text-center text-xl">
            Total Profit: ${" "}
            {totalRevenue(levelRange, levelArray, numberOfTokens).toFixed(2) -
              averagePurchasePrice * numberOfTokens}
          </h2>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    levelArray: state.array,
  };
};

export default connect(mapStateToProps)(Totals);
