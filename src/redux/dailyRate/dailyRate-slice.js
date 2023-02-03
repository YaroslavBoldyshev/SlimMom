import { createSlice } from '@reduxjs/toolkit';
import { unnamed, named } from './dailyRate-operations';
const myDate = new Date().toJSON().slice(0, 10);

const authSlice = createSlice({
  name: 'dailyRate',
  initialState: {
    id: null,
    dailyRate: null,
    summaries: [
      {
        _id: 0,
        date: myDate,
        kcalLeft: 0,
        kcalConsumed: 0,
        dailyRate: 0,
        percentsOfDailyRate: 0,
        userId: 0,
        __v: 0,
      },
    ],
    notAllowedProducts: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
    // unnamed=======================================================
    .addCase(unnamed.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(unnamed.fulfilled, (state, action) => {
      state.dailyRate = action.payload.dailyRate;
      state.notAllowedProducts = action.payload.notAllowedProducts;
      state.isLoading = false;
    })
    .addCase(unnamed.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    })
    // named=========================================================
    .addCase(named.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(named.fulfilled, (state, action) => {
      state.id = action.payload.id;
      state.dailyRate = action.payload.dailyRate;
      state.summaries = action.payload.summaries;
      state.notAllowedProducts = action.payload.notAllowedProducts;
      state.isLoading = false;
    })
    .addCase(named.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    })
  },
});

export const dailyRateReducer = authSlice.reducer;
