import React from 'react'

const LevelDifferenceSlider = ({
    selectedCoin,
    levelRange, 
    setLevelRange

}) => {
    const handleChangeSlider = (event) => {
        setLevelRange(parseInt(event.target.value));
      };
  return (
    <div className="flex w-full flex-col items-center mt-8">
          <div className="w-[400px] ">
            <input
              type="range"
              min={0}
              max={selectedCoin.maxValue * (25 / 100)}
              step="1"
              value={levelRange}
              onChange={handleChangeSlider}
              className="slider  bg-gray-200 appearance-none h-2 rounded-full outline-none w-full"
            />

            <div className="flex flex-row items-center justify-between w-full ">
              <div className="p-2 text-xs text-gray-500">$1</div>
              <div className="p-2 text-xs text-gray-500">
                ${selectedCoin.maxValue * (25 / 100)}
              </div>
            </div>
          </div>
          <div className=" w-12 text-center text-sm text-gray-700">
            ${levelRange}
          </div>
        </div>
  )
}

export default LevelDifferenceSlider