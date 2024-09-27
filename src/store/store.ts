import { configureStore } from '@reduxjs/toolkit';
import matchesReducer from '@/features/slices/matches';
import predictionsReducer from '@/features/slices/predictions';

export const store = configureStore({
  reducer: {
    matches: matchesReducer,
    predictions: predictionsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;