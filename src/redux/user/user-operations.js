import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

export const getUserInfo = createAsyncThunk('user/get', async (_, thunkAPI) => {
  const tokenDefault = thunkAPI.getState().auth.accessToken;

  axios.defaults.headers.common.Authorization = `Bearer ${tokenDefault}`

  try {
    const { data } = await axios.get('/user');
    return data;
  } catch (error) {
    toast('oops, something went wrong(')
    return thunkAPI.rejectWithValue(error);
  }
});
