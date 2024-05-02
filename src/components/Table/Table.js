import React from "react";
import { returnOnServiceEachLevel } from "../../../utils/utils";
import UnChangeAblePrices from "../UnChangeAblePrices/UnChangeAblePrices";
import ChangeablePrice from "../ChangeablePrice/ChangeablePrice";

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
}) => {
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
          {levelArray.map((level, index) => (
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
                        : level.levelPrice
                    }
                  />
                </td>
                <td className={`px-4 md:px-4 md:py-4    `}>
                  <input
                    type="text"
                    // inputmode="numeric"
                    value={level.levelPrice < 0 ? "" : level.levelPrice}
                    placeholder="Enter Custom Sell Price"
                    onChange={(e) => {
                      const newValue = e.target.value.replace(/[^\d.]/g, "");
                      setCustomSellPriceLevel(newValue);
                      handleCustomSellPriceChange(index, newValue);
                      const updatedLevels = [...changedLevel];
                      console.log(updatedLevels);
                      console.log(updatedLevels);
                      updatedLevels[index] =
                        parseFloat(e.target.value) * (100 / levelRange);
                      console.log(updatedLevels);
                      setChangedLevel(updatedLevels);
                    }}
                    // pattern="(?!0\d+)\d+" // This pattern allows only positive integers without leading zeroes
                    className=" text-center sm:w-10/12  bg-white border  border-black rounded-xl py-4 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {/* <ChangeablePrice
                    heading={"Enter Custom Sell Price"}
                    setUpdate={setCustomSellPriceLevel}
                    inputVal={
                      level.levelPrice < 0 || !level.levelPrice
                        ? ""
                        : level.levelPrice
                    }
                    justifyPosition={""}
                  /> */}
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
                        : returnOnServiceEachLevel(
                            level,
                            averagePurchasePrice,
                            numberOfTokens
                          )
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

export default Table;
