import { combineReducers } from "@reduxjs/toolkit";
import arrayReducer from "./reducers/coin-reducer";
import changedReducer from "./reducers/student-slice";

export default combineReducers({
  array: arrayReducer,
  changedlevel: changedReducer,
});
