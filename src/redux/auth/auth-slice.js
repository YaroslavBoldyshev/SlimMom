import { createSlice } from "@reduxjs/toolkit";
import {register, logIn, logOut, refresh} from "./auth-operations"

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
            id: null
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
                notAllowedProducts: null
            },
        },
        isLoggedIn: false,
    },
    extraReducers: {
        [register.fulfilled](state, action) {
            state.user = action.payload.user;
            state.accessToken = action.payload.accessToken;
            state.isLoggedIn = true;
        },
        [logIn.fulfilled](state, action) {
            state.todaySummary = action.payload.todaySummary;
            state.user = action.payload.user;
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
            state.sid = action.payload.sid;
            state.isLoggedIn = true;
        },
        [logOut.fulfilled](state) {
            state.todaySummary = null;
            state.user = null;
            state.accessToken = null;
            state.refreshToken = null;
            state.sid = null;
            state.isLoggedIn = false;
        },
        [refresh.fulfilled](state, action) {
            state.accessToken = action.payload.newAccessToken;
            state.refreshToken = action.payload.newRefreshToken;
            state.sid = action.payload.sid;
            state.isLoggedIn = true;
        }
    },
})

export const authReducer = authSlice.extraReducers;