import React from "react";
import { fetchSingleCoinDetails } from "../../../utils/functional-utils/coins-utils";

const CoinSelectiontwo = ({
  selectedCoin,
  setCustomSellPriceValue,
  setIsCoinSelected,
  setSelectedCoin,
  isCoinSelected,
  coins,
}) => {
  const handleSelectCoin = (event) => {
    fetchSingleCoinDetails(setSelectedCoin, event.target.value);

    setIsCoinSelected(true);
  };
  return (
    <div className="flex flex-col items-center w-full mt-20">
      <div className="w-8/12 sm:w-4/12 flex felx-col items-center">
        <select
          value={selectedCoin.name}
          onChange={handleSelectCoin}
          className={` block appearance-none text-white w-full bg-black border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:border-indigo-500 `}
        >
          <option value={"select a coin"}>select a coin</option>

          {coins.map((coin, index) => (
            <option key={index} value={coin}>
              {coin}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CoinSelectiontwo;
