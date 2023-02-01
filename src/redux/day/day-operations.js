import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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
  async (productId, thunkAPI) => {
    try {
      const { data } = await axios.delete('/day', productId);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getDayInfoThunk = createAsyncThunk(
  'day/getInfo',
  async (date, thunkAPI) => {
    try {
      const { data } = await axios.post('/day/info', date);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
