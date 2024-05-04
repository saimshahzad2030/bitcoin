import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  "unaltered",
  "unaltered",
  "unaltered",
  "unaltered",
  "unaltered",
  "unaltered",
  "unaltered",
  "unaltered",
  "unaltered",
  "unaltered",
  "unaltered",
  "unaltered",
  "unaltered",
  "unaltered",
  "unaltered",
  "unaltered",
  "unaltered",
  "unaltered",
  "unaltered",
  "unaltered",
  "unaltered",
  "unaltered",
  "unaltered",
  "unaltered",
  "unaltered",
  "unaltered",
  "unaltered",
  "unaltered",
  "unaltered",
  "unaltered",
];
const changedSlice = createSlice({
  name: "changedlevel",
  initialState,
  reducers: {
    addchangedLevel(state, action) {
      state.push(action.payload);
    },

    updateChangeLevel(state, action) {
      const { index, newItem } = action.payload;
      if (index >= 0 && index < state.length) {
        state[index] = newItem;
      }
    },
    resetChangedLevel(state, action) {
      return state.map(() => 'unaltered');

    }
  },
});

export const { addchangedLevel, updateChangeLevel,resetChangedLevel } = changedSlice.actions;

export default changedSlice.reducer;
