import { combineReducers } from "@reduxjs/toolkit";
import allCoinsReducer from "./reducers/coin-reducer";

export default combineReducers({
  coins: allCoinsReducer,
});
