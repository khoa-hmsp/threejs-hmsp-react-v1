import { configureStore } from '@reduxjs/toolkit';
import experienceReducer from './experience/slice';

export const store = configureStore({
  reducer: {
    experience: experienceReducer,
  },
});
