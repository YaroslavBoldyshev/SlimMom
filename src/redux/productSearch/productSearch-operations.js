import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://slimmom-backend.goit.global';



export const search = createAsyncThunk('/product', async (name, thunkAPI) => {
  // console.log(tokenDefault);
  // if (!tokenDefault) {
  //   return;
  // } 
  const tokenDefault = JSON.parse(localStorage.getItem('persist:auth')); 
  console.log(tokenDefault);
  const config = {
    headers: { Authorization: `Bearer ${tokenDefault.accessToken.replaceAll(`"`, "")}` },
  };
  try {
    const { data } = await axios.get(`/product?search=${name}`, config);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
