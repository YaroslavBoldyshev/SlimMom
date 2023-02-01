import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

export const search = createAsyncThunk('/product', async (name, thunkAPI) => {
  const tokenDefault = JSON.parse(localStorage.getItem('persist:auth'));
  const config = {
    headers: {
      Authorization: `Bearer ${tokenDefault.accessToken.replaceAll(`"`, '')}`,
    },
  };  
  try {
    const { data } = await axios.get(`/product?search=${name}`, config);
    return data;
  } catch (error) {
    console.log(error.message);
    return thunkAPI.rejectWithValue(error.message);
  }
});
