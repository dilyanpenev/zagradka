
import { configureStore } from '@reduxjs/toolkit';
import guessSlice from '../reducers/guessSlice';

export const store = configureStore({
    reducer: {
        guesses: guessSlice,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;