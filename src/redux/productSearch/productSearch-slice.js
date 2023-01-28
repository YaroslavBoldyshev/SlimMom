import { createSlice } from "@reduxjs/toolkit";
import { search } from "./productSearch-operations"

const authSlice = createSlice({
    name: 'dailyRate',
    initialState: {
        product: [],
        isLoading: false,
        error: null,
    },
    extraReducers: {
        [named.pending](state) {
            state.isLoading = true;
        },
        [named.fulfilled](state, action) {
            state.product = action.payload;
            state.isLoading = false;
        },
        [named.rejected](state, action) {
            state.error = action.payload;
            state.isLoading = false;
        }
    },
})

export const productSearchReducer = authSlice.extraReducers;