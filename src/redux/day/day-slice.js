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
        localStorage.setItem('productToAdd', JSON.stringify(action.payload.eatenProduct));
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
        localStorage.setItem('productToDelete', JSON.stringify(action.payload));
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
        localStorage.setItem('prodList', JSON.stringify(action.payload));
      })
      .addCase(getDayInfoThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const dayProductInfoReducer = daySlice.reducer;
