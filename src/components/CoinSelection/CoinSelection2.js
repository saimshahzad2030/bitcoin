"use client";
import React, { useState } from "react";
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
  setLoading,
}) => {
  const dispatch = useDispatch();
  const handleSelectCoin = (event) => {
    const selected = coins.find((c) => c.name == event.target.value);
    fetchSingleCoinHistory(
      setSelectedCoin,
      setSelectedCoinHistory,
      setLoading,
      selected.uuid,
      selected.name
    );
    console.log("selectedCoin", selectedCoin.name);
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
            <option key={index} value={coin.name}>
              {coin.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CoinSelectiontwo;
