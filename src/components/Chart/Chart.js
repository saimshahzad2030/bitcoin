"use client";
import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import style from "./Chart.module.css";

const ChartComponent = () => {
  const [levelArray, setLevelArray] = useState([]);
  const addLevel = (levelName, levelPrice) => {
    setLevelArray((prevLevels) => {
      const levelSet = new Set(prevLevels.map((item) => item.levelPrice));
      levelSet.add(levelPrice);
      const uniqueLevels = Array.from(levelSet).map((price) => ({
        level: levelName,
        levelPrice: price,
      }));
      return uniqueLevels;
    });
    console.log(levelArray, "levelArray");
  };
  const [selectedCoin, setSelectedCoin] = useState({
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
    data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40, 210],
  });
  const [customSellPriceValue, setCustomSellPriceValue] = useState(
    selectedCoin.maxValue - selectedCoin.maxValue * (25 / 100)
  );
  const [averagePurchasePrice, setAveragePurchasePrice] = useState(0);
  const [numberOfTokens, setNumberOfTokens] = useState(0);
  const [levelRange, setLevelRange] = useState(10);
  const [levels, setLevels] = useState(5);
  const [initialInvestments, setInitialInvestments] = useState(false);
  const [customSellPriceLevel, setCustomSellPriceLevel] = useState(0);
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

  const handleSelectChange = (event) => {
    const selectedCoin = coins.find((coin) => coin.name === event.target.value);
    setSelectedCoin(selectedCoin);
  };
  const handleLevelsChange = (event) => {
    setLevels(parseInt(event.target.value));
    const newLevelArray = Array.from(
      { length: parseInt(event.target.value) },
      (_, index) => ({
        level: `# ${index + 1}`,
        levelPrice: 2,
      })
    );
    setLevelArray(newLevelArray);
    console.log(levelArray, "levelArray");
    console.log(levels, "levels");
  };
  const handleInitialInvestment = (event) => {
    setInitialInvestments(!initialInvestments);
  };
  const chartRef = useRef(null);

  const levelNames = Array.from(
    { length: levels },
    (_, index) => `# ${index + 1}`
  );
  const handleCustomSellPriceChange = (index, newValue) => {
    setLevelArray((prevLevels) => {
      const newLevels = [...prevLevels];
      newLevels[index] = { ...newLevels[index], levelPrice: newValue };
      return newLevels;
    });
  };
  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    const chartInstance = new Chart(ctx, {
      type: "line",
      data: {
        labels: selectedCoin.months,
        datasets: [
          {
            label: selectedCoin.name,
            data: selectedCoin.data,
            fill: false,
            borderColor: "#0000B9",
            tension: 0.4,
          },
        ],
      },
      options: {
        scales: {
          y: {
            position: "right",
            beginAtZero: true,
            ticks: {
              callback: function (value, index, values) {
                return "$" + value;
              },
            },
          },
        },
        plugins: {
          tooltip: {
            enabled: false,
          },
        },
        animation: {
          onComplete: function (animation) {
            const chartInstance = animation.chart;
            const ctx = chartInstance.ctx;
            const chartArea = chartInstance.chartArea;
            const maxValueY = chartInstance.scales.y.getPixelForValue(
              selectedCoin.maxValue
            );
            const maxValueYAverage = chartInstance.scales.y.getPixelForValue(
              selectedCoin.maxValue - selectedCoin.maxValue * (25 / 100)
            );
            const yValue2 =
              chartInstance.scales.y.getPixelForValue(averagePurchasePrice);

            const customSellPrice =
              chartInstance.scales.y.getPixelForValue(customSellPriceValue);
            const lineWidth = chartArea.right * -0.5;

            ctx.save();
            ctx.beginPath();
            ctx.moveTo(chartInstance.chartArea.left, maxValueY);
            ctx.lineTo(chartInstance.chartArea.right, maxValueY);
            ctx.strokeStyle = "brown";
            ctx.stroke();

            ctx.save();
            ctx.beginPath();
            ctx.moveTo(chartInstance.chartArea.left, maxValueYAverage);
            ctx.lineTo(chartInstance.chartArea.right, maxValueYAverage);
            ctx.strokeStyle = "orange";
            ctx.stroke();

            ctx.restore();
            ctx.save();
            ctx.beginPath();
            ctx.setLineDash([5, 5]);

            ctx.moveTo(chartInstance.chartArea.left, yValue2);
            ctx.lineTo(chartInstance.chartArea.right, yValue2);
            ctx.strokeStyle = "green";
            ctx.stroke();
            ctx.restore();

            ctx.save();
            ctx.beginPath();
            ctx.setLineDash([5, 5]);

            ctx.moveTo(chartInstance.chartArea.left, customSellPrice);
            ctx.lineTo(chartInstance.chartArea.right, customSellPrice);
            ctx.strokeStyle = "pink";
            ctx.stroke();
            ctx.restore();

            for (let i = 0; i < levels; i++) {
              if (levels % 2 === 0) {
                const yPosition =
                  customSellPriceValue -
                  (levels / 2) * levelRange +
                  (i + 1) * levelRange -
                  levelRange / 2;
                const yPos = chartInstance.scales.y.getPixelForValue(yPosition);
                ctx.save();
                ctx.beginPath();
                ctx.setLineDash([5, 5]);
                ctx.moveTo(chartArea.right, yPos);
                ctx.lineTo(chartArea.right + lineWidth, yPos);
                ctx.strokeStyle = "purple";
                ctx.stroke();
                ctx.restore();
                const labelX = chartArea.right + lineWidth - 20;
                const labelY = yPos;
                ctx.fillStyle = "purple";
                addLevel(levelNames[i], customSellPriceValue - levelRange);

                ctx.fillText(levelNames[i], labelX, labelY);

                console.log(yPos, "yPos");
              } else {
                const yPosition =
                  customSellPriceValue -
                  Math.ceil(levels / 2) * levelRange +
                  (i + 1) * levelRange;
                const yPos = chartInstance.scales.y.getPixelForValue(yPosition);
                ctx.save();
                ctx.beginPath();
                ctx.setLineDash([5, 5]);
                ctx.moveTo(chartArea.right, yPos);
                ctx.lineTo(chartArea.right + lineWidth, yPos);
                ctx.strokeStyle = "purple";
                ctx.stroke();
                ctx.restore();
                const labelX = chartArea.right + lineWidth - 20;
                const labelY = yPos;
                ctx.fillStyle = "purple";
                addLevel(
                  levelNames[i],
                  customSellPriceValue -
                    Math.ceil(levels / 2) * levelRange +
                    (i + 1) * levelRange
                );

                ctx.fillText(levelNames[i], labelX, labelY);
                console.log(yPos, "yPos");
              }
            }
          },
        },
      },
    });

    return () => {
      chartInstance.destroy();
    };
  }, [
    selectedCoin,
    levels,
    levelRange,
    customSellPriceValue,
    averagePurchasePrice,
  ]);
  return (
    <div className="container mx-auto">
      <div className={`flex flex-col items-center`}>
        <canvas ref={chartRef} className={style.chartCanvas} />
      </div>
      <div className="flex flex-col items-center w-full mt-20">
        <select
          value={selectedCoin ? selectedCoin.name : ""}
          onChange={handleSelectChange}
          className=" block appearance-none w-2/12 bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:border-indigo-500"
        >
          {coins.map((coin, index) => (
            <option key={index} value={coin.name}>
              {coin.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex w-full flex-col items-center mt-8">
        <div className="w-[400px] ">
          <input
            type="range"
            min={0}
            max={selectedCoin.maxValue * (25 / 100)}
            step="1"
            value={levelRange}
            onChange={handleChangeSlider}
            className="slider  bg-gray-200 appearance-none h-2 rounded-full outline-none w-full"
          />

          <div className="flex flex-row items-center justify-between w-full ">
            <div className="p-2 text-xs text-gray-500">$1</div>
            <div className="p-2 text-xs text-gray-500">
              ${selectedCoin.maxValue * (25 / 100)}
            </div>
          </div>
        </div>
        <div className=" w-12 text-center text-sm text-gray-700">
          ${levelRange}
        </div>
      </div>
      <div className="flex flex-row items-start justify-evenly w-full h-auto mt-16">
        <div className="flex flex-col items-center justify-evenly h-auto w-3/12">
          <div className="w-full h-[2px] bg-orange-900"></div>
          <div className="mt-4 w-full flex-col items-center  py-4 border border-black">
            <h2 className="text-center text-lg">Price Prediction</h2>
          </div>
        </div>
        <div className="flex flex-col items-center justify-evenly h-auto w-3/12">
          <div className="w-full h-[2px] bg-orange-500"></div>
          <div className="mt-4 w-full flex-col items-center  py-4 border border-black">
            <h2 className="text-center text-lg  ">Max Ladder Sell Price</h2>
          </div>
        </div>
        <div className="flex flex-col items-center justify-evenly h-auto w-3/12">
          <div className="w-full h-[2px]  border-t-2 border-pink-500 border-dashed"></div>
          <div className="mt-4 w-full flex flex-row items-center py-4 ">
            <h2 className="text-center text-lg w-7/12">
              Custom Price Sell Level
            </h2>
            <input
              type="text"
              value={
                !customSellPriceValue
                  ? selectedCoin.maxValue - selectedCoin.maxValue * (25 / 100)
                  : customSellPriceValue
              }
              onChange={(e) => {
                const newValue = e.target.value.replace(/\D/g, "");
                setCustomSellPriceValue(newValue);
              }}
              pattern="\d*" // Only allow digits (0-9)
              className="w-4/12   bg-gray-200 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row items-end justify-evenly w-full h-auto   mt-16">
        <div className="flex flex-col items-center justify-evenly h-auto w-3/12 ">
          <div className="w-full h-[2px]  border-t-2 border-green-500 border-dashed"></div>
          <div className="mt-4 w-full flex flex-row items-center  py-4 ">
            <h2 className="text-center text-xl w-7/12">
              Average Purchase Price
            </h2>
            <input
              type="text"
              value={averagePurchasePrice}
              onChange={(e) => {
                const newValue = e.target.value.replace(/\D/g, "");
                setAveragePurchasePrice(newValue);
              }}
              pattern="\d*"
              className="w-3/12  ml-4 bg-gray-200 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-evenly h-auto w-3/12">
          <div className="mt-4 w-full flex flex-row items-center  py-4 ">
            <h2 className="text-center text-xl w-7/12">No. of Tokens Hold</h2>
            <input
              type="text"
              value={numberOfTokens}
              onChange={(e) => {
                const newValue = e.target.value.replace(/\D/g, "");
                setNumberOfTokens(newValue);
              }}
              pattern="\d*"
              className="w-3/12  ml-4 bg-gray-200 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-evenly h-auto w-3/12">
          <div className="mt-4 w-full flex-col items-center  py-4 border border-black">
            <h2 className="text-center text-xl">
              Initial Investment: $ {numberOfTokens * averagePurchasePrice}
            </h2>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center  w-full mt-4">
        <div className="flex flex-row items-center w-full  justify-center mt-4">
          <p>Number of Levels</p>
          <select
            value={levels}
            onChange={handleLevelsChange}
            className=" ml-8 block appearance-none w-2/12 bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:border-indigo-500"
          >
            {[...Array(30).keys()].map((level) => (
              <option key={level + 1} value={level + 1}>
                {level + 1}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-row items-center justify-center w-full my-8">
          <p>Initial Investment?</p>
          <select
            value={initialInvestments}
            onChange={handleInitialInvestment}
            className="ml-8 block appearance-none w-2/12 bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:border-indigo-500"
          >
            <option value={true}>yes</option>
            <option value={false}>no</option>
          </select>
        </div>
      </div>
      <div
        className="flex flex-row items-end justify-evenly w-full h-auto   mt-16"
        style={{ display: initialInvestments ? "" : "none" }}
      >
        <div className="flex flex-col items-center justify-evenly h-auto w-3/12">
          <div className="mt-4 w-full flex-col items-center  py-4 border border-black">
            <h2 className="text-center text-xl">
              I.I.O Price: $ {numberOfTokens * averagePurchasePrice}
            </h2>
          </div>
        </div>
        <div className="flex flex-col items-center justify-evenly h-auto w-3/12">
          <div className="mt-4 w-full flex-col items-center  py-4 border border-black">
            <h2 className="text-center text-xl">
              Return On Investment: $ {numberOfTokens * averagePurchasePrice}
            </h2>
          </div>
        </div>
      </div>
      <div
        className={`overflow-x-auto mt-20 `}
        style={{ display: !initialInvestments ? "none" : "" }}
      >
        <table className="table-auto w-full border-collapse border border-gray-300 mb-12">
          <thead>
            <tr>
              <th
                className={`px-4 py-2 bg-gray-700 text-gray-50 border text-2xl `}
              >
                Level Number
              </th>
              <th
                className={`px-4 py-2 bg-gray-700 text-gray-50 border text-2xl `}
              >
                Sell Price
              </th>
              <th
                className={`px-4 py-2 bg-gray-700 text-gray-50 border text-2xl `}
              >
                Custom Sell Price
              </th>
              <th
                className={`px-4 py-2 bg-gray-700 text-gray-50 border text-2xl `}
              >
                Return On Investment
              </th>
            </tr>
          </thead>
          <tbody>
            {levelArray.length >= levels &&
              levelArray.map((level, index) => (
                <tr key={index}>
                  <td className={`px-4 py-4 border text-center `}>
                    {`# ${index + 1}`}
                  </td>
                  <td className={`px-4 py-4 border text-center `}>
                    $ {level.levelPrice}
                  </td>
                  <td className={`px-4 py-4 border text-center `}>
                    <input
                      type="text"
                      value={level.levelPrice}
                      onChange={(e) => {
                        const newValue = e.target.value.replace(/\D/g, "");
                        setCustomSellPriceLevel(newValue);
                        handleCustomSellPriceChange(index, newValue);
                      }}
                      pattern="\d*"
                      className="w-3/12  ml-4 bg-gray-200 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </td>
                  <td className={`px-4 py-4 border text-center `}>
                    ${" "}
                    {(level.levelPrice - averagePurchasePrice) * numberOfTokens}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div
        className="grid grid-cols-4 w-full h-auto   mt-16"
        style={{ display: initialInvestments ? "" : "none" }}
      >
        <div className="flex flex-col items-center justify-evenly h-auto w-11/12">
          <div className="mt-4 w-full flex-col items-center  py-4 border border-black">
            <h2 className="text-center text-xl">
              Weighted Average: $ {numberOfTokens * averagePurchasePrice}
            </h2>
          </div>
        </div>
        <div className="flex flex-col items-center justify-evenly h-auto w-11/12">
          <div className="mt-4 w-full flex-col items-center  py-4 border border-black">
            <h2 className="text-center text-xl">
              Expected ROI: $ {customSellPriceValue - averagePurchasePrice}
            </h2>
          </div>
        </div>
        <div className="flex flex-col items-center justify-evenly h-auto w-11/12">
          <div className="mt-4 w-full flex-col items-center  py-4 border border-black">
            <h2 className="text-center text-xl">
              Total Revenue: $ {numberOfTokens * averagePurchasePrice}
            </h2>
          </div>
        </div>
        <div className="flex flex-col items-center justify-evenly h-auto w-11/12">
          <div className="mt-4 w-full flex-col items-center  py-4 border border-black">
            <h2 className="text-center text-xl">
              Total Profit: $ {numberOfTokens * averagePurchasePrice}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartComponent;
