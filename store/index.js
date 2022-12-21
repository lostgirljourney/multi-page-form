import { configureStore } from '@reduxjs/toolkit';
import reducer from '../forms';
export const store = configureStore({
  reducer: {
    form: reducer
  }
});
