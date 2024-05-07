import React from "react";
import {
  fetchSingleCoinDetails,
  fetchSingleCoinHistory,
} from "../../../utils/functional-utils/coins-utils";
import { useDispatch } from "react-redux";
import { resetArray } from "@/redux/reducers/coin-reducer";
import { resetChangedLevel } from "@/redux/reducers/student-slice";
const CoinSelectiontwo = ({
  selectedCoin,
  setIsCoinSelected,
  setSelectedCoin,
  coins,
  setCustomSellPriceValue,
  setAveragePurchasePrice,
  setNumberOfTokens,
  setLevelRange,
  setInitialInvestments,
  setInitalInvestmentOutLevel,
  setSelectedCoinHistory,
}) => {
  const dispatch = useDispatch();
  const handleSelectCoin = (event) => {
    fetchSingleCoinHistory(
      setSelectedCoin,
      setSelectedCoinHistory,
      JSON.parse(event.target.value).uuid,
      JSON.parse(event.target.value).name
    );
    console.log("event.target.value", JSON.parse(event.target.value));
    // console.log("event.target", event.target);
    // console.log("event.target.value.name", event.target.value[2].name);
    dispatch(resetArray());
    dispatch(resetChangedLevel());
    setIsCoinSelected(true);
    setCustomSellPriceValue("");
    setAveragePurchasePrice("");
    setNumberOfTokens("");
    setLevelRange(100);
    setInitialInvestments(false);
    setInitalInvestmentOutLevel("");
  };
  return (
    <div className="flex flex-col items-center w-full mt-20 mb-8">
      <div className="w-8/12 sm:w-4/12 flex felx-col items-center">
        <select
          value={selectedCoin.name}
          onChange={handleSelectCoin}
          className={` block appearance-none text-white w-full bg-black border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:border-indigo-500 `}
        >
          <option className={``} value={"select a coin"}>
            select a coin
          </option>

          {coins.map((coin, index) => (
            <option
              key={index}
              value={JSON.stringify({ uuid: coin.uuid, name: coin.name })}
            >
              {coin.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CoinSelectiontwo;
