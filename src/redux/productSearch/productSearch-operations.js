import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

export const unnamed = createAsyncThunk('/product', async (name, thunkAPI) => {
  try {
    const { data } = await axios.post(`/product?search=${name}`);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
