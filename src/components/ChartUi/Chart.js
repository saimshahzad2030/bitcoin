"use client";
import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import style from "./Chart.module.css";
import Table from "../Table/Table";
import ReturnOnInvestment from "../ReturnOnInvestment/ReturnOnInvestment";
import ChartComponent from "../Chart/Chart";
import Totals from "../Totals/Totals";
import CoinSelection from "../CoinSelection/CoinSelection";
import LevelDifferenceSlider from "../LevelDifferenceSlider/LevelDifferenceSlider";
import UnChangeAblePrices from "../UnChangeAblePrices/UnChangeAblePrices";
import ChangeablePrice from "../ChangeablePrice/ChangeablePrice";
const ChartUi = () => {

  const [changedLevel, setChangedLevel] = useState(['unaltered',
    'unaltered',
    'unaltered',
    'unaltered',
    'unaltered',
    'unaltered',
    'unaltered',
    'unaltered',
    'unaltered',
    'unaltered',
    'unaltered',
    'unaltered',
    'unaltered',
    'unaltered',
    'unaltered',
    'unaltered',
    'unaltered',
    'unaltered',
    'unaltered',
    'unaltered',
    'unaltered',
    'unaltered',
    'unaltered',
    'unaltered',
    'unaltered',
    'unaltered',
    'unaltered',
    'unaltered',
    'unaltered',
    'unaltered',
  ])
  const [levelArray, setLevelArray] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState(undefined);
  const [customSellPriceValue, setCustomSellPriceValue] = useState(null);
  const [averagePurchasePrice, setAveragePurchasePrice] = useState(0);
  const [numberOfTokens, setNumberOfTokens] = useState(0);
  const [levelRange, setLevelRange] = useState(10);
  const [levels, setLevels] = useState(5);
  const [initialInvestments, setInitialInvestments] = useState(false);
  const [customSellPriceLevel, setCustomSellPriceLevel] = useState(0);
  const [isCoinSelected, setIsCoinSelected] = useState(false)
  const [initalInvestmentOutLevel, setInitalInvestmentOutLevel] = useState(0)
  const handleChangeSlider = (event) => {
    setLevelRange(parseInt(event.target.value));
  };

  const coins = [
    {
      name: "Coin1",
      maxValue: 200,
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "August",
        "October",
        "November",
        "December",
      ],
      data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40],
    },
    {
      name: "Coin2",
      maxValue: 120,
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "August",
        "October",
        "November",
        "December",
      ],
      data: [15, 59, 4, 82, 30, 67, 69, 21, 15, 70, 14, 13, 55],
    },
    {
      name: "Coin3",
      maxValue: 350,
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "August",
        "October",
        "November",
        "December",
      ],
      data: [165, 59, 40, 181, 56, 45, 40, 65, 59, 29, 14, 156, 55],
    },
  ];
  coins.forEach((coin) => {
    coin.data = Array.from({ length: coin.months.length }, () =>
      Math.floor(Math.random() * coin.maxValue)
    );
    coin.data.push(coin.maxValue * 1.5);
  });
 
  const handleLevelsChange = (event) => {
    setLevels(parseInt(event.target.value));
  };
  const handleInitialInvestment = () => {
    setInitialInvestments(!initialInvestments);
  };
  // const chartRef = useRef(null);

  const levelNames = Array.from(
    { length: levels },
    (_, index) => `# ${index + 1}`
  ); 
  return (
    <div>
      <ChartComponent  
      selectedCoin={selectedCoin} 
      levelRange={levelRange} 
      levels={levels}
      customSellPriceValue={customSellPriceValue}
      averagePurchasePrice={averagePurchasePrice}
      changedLevel={changedLevel}
      isCoinSelected={isCoinSelected}
      levelNames = {levelNames}
      setLevelArray ={setLevelArray}
      />
      <CoinSelection
      setCustomSellPriceValue={setCustomSellPriceValue}
      setSelectedCoin={setSelectedCoin}
      setIsCoinSelected={setIsCoinSelected}
      isCoinSelected={isCoinSelected}
      coins={coins}
      />
      {isCoinSelected && <>

        <LevelDifferenceSlider 
        levelRange={levelRange}
        selectedCoin={selectedCoin}
        setLevelRange={setLevelRange}
        /> 
          <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 w-full h-auto py-16">
          <UnChangeAblePrices 
          color={'orange-900'}
          text={'Price Prediction: $'}
          value = {selectedCoin.maxValue}
          />
          <UnChangeAblePrices 
          color={'orange-500'}
          text={'Max Ladder Sell Price:  $'}
          value = {selectedCoin.maxValue - selectedCoin.maxValue*25/100}
          />
          <ChangeablePrice
          heading={'Custom Price Sell Level'}
          setUpdate={setCustomSellPriceValue}
          color={'pink-500'}
          inputVal={!customSellPriceValue
            ? selectedCoin.maxValue - selectedCoin.maxValue * (25 / 100)
            : customSellPriceValue}
            customMargin={'mt-8 sm:mt-8 lg:mt-0'}
            justifyPosition={'justify-end'}
          />
          

<ChangeablePrice
          heading={'Average Purchase Price'}
          setUpdate={setAveragePurchasePrice}
          inputVal={averagePurchasePrice}
          color = {'green-500'}
          customMargin={'mt-8 sm:mt-8 '}
          justifyPosition={''}
          />
          
          <ChangeablePrice
          heading={'No. of Tokens Hold'}
          setUpdate={setNumberOfTokens}
          inputVal={numberOfTokens}
          customMargin={'mt-8 sm:mt-8 '}
          justifyPosition={''}
          />
         
          <UnChangeAblePrices  
          text={' Initial Investment: $ '}
          value = {numberOfTokens * averagePurchasePrice}
          />

          <ChangeablePrice
          heading={'Number of Levels'}
          setUpdate={setNumberOfTokens}
          inputVal={numberOfTokens}
          customMargin={'mt-8 sm:mt-8 '}
          justifyPosition={''}
          selection={<select
            value={levels}
            onChange={handleLevelsChange}
            className="w-full bg-white border border-gray-300 rounded-md py-2 px-4 focus:outline-none "
          >
            {[...Array(30).keys()].map((level) => (
              <option key={level + 1} value={level + 1}>
                {level + 1}
              </option>
            ))}
          </select>}
          />
           <ChangeablePrice
          heading={'Initial Investment?'}
          setUpdate={setNumberOfTokens}
          inputVal={initialInvestments}
          customMargin={'mt-8 sm:mt-8 '}
          justifyPosition={''}
          selection={ <select
            value={initialInvestments}
            onChange={handleInitialInvestment}
            className="w-full bg-white border border-gray-300 rounded-md py-2 px-4 focus:outline-none "
          >
            <option value={true}>yes</option>
            <option value={false}>no</option>
          </select>}
          /> 
           
        </div> </>}
      <div
        className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 w-full h-auto   mt-4"
        style={{ display: initialInvestments ? "" : "none" }}
      >
        <ReturnOnInvestment 
        initalInvestmentOutLevel={initalInvestmentOutLevel} 
        setInitalInvestmentOutLevel={setInitalInvestmentOutLevel} 
        numberOfTokens={numberOfTokens}
        averagePurchasePrice={averagePurchasePrice}/>
      </div>
      <div
        className={`overflow-x-auto mt-4 `}
        style={{ display: !initialInvestments ? "none" : "" }}
      >
        <Table
          initialInvestments={initialInvestments}
          levelArray={levelArray}
          setLevelArray={setLevelArray}
          numberOfTokens={numberOfTokens}
          setCustomSellPriceLevel={setCustomSellPriceLevel}
          averagePurchasePrice={averagePurchasePrice}
          setChangedLevel={setChangedLevel}
          changedLevel={changedLevel} />
      </div>
      <Totals 
      initialInvestments={initialInvestments} 
      customSellPriceValue={customSellPriceLevel} 
      averagePurchasePrice={averagePurchasePrice}
      levelArray={levelArray}
      numberOfTokens={numberOfTokens}/>
    </div>
  );
};

export default ChartUi;