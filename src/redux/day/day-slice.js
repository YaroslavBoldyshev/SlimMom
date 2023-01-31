const { createSlice } = require('@reduxjs/toolkit');
const { addDayProductThunk } = require('./day-operations');

const daySlice = createSlice({
  name: 'day',
  initialState: {
    eatenProduct: {
      title: null,
      weight: null,
      kcal: null,
      id: null,
    },
    day: {
      id: null,
      eatenProducts: [
        {
          title: null,
          weight: null,
          kcal: null,
          id: null,
        },
      ],
      date: null,
      daySummary: null,
    },
    daySummary: {
      date: null,
      kcalLeft: null,
      kcalConsumed: null,
      dailyRate: null,
      percentsOfDailyRate: null,
      userId: null,
      id: null,
    },
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
        state.isLoading = true;
        state.error = null;
      });
  },
});
