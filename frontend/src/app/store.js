import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import timesheetReducer from '../features/timesheets/timesheetSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    timesheets: timesheetReducer,
  },
});
