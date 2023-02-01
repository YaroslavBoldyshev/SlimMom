import { createSlice } from '@reduxjs/toolkit';
import { addDayProductThunk } from './day-operations';
import { deleteDayProductThunk, getDayInfoThunk } from './day-operations.js';

const daySlice = createSlice({
  name: 'day',
  initialState: {
    addProduct: {},
    deleteProduct: {},
    dayInfo: {},
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(addDayProductThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addDayProductThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.addProduct = action.payload;
      })
      .addCase(addDayProductThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteDayProductThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteDayProductThunk.fulfilled, (state, action) => {
        state.deleteProduct = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteDayProductThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getDayInfoThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getDayInfoThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.dayInfo = action.payload;
      })
      .addCase(getDayInfoThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const dayProductInfoReducer = daySlice.reducer;
