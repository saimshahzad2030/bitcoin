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
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const ChartUi = () => {
  const router = useRouter();
  const [changedLevel, setChangedLevel] = useState([
    "unaltered",
    "unaltered",
    "unaltered",
    "unaltered",
    "unaltered",
    "unaltered",
    "unaltered",
    "unaltered",
    "unaltered",
    "unaltered",
    "unaltered",
    "unaltered",
    "unaltered",
    "unaltered",
    "unaltered",
    "unaltered",
    "unaltered",
    "unaltered",
    "unaltered",
    "unaltered",
    "unaltered",
    "unaltered",
    "unaltered",
    "unaltered",
    "unaltered",
    "unaltered",
    "unaltered",
    "unaltered",
    "unaltered",
    "unaltered",
  ]);
  const [levelArray, setLevelArray] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState(undefined);
  const [customSellPriceValue, setCustomSellPriceValue] = useState(null);
  const [averagePurchasePrice, setAveragePurchasePrice] = useState(0);
  const [numberOfTokens, setNumberOfTokens] = useState(0);
  const [levelRange, setLevelRange] = useState(10);
  const [levels, setLevels] = useState(5);
  const [initialInvestments, setInitialInvestments] = useState(false);
  const [customSellPriceLevel, setCustomSellPriceLevel] = useState(0);
  const [isCoinSelected, setIsCoinSelected] = useState(false);
  const [initalInvestmentOutLevel, setInitalInvestmentOutLevel] = useState(0);

  const coins = [
    {
      name: "Coin1",
      maxValue: 100,
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
      data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40, 100],
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
      data: [15, 59, 4, 82, 30, 67, 69, 21, 15, 70, 14, 13, 55, 120],
    },
    {
      name: "Coin3",
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
      data: [165, 59, 40, 181, 56, 45, 40, 65, 59, 29, 14, 156, 55, 200],
    },
  ];
  // coins.forEach((coin) => {
  //   coin.data = Array.from({ length: coin.months.length }, () =>
  //     Math.floor(Math.random() * coin.maxValue)
  //   );
  //   coin.data.push(coin.maxValue * 1.5);
  // });

  const handleLevelsChange = (event) => {
    setLevels(parseInt(event.target.value));
  };
  const handleInitialInvestment = () => {
    setInitialInvestments(!initialInvestments);
  };

  const levelNames = Array.from(
    { length: levels },
    (_, index) => `# ${index + 1}`
  );
  const name = Cookies.get("name");
  const [avatarClicked, setAvatarClicked] = useState(false);
  return (
    <div className="container mx-auto relative">
      {avatarClicked && (
        <div
          id="avatarDiv"
          className={`absolute right-0 w-[150px] h-[150px] pb-8 pt-4 z-5 `}
        >
          <div
            className="mt-16 flex flex-col items-center  w-full h-full rounded-lg"
            onMouseLeave={() => setAvatarClicked(false)}
          >
            <div className="w-full h-auto bg-slate-100 flex flex-col items-start pt-4  rounded-lg">
              <p
                className="mt-1 w-full pl-4  text-lg    transition-transform transform duration-700  hover:scale-110 cursor-pointer"
                onClick={() => {
                  const benefitsSection =
                    document.getElementById("benefitsSection");
                  benefitsSection.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Chart
              </p>

              <p
                className="mt-1 mb-4 w-full pl-4 text-red-900 text-lg font-bold transition-transform transform duration-700  hover:scale-110  cursor-pointer"
                onClick={() => {
                  Cookies.remove("token");
                  Cookies.remove("name");
                  router.push("/");
                }}
              >
                Logout
              </p>
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-row items-center justify-end  w-full p-4 z-10 ">
        <p className="text-indigo-700 text-2xl mr-4">{name}</p>
        <div className="flex flex-col items-center justify-center h-12 w-12 bg-indigo-700 rounded-full cursor-pointer">
          <p
            className="text-white text-3xl font-bold"
            onClick={() => setAvatarClicked(true)}
          >
            {name.charAt(0).toUpperCase()}
          </p>
        </div>
      </div>
      <ChartComponent
        selectedCoin={selectedCoin}
        levelRange={levelRange}
        levels={levels}
        customSellPriceValue={customSellPriceValue}
        averagePurchasePrice={averagePurchasePrice}
        changedLevel={changedLevel}
        isCoinSelected={isCoinSelected}
        levelNames={levelNames}
        setLevelArray={setLevelArray}
      />
      <CoinSelection
        selectedCoin={selectedCoin}
        // setCustomSellPriceValue={setCustomSellPriceValue}
        setSelectedCoin={setSelectedCoin}
        setIsCoinSelected={setIsCoinSelected}
        isCoinSelected={isCoinSelected}
        coins={coins}
      />
      {isCoinSelected && (
        <>
          <LevelDifferenceSlider
            levelRange={levelRange}
            selectedCoin={selectedCoin}
            setLevelRange={setLevelRange}
          />
          <div className="flex flex-col lg:flex-row items-center justify-between  bg-red-100 mt-8">
            <div className="flex flex-row items-center justify-between mt-8 lg:mt-0">
              <h1 className={`text-6xl font-bold ml-8`}>Sell</h1>
            </div>
            <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 w-full h-auto py-4">
              <UnChangeAblePrices
                color={"bg-orange-900"}
                text={"Price Prediction: $"}
                value={selectedCoin.maxValue}
                parentBg={"bg-red-100"}
              />
              <UnChangeAblePrices
                color={"bg-orange-500"}
                text={"Max Ladder SP:  $"}
                value={
                  selectedCoin.maxValue - (selectedCoin.maxValue * 25) / 100
                }
                parentBg={"bg-red-100"}
              />
              <ChangeablePrice
                heading={"Custom Price Sell Level"}
                setUpdate={setCustomSellPriceValue}
                color={"border-pink-500"}
                inputVal={customSellPriceValue}
                parentBg={"bg-red-100"}
                customMargin={"mt-0"}
                justifyPosition={"justify-end"}
              />
            </div>
            <div className="bg-red-100 w-2/12"></div>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-between  bg-green-100 mt-8">
            <div className="flex flex-col lg:flex-row items-center justify-between  mt-8 lg:mt-0  ">
              <h1 className={`text-6xl font-bold ml-8`}>Buy</h1>
            </div>
            <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 w-full h-auto py-4">
              <ChangeablePrice
                heading={"Average Purchase Price"}
                setUpdate={setAveragePurchasePrice}
                inputVal={averagePurchasePrice}
                color={"border-green-500"}
                customMargin={"mt-0"}
                justifyPosition={""}
                parentBg={"bg-green-100"}
              />

              <ChangeablePrice
                heading={"No. of Tokens Hold"}
                setUpdate={setNumberOfTokens}
                inputVal={numberOfTokens}
                customMargin={"mt-0"}
                justifyPosition={""}
                parentBg={"bg-green-100"}
              />

              <UnChangeAblePrices
                text={" Initial Investment: $ "}
                value={numberOfTokens * averagePurchasePrice}
                parentBg={"bg-green-100"}
              />
            </div>
            <div className="bg-red-100 w-2/12"></div>
          </div>
        </>
      )}
      {isCoinSelected && (
        <div className="flex flex-col sm:flex-row items-center justify-center">
          <div className="flex flex-col items-center w-full lg:w-4/12 xl:w-4/12 2xl:w-3/12">
            {" "}
            <ChangeablePrice
              labelRequired={true}
              heading={"Number of Levels"}
              setUpdate={setNumberOfTokens}
              inputVal={numberOfTokens}
              customMargin={"mt-8 sm:mt-8 "}
              justifyPosition={""}
              selection={
                <select
                  value={levels}
                  onChange={handleLevelsChange}
                  className="w-full bg-black text-white border border-gray-300 rounded-md py-2 px-4 focus:outline-none "
                >
                  {[...Array(30).keys()].map((level) => (
                    <option key={level + 1} value={level + 1}>
                      {level + 1}
                    </option>
                  ))}
                </select>
              }
            />
          </div>
          <div className="flex flex-col items-center   w-full lg:w-4/12 xl:w-4/12 2xl:w-3/12">
            <ChangeablePrice
              labelRequired={true}
              heading={"Initial Investment?"}
              setUpdate={setNumberOfTokens}
              inputVal={initialInvestments}
              customMargin={"mt-8 sm:mt-8 "}
              justifyPosition={""}
              selection={
                <select
                  value={initialInvestments}
                  onChange={handleInitialInvestment}
                  className="w-full bg-black text-white border border-gray-300 rounded-md py-2 px-4 focus:outline-none "
                >
                  <option value={true}>yes</option>
                  <option value={false}>no</option>
                </select>
              }
            />
          </div>
        </div>
      )}
      <div
        className="flex flex-col lg:flex-row items-center justify-start bg-purple-100"
        style={{ display: initialInvestments ? "" : "none" }}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between  mt-8 lg:mt-0  ">
          <h1 className={`text-2xl font-bold ml-8`}>#I.I.O</h1>
        </div>
        <div
          className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 w-full h-auto   mt-1"
          style={{ display: initialInvestments ? "" : "none" }}
        >
          <ReturnOnInvestment
            initalInvestmentOutLevel={initalInvestmentOutLevel}
            setInitalInvestmentOutLevel={setInitalInvestmentOutLevel}
            numberOfTokens={numberOfTokens}
            averagePurchasePrice={averagePurchasePrice}
          />
        </div>
      </div>
      <div
        className={`overflow-x-auto `}
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
          changedLevel={changedLevel}
        />
      </div>
      <Totals
        initialInvestments={initialInvestments}
        customSellPriceValue={customSellPriceLevel}
        averagePurchasePrice={averagePurchasePrice}
        levelArray={levelArray}
        numberOfTokens={numberOfTokens}
      />
    </div>
  );
};

export default ChartUi;
