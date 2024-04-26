"use client";
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import style from "./Chart.module.css";
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
}) => {
  const chartRef = useRef(null);

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
              for (let i = 0; i < levels; i++) {
                if (levels % 2 === 0) {
                  const yPosition = -500;
                  const yPos = chartInstance.scales.y.getPixelForValue(
                    changedLevel[i] !== "unaltered"
                      ? changedLevel[i]
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
                  initialLevels.push({
                    level: levelNames[i],
                    levelPrice:
                      changedLevel[i] !== "unaltered"
                        ? changedLevel[i]
                        : -yPosition,
                  });
                  setLevelArray(initialLevels);
                  ctx.fillText(levelNames[i], labelX, labelY);
                } else {
                  const yPosition = -500;
                  const yPos = chartInstance.scales.y.getPixelForValue(
                    changedLevel[i] !== "unaltered"
                      ? changedLevel[i]
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
                  initialLevels.push({
                    level: levelNames[i],
                    levelPrice:
                      changedLevel[i] !== "unaltered"
                        ? changedLevel[i]
                        : yPosition,
                  });

                  console.log(initialLevels, "initial Levels");

                  setLevelArray(initialLevels);
                  ctx.fillText(levelNames[i], labelX, labelY);
                  console.log(changedLevel[i], "changedLevel[i]");
                }
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
    changedLevel,
  ]);
  return (
    <div className={`flex flex-col items-center`}>
      <canvas ref={chartRef} className={style.chartCanvas} />
    </div>
  );
};

export default ChartComponent;
