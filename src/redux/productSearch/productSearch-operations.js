import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://slimmom-backend.goit.global';
axios.defaults.headers.common.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2M2Q0NTU4MzQ5YmRiYzMyODk2Nzk0MjgiLCJzaWQiOiI2M2Q0NTYxNTQ5YmRiYzMyODk2Nzk0MmEiLCJpYXQiOjE2NzQ4NjAwNTMsImV4cCI6MTY3NDg2MzY1M30.Q5RxmZ-5PNth7yC85wF5NTfW0HWguTBD1X1GBgZDyOs`;

export const search = createAsyncThunk('/product', async (name, thunkAPI) => {
  try {
    const { data } = await axios.get(`/product?search=egg`);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error.message);
    return thunkAPI.rejectWithValue(error.message);
  }
});
