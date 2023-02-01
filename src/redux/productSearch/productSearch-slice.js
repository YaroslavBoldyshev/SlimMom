import { createSlice } from '@reduxjs/toolkit';
import { search } from './productSearch-operations';

const productSearchSlice = createSlice({
  name: 'dailyRate',
  initialState: {
    products: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [search.pending](state) {
      state.isLoading = true;
    },
    [search.fulfilled](state, action) {
      state.products = action.payload;
      state.isLoading = false;
    },
    [search.rejected](state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const productSearchReducer = productSearchSlice.reducer;
