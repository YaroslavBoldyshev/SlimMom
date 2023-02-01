import { createSlice } from '@reduxjs/toolkit';
import { search } from './productSearch-operations';

const authSlice = createSlice({
  name: 'dailyRate',
  initialState: {
    product: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [search.pending](state) {
      state.isLoading = true;
    },
    [search.fulfilled](state, action) {
      state.product = action.payload;
      state.isLoading = false;
    },
    [search.rejected](state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const productSearchReducer = authSlice.reducer;
