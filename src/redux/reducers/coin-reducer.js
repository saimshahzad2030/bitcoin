import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  // addApplication,
  // cancelApplication,
  fetchAllCoins,
} from "../reducer-services/allCoins";

export const fetchCoinsThunk = createAsyncThunk(
  "coins/fetchCoins",
  fetchAllCoins
);

// export const addApplicationThunk = createAsyncThunk(
//   "applications/addApplications",
//   addApplication
// );

// export const cancelApplicationThunk = createAsyncThunk(
//   "applications/cancelApplication",
//   cancelApplication
// );

const coinsSlice = createSlice({
  name: "coins",
  initialState: {
    coinss: [],
    loading: false,
    error: null,
  },
  reducers: {
    // updateApplicationStatus(state, action) {
    //   const { id, status } = action.payload;
    //   const applicationToUpdate = state.applications.find(
    //     (app) => app._id === id
    //   );
    //   if (applicationToUpdate) {
    //     applicationToUpdate.status = status;
    //   }
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCoinsThunk.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchCoinsThunk.fulfilled, (state, action) => {
      state.coinss = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(fetchCoinsThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    // .addCase(addApplicationThunk.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.applications = [...state.applications, action.payload.data];
    //   state.error = null;
    //   console.log("fulfilled");

    //   // setcompanyClicked(false)
    // })
    // .addCase(addApplicationThunk.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload;
    //   console.log("rejected");
    // })
    // .addCase(cancelApplicationThunk.pending, (state) => {
    //   state.loading = true;
    //   console.log("pending");
    // })
    // .addCase(cancelApplicationThunk.fulfilled, (state, action) => {
    //   // state.applications.pop(action.payload)
    //   state.loading = false;
    //   state.applications = state.applications.filter(
    //     (app) => app._id !== action.payload.id
    //   );
    //   state.error = null;
    //   console.log("payload", action.payload);
    //   console.log("fulfilled");
    // })
    // .addCase(cancelApplicationThunk.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload;
    //   console.log("rejected");
    // });
  },
});
// export const { updateApplicationStatus } = applicationsSlice.actions;
export default coinsSlice.reducer;
