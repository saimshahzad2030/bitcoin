import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const arraySlice = createSlice({
  name: "array",
  initialState,
  reducers: {
    addItem(state, action) {
      state.push(action.payload);
    },
    removeItem(state, action) {
      return [];
    },
    updateItem(state, action) {
      const { index, newItem } = action.payload;
      if (index >= 0 && index < state.length) {
        state[index] = newItem;
      }
    },
    resetArray(state, action) {
      return state.map((item) => ({
        ...item,
        levelPrice:-500,
      }));
    },
    updateArray(state, action) {
      const { level } = action.payload;
      return state.map((item) => ({
        ...item,
        levelPrice: (item.levelPrice * level) / 100,
      }));
    },
  },
});
export const { addItem, removeItem, updateItem, updateArray,resetArray } =
  arraySlice.actions;
export default arraySlice.reducer;
