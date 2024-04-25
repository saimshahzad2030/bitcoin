import React from "react";

const ChangeablePrice = ({
  heading,
  inputVal,
  setUpdate,
  color,
  customMargin,
  selection,
}) => {
  return color ? (
    <div
      className={`${customMargin} flex flex-col items-center justify-between h-auto w-full`}
    >
      <div
        className={`w-10/12 h-[2px]  border-t-2 ${color} border-dashed`}
      ></div>
      <div className="mt-4 w-10/12 flex flex-col items-start justify-end ">
        <h2 className=" text-lg  mb-4 ">{heading}</h2>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => {
            const newValue = e.target.value.replace(/\D/g, "");
            setUpdate(newValue);
          }}
          pattern="\d*"
          className="w-full   bg-gray-200 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  ) : (
    <div
      className={`${customMargin}  flex flex-col items-center justify-between h-auto w-full`}
    >
      <div className="mt-4 w-10/12 flex flex-col items-start  ">
        <h2 className=" text-xl   mb-4 ">{heading}</h2>
        {selection ? (
          selection
        ) : (
          <input
            type="text"
            value={inputVal}
            onChange={(e) => {
              const newValue = e.target.value.replace(/\D/g, "");
              setUpdate(newValue);
            }}
            pattern="\d*"
            className="w-full bg-gray-200 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        )}
      </div>
    </div>
  );
};

export default ChangeablePrice;
