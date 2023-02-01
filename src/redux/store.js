import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/auth-slice';
import { dailyRateReducer } from './dailyRate/dailyRate-slice';
import { productSearchReducer } from './productSearch/productSearch-slice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { dayProductInfoReducer } from './day/day-slice';
import { userInfoReducer } from './user/user-slice';

const middleware = getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  });

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['accessToken'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),

    dailyRate: dailyRateReducer,
    productSearch: productSearchReducer,
    dayProductInfo: dayProductInfoReducer,
    userInfo: userInfoReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
