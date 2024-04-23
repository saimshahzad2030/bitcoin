import React from 'react'
import { returnOnServiceEachLevel } from '../../../utils/utils';
const Table = ({initialInvestments,setLevelArray,levelArray,averagePurchasePrice,numberOfTokens,setCustomSellPriceLevel,setChangedLevel,changedLevel}) => {
  const handleCustomSellPriceChange = (index, newValue) => {
    setLevelArray((prevLevels) => {
      const newLevels = [...prevLevels];
      newLevels[index] = { ...newLevels[index], levelPrice: newValue };
      return newLevels;
    });
  };
  return (
    <div
        className={`overflow-x-auto mt-20 `}
        style={{ display: !initialInvestments ? "none" : "" }}
      >
        <table className="table-auto w-full border-collapse border border-gray-300 mb-12">
          <thead>
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
          </thead>
          <tbody>
          {levelArray.map((level, index) => (
    <tr key={index}>
      <td className={`px-4 py-4 border text-center `}>
        {`# ${index + 1}`}
      </td>
      <td className={`px-4 py-4 border text-center flex flex-col items-center`}>
        
      <div className="w-7/12 h-[2px]  border-t-2 border-purple-500 border-dashed mb-2"></div>
        <p>$ {level.levelPrice}</p>
      </td>
      <td className={`px-4 py-4 border text-center `}>
        <input
          type="text"
          value={level.levelPrice}
          onChange={(e) => {
            const newValue = e.target.value.replace(/\D/g, "");
            setCustomSellPriceLevel(newValue);
            handleCustomSellPriceChange(index, newValue);
            const updatedLevels = [...changedLevel];  
            updatedLevels[index] = parseInt(e.target.value);
            setChangedLevel(updatedLevels);  
          }}
          pattern="\d*"
          className="w-7/12  ml-4 bg-gray-200 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </td>
      <td className={`px-4 py-4 border text-center ${returnOnServiceEachLevel(level)<0?'text-red-600':'text-green-600'}`}>
        ${" "}{returnOnServiceEachLevel(level,averagePurchasePrice,numberOfTokens)}
      </td>
    </tr>
  ))}
          </tbody>
        </table>
      </div>
  )
}

export default Table