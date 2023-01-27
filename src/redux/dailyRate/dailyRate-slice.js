import { createSlice } from "@reduxjs/toolkit";
import {unnamed, named} from "./dailyRate-operations"

const authSlice = createSlice({
    name: 'dailyRate',
    initialState: {
        id: null,
        dailyRate: null,
        summaries: [
            {
            _id: null,
            date: null,
            kcalLeft: null,
            kcalConsumed: null,
            dailyRate: null,
            percentsOfDailyRate: null,
            userId: null,
            __v: null
            }
        ],
        notAllowedProducts: [[]]
    },
    extraReducers: {
        [unnamed.fulfilled](state, action) {
            state.dailyRate = action.payload.dailyRate;
            state.notAllowedProducts = action.payload.notAllowedProducts;
        },
        [named.fulfilled](state, action) {
            state.id = action.payload.id;
            state.dailyRate = action.payload.dailyRate;
            state.summaries = action.payload.summaries;
            state.notAllowedProducts = action.payload.notAllowedProducts;
        }
    },
})

export const dailyRateReducer = authSlice.extraReducers;