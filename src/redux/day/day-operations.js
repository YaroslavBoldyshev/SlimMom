import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { dailyRateReducer } from 'redux/dailyRate/dailyRate-slice';

axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

export const addDayProductThunk = createAsyncThunk(
  'day/add',
  async (productInfo, thunkAPI) => {
    try {
      const { data } = await axios.post('/day', productInfo);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteDayProductThunk = createAsyncThunk(
  'day/delete',
  async (dateForDelete, thunkAPI) => {
    const tokenDefault = thunkAPI.getState().auth.accessToken;
    axios.defaults.headers.common.Authorization = `Bearer ${tokenDefault}`;
    try {
      const { data } = await axios.delete('/day', dateForDelete);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getDayInfoThunk = createAsyncThunk(
  'day/getInfo',
  async (dateForAdd, thunkAPI) => {
    const tokenDefault = thunkAPI.getState().auth.accessToken;
    axios.defaults.headers.common.Authorization = `Bearer ${tokenDefault}`;
    try {
      const { data } = await axios.post('/day/info', dateForAdd);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
