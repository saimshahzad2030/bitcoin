"use client";
import React, { useState } from "react";
import { returnOnServiceEachLevel } from "../../../utils/utils";
import UnChangeAblePrices from "../UnChangeAblePrices/UnChangeAblePrices";
import ChangeablePrice from "../ChangeablePrice/ChangeablePrice";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { updateItem } from "@/redux/reducers/coin-reducer";
import { updateChangeLevel } from "@/redux/reducers/student-slice";
const Table = ({
  initialInvestments,
  setLevelArray,
  levelArray,
  averagePurchasePrice,
  numberOfTokens,
  setCustomSellPriceLevel,
  setChangedLevel,
  changedLevel,
  initalInvestmentOutLevel,
  setInitalInvestmentOutLevel,
  levelRange,
  setCustomLevelPrice,
  customLevelPrice,
  myArray,
}) => {
  const dispatch = useDispatch();
  const handleCustomSellPriceChange = (index, newValue) => {
    setLevelArray((prevLevels) => {
      const newLevels = [...prevLevels];
      newLevels[index] = { ...newLevels[index], levelPrice: newValue };
      return newLevels;
    });
  };
  return (
    <div
      className={`overflow-x-auto `}
      style={{ display: !initialInvestments ? "none" : "" }}
    >
      <table className="table-auto w-full bg-purple-100   mb-12">
        <thead className="bg-purple-100 border-t border-b border-black">
          <tr>
            <th className={`md:px-4 md:py-2 border text-2xl w-1/12`}>
              <h1 className={`text-2xl text-center font-bold sm:ml-8`}>
                #I.I.O
              </h1>
            </th>
            <th className={`md:px-4 md:py-2   border w-4/12 md:w-3/12  `}>
              <input
                type="text"
                value={initalInvestmentOutLevel ? initalInvestmentOutLevel : ""}
                onChange={(e) => {
                  const newValue = e.target.value.replace(/\D/g, "");
                  setInitalInvestmentOutLevel(newValue);
                }}
                placeholder="I.I.O Price "
                pattern="\d*"
                className="w-full  border border-black rounded-lg py-4 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </th>
            <th className={`px-4 py-2 border w-4/12 md:w-3/12`}>
              <UnChangeAblePrices
                text={"ROI: $ "}
                value={numberOfTokens * averagePurchasePrice}
              />
            </th>
            <th
              className={`md:px-4 md:py-2 border text-2xl w-4/12 md:w-3/12 `}
            ></th>
          </tr>
          <div className="w-full h-4 "></div>
        </thead>
        <tbody>
          {myArray.map((level, index) => (
            <>
              <div className="w-full h-4 "></div>
              <tr
                key={index}
                className="border-t border-b border-black bg-purple-100"
              >
                <td
                  className={`px-4 md:px-4 md:py-4 text-center border-t  border-b border-black `}
                >{`# ${index + 1}`}</td>
                <td className={` px-4 md:px-4 md:py-4    text-center pb-4`}>
                  <div className="h-[2px]  border-t-2 border-purple-500 border-dashed mb-2"></div>
                  <UnChangeAblePrices
                    text={"Sell Price: $ "}
                    value={
                      level.levelPrice < 0 || !level.levelPrice
                        ? 0
                        : parseFloat(level.levelPrice * (levelRange / 100)).toFixed(2)
                    }
                  />
                </td>
                <td className={`px-4 md:px-4 md:py-4    `}>
                  <input
                    type="text"
                    value={
                      level.levelPrice < 0 || !level.levelPrice
                        ? ""
                        : level.levelPrice
                    }
                    placeholder={`Enter Custom Price`}
                    onChange={(e) => {
                      const newValue = e.target.value.replace(/[^\d.]/g, ''); // Remove all characters except digits and dots
                      const decimalCount = (newValue.match(/\./g) || []).length; // Count the number of dots
                    
                      if (decimalCount <= 1) {  
                      
                      dispatch(
                        updateChangeLevel({
                          index,
                          newItem: newValue,
                        })
                      );
                      dispatch(
                        updateItem({
                          index,
                          newItem: {
                            level: `# ${index + 1}`,
                            levelPrice: newValue,
                          },
                        })
                      );
                      setCustomLevelPrice(!customLevelPrice);
                    }
                      // const newValue = e.target.value.replace(/\D/g, "");
                      // setLevelArray((prevLevels) => {
                      //   const newLevels = [...prevLevels];
                      //   newLevels[index] = {
                      //     ...newLevels[index],
                      //     levelPrice: newValue,
                      //   };
                      //   return newLevels;
                      // });
                      // const updatedLevels = [...changedLevel];

                      // updatedLevels[index] =
                      //   parseFloat(e.target.value) * (100 / levelRange);
                      // setChangedLevel((prevLevels) => {
                      //   const newLevels = [...prevLevels];
                      //   newLevels[index] =
                      //     parseFloat(e.target.value) * (100 / levelRange);
                      //   return newLevels;
                      // });
                      // console.log(e.target.value);
                    }}
                    pattern="^\d*(\.\d+)?$"
                    className="w-full text-center py-4 bg-white border border-black text-black px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
                  />
                </td>
                <td
                  className={`px-4 md:px-4 md:py-4    text-center text-black`}
                >
                  <UnChangeAblePrices
                    text={"ROI: $ "}
                    value={
                      returnOnServiceEachLevel(
                        level,
                        averagePurchasePrice,
                        numberOfTokens
                      ) < 0 ||
                      !returnOnServiceEachLevel(
                        level,
                        averagePurchasePrice,
                        numberOfTokens
                      )
                        ? 0
                        : parseFloat(returnOnServiceEachLevel(
                            level,
                            averagePurchasePrice,
                            numberOfTokens
                          )).toFixed(2)
                    }
                    // parentBg={"mt-4"}
                  />
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    myArray: state.array, // Assuming your reducer is named myReducer and it contains an array
  };
};

export default connect(mapStateToProps)(Table);
