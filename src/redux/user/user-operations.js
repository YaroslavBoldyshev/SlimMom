import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://slimmom-backend.goit.global';
const tokenDefault = JSON.parse(localStorage.getItem('persist:auth'));
console.log(tokenDefault);
const config = {
  headers: {
    Authorization: `Bearer ${tokenDefault.accessToken.replaceAll(`"`, '')}`,
  },
};

export const getUserInfo = createAsyncThunk('user/get', async (_, thunkAPI) => {
  try {
    const { data } = await axios.get('/user', config);

    console.log(data);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
