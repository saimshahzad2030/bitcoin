"use client";
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import style from "./Chart.module.css";
import { addItem, removeItem, updateItem } from "@/redux/reducers/coin-reducer";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";

const ChartComponent = ({
  selectedCoin,
  levels,
  levelRange,
  customSellPriceValue,
  averagePurchasePrice,
  changedLevel,
  isCoinSelected,
  levelNames,
  setLevelArray,
  levelArray,
  changedlevel,

  customLevelPrice,
}) => {
  const chartRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    const chartInstance = new Chart(ctx, {
      type: "line",
      data: {
        labels: isCoinSelected ? selectedCoin.months : "",
        datasets: [
          {
            label: isCoinSelected ? selectedCoin.name : "Select a coin",
            data: isCoinSelected ? selectedCoin.data : "",
            fill: true,
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
            enabled: true,
            callbacks: {
              label: function (context) {
                const label = context.dataset.label || "";
                const value = context.parsed.y || 0;
                return `${label}: $${value}`;
              },
            },
          },
        },
        animation: {
          onComplete: function (animation) {
            const chartInstance = animation.chart;
            const ctx = chartInstance.ctx;
            const chartArea = chartInstance.chartArea;
            const maxValueY = chartInstance.scales.y.getPixelForValue(
              isCoinSelected ? selectedCoin.maxValue : 100
            );
            const maxValueYAverage = chartInstance.scales.y.getPixelForValue(
              isCoinSelected
                ? selectedCoin.maxValue - selectedCoin.maxValue * (25 / 100)
                : 75
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

            if (isCoinSelected) {
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
              ctx.strokeStyle = "#e75480";
              ctx.stroke();
              ctx.restore();

              const initialLevels = [];
              // for (let i = 0; i < levels; i++) {
              //   if (levels % 2 === 0) {
              //     const yPosition = -500;
              //     const yPos = chartInstance.scales.y.getPixelForValue(
              //       changedLevel[i] !== "unaltered"
              //         ? changedLevel[i]
              //         : yPosition
              //     );
              //     ctx.save();
              //     ctx.beginPath();
              //     ctx.setLineDash([5, 5]);
              //     ctx.moveTo(chartArea.right, yPos);
              //     ctx.lineTo(chartArea.right + lineWidth, yPos);
              //     ctx.strokeStyle = "purple";
              //     ctx.stroke();
              //     ctx.restore();
              //     const labelX = chartArea.right + lineWidth - 20;
              //     const labelY = yPos;
              //     ctx.fillStyle = "purple";
              //     initialLevels.push({
              //       level: levelNames[i],
              //       levelPrice:
              //         changedLevel[i] !== "unaltered"
              //           ? changedLevel[i]
              //           : -yPosition,
              //     });
              //     setLevelArray(initialLevels);
              //     ctx.fillText(levelNames[i], labelX, labelY);
              //   } else {
              //     const yPosition = -500;
              //     const yPos = chartInstance.scales.y.getPixelForValue(
              //       changedLevel[i] !== "unaltered"
              //         ? changedLevel[i]
              //         : yPosition
              //     );
              //     ctx.save();
              //     ctx.beginPath();
              //     ctx.setLineDash([5, 5]);
              //     ctx.moveTo(chartArea.right, yPos);
              //     ctx.lineTo(chartArea.right + lineWidth, yPos);
              //     ctx.strokeStyle = "purple";
              //     ctx.stroke();
              //     ctx.restore();
              //     const labelX = chartArea.right + lineWidth - 20;
              //     const labelY = yPos;
              //     ctx.fillStyle = "purple";
              //     initialLevels.push({
              //       level: levelNames[i],
              //       levelPrice:
              //         changedLevel[i] !== "unaltered"
              //           ? changedLevel[i]
              //           : yPosition,
              //     });

              //     console.log(initialLevels, "initial Levels");

              //     setLevelArray(initialLevels);
              //     ctx.fillText(levelNames[i], labelX, labelY);
              //     console.log(changedLevel[i], "changedLevel[i]");
              //   }
              // }
              // dispatch(removeItem());

              for (let i = 0; i < levels; i++) {
                const yPosition = -500;
                const yPos = chartInstance.scales.y.getPixelForValue(
                  // changedLevel[i] !== "unaltered"
                  //   ? levelRange == 100
                  //     ? changedLevel[i]
                  //     : parseInt(changedLevel[i] * (levelRange / 100))
                  //   : yPosition
                  // levelArray[i]
                  // changedLevel[i] !== "unaltered"
                  //   ? levelRange == 100
                  //     ? changedLevel[i]
                  //     : parseInt(changedLevel[i] * (levelRange / 100))
                  //   : yPosition
                  changedlevel[i] !== "unaltered"
                    ? levelRange == 100
                      ? changedlevel[i]
                      : parseInt(changedlevel[i] * (levelRange / 100))
                    : yPosition
                );
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
                // initialLevels.push({
                //   level: levelNames[i],
                //   levelPrice:
                //     // changedLevel[i] !== "unaltered"
                //     //   ? levelRange == 100
                //     //     ? changedLevel[i]
                //     //     : parseInt(changedLevel[i] * (levelRange / 100))
                //     //   : yPosition < 0
                //     //   ? 0
                //     //   : yPosition,
                //     // levelArray[i],
                //     levelArray[i]
                //       ? levelRange == 100
                //         ? levelArray[i].levelPrice
                //         : parseInt(
                //             levelArray[i].levelPrice * (levelRange / 100)
                //           )
                //       : yPosition < 0
                //       ? 0
                //       : yPosition,
                // });
                // dispatch(
                //   addItem({
                //     level: levelNames[i],
                //     levelPrice:
                //       // changedLevel[i] !== "unaltered"
                //       //   ? levelRange == 100
                //       //     ? changedLevel[i]
                //       //     : parseInt(changedLevel[i] * (levelRange / 100))
                //       //   : yPosition < 0
                //       //   ? 0
                //       //   : yPosition,
                //       changedlevel[i] !== "unaltered"
                //         ? levelRange == 100
                //           ? changedlevel[i]
                //           : parseInt(changedlevel[i] * (levelRange / 100))
                //         : yPosition,
                //   })
                // );
                // dispatch(
                //   updateItem({
                //     i,
                //     newItem: {
                //       level: `# ${i + 1}`,
                //       levelPrice:
                //         changedlevel[i] !== "unaltered"
                //           ? levelRange == 100
                //             ? changedlevel[i]
                //             : parseInt(changedlevel[i] * (levelRange / 100))
                //           : yPosition,
                //     },
                //   })
                // );
                // setLevelArray(initialLevels);
                ctx.fillText(levelNames[i], labelX, labelY);
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
    customLevelPrice,
    customSellPriceValue,
    averagePurchasePrice,
    changedLevel,
  ]);

  return (
    <div className="flex flex-col items-center w-full ">
      <div className={`flex flex-col items-center w-7/12 `}>
        <canvas ref={chartRef} className={style.chartCanvas} />
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    changedlevel: state.changedlevel, // Assuming your reducer is named myReducer and it contains an array
  };
};
export default connect(mapStateToProps)(ChartComponent);
