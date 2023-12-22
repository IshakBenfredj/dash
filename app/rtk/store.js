// store.js
'use client'
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import skillsSlice from './slices/skill';
import portfolioSlice from './slices/portfolio';
import servicesSlice from './slices/services';
import testimonialsSlice from './slices/testimonials';
import lessonsSlice from './slices/lessons';
// import authSlice from './slices/auth';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, combineReducers({
  skills : skillsSlice,
  portfolio : portfolioSlice,
  services : servicesSlice,
  testimonials : testimonialsSlice,
  lessons : lessonsSlice,
}));

export const store = configureStore({
  reducer: persistedReducer
});

export const persistor = persistStore(store);