import { createSlice } from '@reduxjs/toolkit';
import { getUserInfo } from './user-operations';

const userInfoSlice = createSlice({
  name: 'user',
  initialState: {
    userData: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(getUserInfo.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getUserInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.userData = action.payload;
      })
      .addCase(getUserInfo.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const userInfoReducer = userInfoSlice.reducer;
