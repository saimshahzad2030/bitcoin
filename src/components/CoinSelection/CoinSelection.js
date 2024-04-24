import React from "react";

const CoinSelection = ({
  selectedCoin,
  setCustomSellPriceValue,
  setIsCoinSelected,
  setSelectedCoin,
  isCoinSelected,
  coins,
}) => {
  const handleSelectCoin = (event) => {
    const matchedCoin = coins.find((coin) => coin.name === event.target.value);
    setSelectedCoin(matchedCoin);
    setCustomSellPriceValue(
      matchedCoin.maxValue - matchedCoin.maxValue * (25 / 100)
    );
    setIsCoinSelected(true);
  };
  return (
    <div className="flex flex-col items-center w-full mt-20">
      <div className="w-8/12 sm:w-4/12 flex felx-col items-center">
        <select
          value={!isCoinSelected ? "Select coin" : selectedCoin.name}
          onChange={handleSelectCoin}
          className={` block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:border-indigo-500 ${
            !isCoinSelected ? "my-20" : ""
          }`}
        >
          <option value={"select a coin"}>select a coin</option>

          {coins.map((coin, index) => (
            <option key={index} value={coin.name}>
              {coin.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CoinSelection;
