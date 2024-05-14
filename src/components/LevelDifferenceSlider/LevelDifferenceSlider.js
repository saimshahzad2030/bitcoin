"use client";
import React from "react";
import { updateArray, updateItem } from "@/redux/reducers/coin-reducer";
import { useDispatch, connect } from "react-redux";
import style from "./LevelDifferenceSlider.module.css";
const LevelDifferenceSlider = ({
  selectedCoin,
  levelRange,
  setLevelRange,
  myArray,
}) => {
  const dispatch = useDispatch();
  const handleChangeSlider = (e) => {
    setLevelRange(parseInt(e.target.value));
  };
  return (
    <div className="flex w-full flex-col items-center mt-8">
      <div className="w-[300px] sm:w-[400px] ">
        <input
          type="range"
          min={0}
          max={100}
          step="1"
          value={levelRange}
          onChange={handleChangeSlider}
          className={`slider  bg-indigo-400 appearance-none h-2 rounded-full outline-none w-full ${style.sliderInput}`}
        />

        <div className="flex flex-row items-center justify-between w-full ">
          <div className="p-2 text-xs text-indigo-200">0%</div>
          <div className="p-2 text-xs text-indigo-200">100%</div>
        </div>
      </div>
      <div className=" w-12 text-center text-sm text-white">{levelRange}%</div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    myArray: state.array,
  };
};

export default connect(mapStateToProps)(LevelDifferenceSlider);
