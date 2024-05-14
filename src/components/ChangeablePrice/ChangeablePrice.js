import React from "react";
import { connect } from "react-redux";
const ChangeablePrice = ({
  heading,
  inputVal,
  setUpdate,
  color,
  customMargin,
  selection,
  parentBg,
  labelRequired,
}) => {
  return color ? (
    <div
      className={`${customMargin} flex flex-col items-center justify-between h-auto w-full ${
        heading == "Enter Custom Sell Price" ? "" : "py-4 sm:py-8"
      } ${parentBg}`}
    >
      <div
        className={`w-10/12 h-[2px]  border-t-2 ${color} border-dashed`}
      ></div>
      <div className="mt-4 w-10/12 flex flex-col items-start justify-end ">
        <input
          type="text"
          value={inputVal ? inputVal : ""}
          placeholder={`${heading}`}
          onChange={(e) => {
            const newValue = e.target.value.replace(/[^\d.]/g, "");
            const decimalCount = (newValue.match(/\./g) || []).length;

            if (decimalCount <= 1) {
              setUpdate(newValue);
            }
          }}
          pattern="^\d*(\.\d+)?$"
          className="w-full text-center py-4 bg-white border border-indigo-700 text-indigo-700 px-4 focus:outline-none focus:ring-2 focus:ring-white rounded-lg"
        />
      </div>
    </div>
  ) : (
    <div
      className={`${customMargin}  flex flex-col items-center justify-between h-auto w-full ${parentBg} py-4 sm:py-8 `}
    >
      {labelRequired && (
        <h2 className=" text-lg text-center w-full mb-1 text-white">
          {heading}
        </h2>
      )}

      <div className="mt-4 w-10/12 flex flex-col items-start  ">
        {selection ? (
          selection
        ) : (
          <input
            type="text"
            value={inputVal ? inputVal : ""}
            placeholder={`${heading}`}
            onChange={(e) => {
              const newValue = e.target.value;
              setUpdate(newValue);
            }}
            className="w-full text-center py-4 bg-white border border-indigo-700 text-indigo-700 px-4 focus:outline-none focus:ring-2 focus:ring-white rounded-lg"
          />
        )}
      </div>
    </div>
  );
};

export default ChangeablePrice;
