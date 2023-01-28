import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import cookie from 'js-cookie';

axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

const accessToken = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
};

const refreshToken = {
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
      accessToken.set(data.token);
      refreshToken.set(data.token);
      sid.set(data.sid);
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
      accessToken.set(data.token);
      refreshToken.set(data.token);
      sid.set(data.sid);
      cookie.set('sid', data.sid);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/auth/logout');
    accessToken.unset();
    refreshToken.unset();
    sid.unset();
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refresh = createAsyncThunk(
  'auth/refresh',
  async (credential, thunkAPI) => {
    try {
      const { data } = await axios.post('/auth/refresh', credential);
      accessToken.set(data.token);
      refreshToken.set(data.token);
      sid.set(data.sid);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
