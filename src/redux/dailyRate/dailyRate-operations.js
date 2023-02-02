import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

export const unnamed = createAsyncThunk(
  'dailyRate/unnamed',
  async (credential, thunkAPI) => {
    try {
      const { data } = await axios.post('/daily-rate', credential);
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const named = createAsyncThunk(
  'dailyRate/named',
  async ({userId, formData}, thunkAPI) => {
    const tokenDefault = JSON.parse(localStorage.getItem('persist:auth'));
    axios.defaults.headers.common.Authorization = `Bearer ${tokenDefault.accessToken.replaceAll(
      `"`,
      ''
    )}`;
    try {
      const { data } = await axios.post(`/daily-rate/${userId}`, formData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
