import React from "react";

const UnChangeAblePrices = ({ value, color, text, parentBg }) => {
  return color ? (
    <div
      className={` flex flex-col items-center justify-between h-auto w-full  ${parentBg} py-4 sm:py-8 `}
    >
      <div className={`w-10/12 h-[2px] ${color}`}></div>
      <div className="mt-4 w-10/12 flex-col items-center py-4 border border-white rounded-xl bg-indigo-700">
        <h2 className="text-center text-white text-lg">
          {text}
          {value}
        </h2>
      </div>
    </div>
  ) : (
    <div
      className={`   flex flex-col items-center justify-end h-auto w-full ${parentBg}  ${
        text == "Return On Investment: $ " ||
        text == "Sell Price: $ " ||
        text == "ROI: $ "
          ? ""
          : " py-4  sm:py-8"
      }`}
    >
      <div
        className={`  flex-col items-center border    rounded-xl border-white   bg-indigo-700 ${
          text == " Initial Investment: $ " ? "w-10/12 py-4" : "w-fit  p-4"
        }`}
      >
        <h2 className="text-center text-white text-xl text-nowrap">
          {text}
          {value}
        </h2>
      </div>
    </div>
  );
};

export default UnChangeAblePrices;
