'use client';
import { configureStore } from '@reduxjs/toolkit';
import userLoginSlice from './userLogin/userLoginSlice';

export const store = configureStore({
  reducer: {
    userLogin: userLoginSlice,
  },
});
