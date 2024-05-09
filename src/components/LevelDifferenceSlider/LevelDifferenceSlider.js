"use client";
import React from "react";
import { updateArray, updateItem } from "@/redux/reducers/coin-reducer";
import { useDispatch, connect } from "react-redux";
const LevelDifferenceSlider = ({
  selectedCoin,
  levelRange,
  setLevelRange,
  myArray,
}) => {
  const dispatch = useDispatch();
  const handleChangeSlider = (e) => {
    // for (var i = 0; i < myArray.length; i++) {
    //   console.log("i", i);
    //   const array = [...myArray];
    //   array[i] = 7;
    //   // dispatch(
    //   //   updateItem({
    //   //     i,
    //   //     newItem: {
    //   //       level: `# 32`,
    //   //       levelPrice: 7,
    //   //     },
    //   //   })
    //   // );
    //   // dispatch(
    //   //   updateItem({
    //   //     i,
    //   //     newItem: {
    //   //       level: `# ${i + 2}`,
    //   //       levelPrice:
    //   //         (parseInt(myArray[i].levelPrice) * parseInt(event.target.value)) /
    //   //         100,
    //   //     },
    //   //   })
    //   // );
    //   console.log("myarray:", myArray);
    // }
    // dispatch(
    //   updateArray({
    //     level: parseInt(e.target.value),
    //   })
    // );
    console.log(parseInt(e.target.value));
    console.log("levelRange:", levelRange);
    setLevelRange(parseInt(e.target.value));
  };
  return (
    // <div className="flex w-full flex-col items-center mt-8">
    //   <div className="w-[300px] sm:w-[400px] ">
    //     <input
    //       type="range"
    //       min={0}
    //       max={selectedCoin.maxValue * (25 / 100)}
    //       step="1"
    //       value={levelRange}
    //       onChange={handleChangeSlider}
    //       className="slider  bg-gray-200 appearance-none h-2 rounded-full outline-none w-full"
    //     />

    //     <div className="flex flex-row items-center justify-between w-full ">
    //       <div className="p-2 text-xs text-gray-500">$1</div>
    //       <div className="p-2 text-xs text-gray-500">
    //         ${selectedCoin.maxValue * (25 / 100)}
    //       </div>
    //     </div>
    //   </div>
    //   <div className=" w-12 text-center text-sm text-gray-700">
    //     ${levelRange}
    //   </div>
    // </div>
    <div className="flex w-full flex-col items-center mt-8">
      <div className="w-[300px] sm:w-[400px] ">
        <input
          type="range"
          min={0}
          max={100}
          step="1"
          value={levelRange}
          onChange={handleChangeSlider}
          className="slider  bg-gray-200 appearance-none h-2 rounded-full outline-none w-full"
        />

        <div className="flex flex-row items-center justify-between w-full ">
          <div className="p-2 text-xs text-gray-500">0%</div>
          <div className="p-2 text-xs text-gray-500">100%</div>
        </div>
      </div>
      <div className=" w-12 text-center text-sm text-gray-700">
        {levelRange}%
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    myArray: state.array,
  };
};

export default connect(mapStateToProps)(LevelDifferenceSlider);
