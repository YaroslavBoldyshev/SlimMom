import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refresh } from './auth-operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    accessToken: null,
    refreshToken: null,
    sid: null,
    todaySummary: {
      date: null,
      kcalLeft: null,
      kcalConsumed: null,
      dailyRate: null,
      percentsOfDailyRate: null,
      userId: null,
      id: null,
    },
    user: {
      email: null,
      username: null,
      userData: {
        weight: null,
        height: null,
        age: null,
        bloodType: null,
        desiredWeight: null,
        dailyRate: null,
        notAllowedProducts: null,
      },
    },
    isLoggedIn: false,
    isLoading: false,
    error: null,
  },
  extraReducers: {
    // Register=========================================
    [register.pending](state) {
      state.isLoading = true;
    },
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [register.rejected](state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
    // LogIn=============================================
    [logIn.pending](state) {
      state.isLoading = true;
    },
    [logIn.fulfilled](state, action) {
      state.todaySummary = action.payload.todaySummary;
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.sid = action.payload.sid;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [logIn.rejected](state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
    // LogOut============================================
    [logOut.fulfilled](state) {
      state.todaySummary = null;
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
      state.sid = null;
      state.isLoggedIn = false;
    },
    // refresh===========================================
    [refresh.fulfilled](state, action) {
      state.accessToken = action.payload.newAccessToken;
      state.refreshToken = action.payload.newRefreshToken;
      state.sid = action.payload.sid;
      state.isLoggedIn = true;
    },
  },
});

export const authReducer = authSlice.reducer;
