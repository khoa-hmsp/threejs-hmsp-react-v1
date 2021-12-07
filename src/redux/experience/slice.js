import { createSlice } from '@reduxjs/toolkit';
import INITIAL_STATE from './initialState';

import reducers from './reducers';

export const experienceSlice = createSlice({
  name: 'experience',
  initialState: INITIAL_STATE,
  reducers,
});

export const { switchNextModel, switchPreviousModel, finishSwitchingModel } =
  experienceSlice.actions;
export default experienceSlice.reducer;
