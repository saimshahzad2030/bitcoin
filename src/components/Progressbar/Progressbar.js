"use client";
import React from "react";
import { useEffect, useState } from "react";

const Progressbar = ({ progress }) => {
  const [dashArray, setDashArray] = useState(0);

  useEffect(() => {
    const circumference = 251.2; // Circumference of the circle (2 * pi * radius)
    const dashValue = (progress / 100) * circumference;
    setDashArray(dashValue);
  }, [progress]);

  return (
    <div className="progress-container w-24 h-24 relative">
      <svg className="progress-circle" viewBox="0 0 100 100">
        <circle className="progress-background" cx="50" cy="50" r="40"></circle>
        <circle
          className="progress-bar"
          cx="50"
          cy="50"
          r="40"
          style={{ strokeDasharray: `${dashArray}, 251.2` }}
        ></circle>
        <text
          className="progress-text  top-4/12 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          x="50"
          y="50"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {progress}%
        </text>
      </svg>
    </div>
  );
};
export default Progressbar;
