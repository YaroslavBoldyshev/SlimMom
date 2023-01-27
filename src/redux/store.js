import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from "./auth/auth-slice";
import { dailyRateReducer } from './dailyRate/dailyRate-slice';

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

 const middleware = (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        }
    })

const authPersistConfig = {
    key: 'auth',
    storage,
    witelist: ['token'],
};

export const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer),
        dailyRate: dailyRateReducer,
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
})

export const persistor = persistStore(store);