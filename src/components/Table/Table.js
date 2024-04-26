import React from "react";
import { returnOnServiceEachLevel } from "../../../utils/utils";
import UnChangeAblePrices from "../UnChangeAblePrices/UnChangeAblePrices";
const Table = ({
  initialInvestments,
  setLevelArray,
  levelArray,
  averagePurchasePrice,
  numberOfTokens,
  setCustomSellPriceLevel,
  setChangedLevel,
  changedLevel,
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
      <table className="table-auto w-full  border-gray-300 mb-12">
        {/* <thead>
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
        </thead> */}
        <tbody>
          {levelArray.map((level, index) => (
            <tr
              key={index}
              className="border-t bordet-b border-black bg-purple-100"
            >
              <td className={`px-4 py-4  text-center `}>{`# ${index + 1}`}</td>
              <td
                className={`px-4 py-4  text-center flex flex-col items-center`}
              >
                <div className="w-7/12 h-[2px]  border-t-2 border-purple-500 border-dashed mb-2"></div>
                <UnChangeAblePrices
                  text={"Sell Price: $ "}
                  value={
                    level.levelPrice < 0 || !level.levelPrice
                      ? 0
                      : level.levelPrice
                  }
                />
                {/* <p>
                  ${" "}
                  {level.levelPrice < 0 || !level.levelPrice
                    ? 0
                    : level.levelPrice}
                </p> */}
              </td>
              <td className={`px-4 py-4  text-center `}>
                <input
                  type="text"
                  inputmode="numeric"
                  value={
                    level.levelPrice < 0 || !level.levelPrice
                      ? ""
                      : level.levelPrice
                  }
                  placeholder="Enter Custom Sell Price"
                  onChange={(e) => {
                    const newValue = e.target.value.replace(/\D/g, "");
                    setCustomSellPriceLevel(newValue);
                    handleCustomSellPriceChange(index, newValue);
                    const updatedLevels = [...changedLevel];
                    updatedLevels[index] = parseInt(e.target.value);
                    setChangedLevel(updatedLevels);
                  }}
                  pattern="(?!0\d+)\d+" // This pattern allows only positive integers without leading zeroes
                  className="w-7/12 text-center ml-4 bg-white border  border-black rounded-xl py-4 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </td>
              <td className={`px-4 py-4  text-center text-black`}>
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
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
