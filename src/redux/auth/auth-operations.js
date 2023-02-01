import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

const accessToken = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
};

const sid = {
  set(sid) {
    axios.defaults.headers.common.Authorization = `Bearer ${sid}`;
  },
};

export const register = createAsyncThunk(
  'auth/reg',
  async (credential, thunkAPI) => {
    try {
      const { data } = await axios.post('/auth/register', credential);
      accessToken.set(data.accessToken);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credential, thunkAPI) => {
    try {
      const { data } = await axios.post('/auth/login', credential);
      accessToken.set(data.accessToken);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (credential, thunkAPI) => {
    try {
      const { data } = await axios.post('/auth/logout', credential);
      accessToken.set(data.token);
      clearAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }

  }
);

export const refresh = createAsyncThunk(
  'auth/refresh',
  async (credential, thunkAPI) => {
    //   const tokenDefault = JSON.parse(localStorage.getItem('persist:auth'));

    //   const config = {
    //     headers: {
    //       Authorization: `Bearer ${tokenDefault.refreshToken.replaceAll(
    //         `"`,
    //         ''
    //       )}`,
    //     },
    // };
    
      const tokenDefault = thunkAPI.getState().auth.refreshToken;

      axios.defaults.headers.common.Authorization = `Bearer ${tokenDefault}`;
    try {
      
      const { data } = await axios.post('/auth/refresh', credential);

      accessToken.set(data.newAccessToken);

      sid.set(data.sid);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
