// store.js
'use client'
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import skillsSlice from './slices/skill';
// import authSlice from './slices/auth';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, combineReducers({
  skills : skillsSlice,
}));

export const store = configureStore({
  reducer: persistedReducer
});

export const persistor = persistStore(store);