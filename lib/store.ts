import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import authReducer from '@/features/auth/store/authSlice';

// SSR-safe storage setup
const createNoopStorage = () => {
  return {
    getItem(_key: string) {
      return Promise.resolve(null);
    },
    setItem(_key: string, value: any) {
      return Promise.resolve(value);
    },
    removeItem(_key: string) {
      return Promise.resolve();
    },
  };
};

const storage = typeof window !== 'undefined' 
  ? require('redux-persist/lib/storage').default 
  : createNoopStorage();

// Opsional: Enkripsi storage jika dibutuhkan di production.
// Silakan pasang env variable untuk secretKey di real-world project.
let transforms = [];
if (typeof window !== 'undefined') {
  try {
    const { encryptTransform } = require('redux-persist-transform-encrypt');
    const encryptor = encryptTransform({
      secretKey: 'starter-fe-redux-secret-key-xyz',
      onError: (err: Error) => {
        console.error('Redux Persist Encryption Error:', err);
      },
    });
    transforms.push(encryptor);
  } catch (e) {
    console.warn('redux-persist-transform-encrypt failed to initialize, skipping encryption');
  }
}

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['user', 'token'], // Hanya data ini yang disimpan di LocalStorage
  transforms,
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
});

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore['dispatch'];
