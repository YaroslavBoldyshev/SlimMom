import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

export const search = createAsyncThunk('/product', async (name, thunkAPI) => {
    const tokenDefault = thunkAPI.getState().auth.accessToken;

  axios.defaults.headers.common.Authorization = `Bearer ${tokenDefault}`;
  
  try {
    const { data } = await axios.get(`/product?search=${name}`);
    return data;
  } catch (error) {
    console.log(error.message);
    return thunkAPI.rejectWithValue(error.message);
  }
});
