"use client";
import React from "react";
import { Chart as CHARTJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
CHARTJS.register(ArcElement, Tooltip, Legend);
const DoughNutChart = () => {
  const userData = {
    labels: ["Approved", "Pending"],
    datasets: [
      {
        label: "Users",
        data: [300, 120],
        backgroundColor: ["rgb(0,255,127)", "	rgb(30,144,255)"],
        hoverOffset: 4,
      },
    ],
  };
  const coinData = {
    labels: ["Coin1", "Coin2", "Coin3 ", "Coin4", "Coin5", "Coin6"],
    datasets: [
      {
        label: "Coins",
        data: [300, 120, 250, 500, 70, 800],
        backgroundColor: [
          "rgb(0,255,127)",
          "	rgb(30,144,255)",
          "	rgb(30,84,255)",
          "	rgb(10,144,155)",
          "	rgb(30,200,220)",
          "	rgb(100,30,180)",
        ],
        hoverOffset: 4,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-evenly mt-10">
      <div className="w-full   flex flex-col items-center">
        <h1 className="text-4xl lg:text-3xl font-bold">All Users</h1>
        <div className="w-[300px]">
          <Doughnut data={userData} />
        </div>
      </div>
      <div className="mt-16 lg:mt-0 w-full  flex flex-col items-center">
        <h1 className="text-4xl lg:text-3xl font-bold">No. of coins selled</h1>
        <div className="w-[300px]">
          <Doughnut data={coinData} />
        </div>
      </div>
    </div>
  );
};
export default DoughNutChart;
