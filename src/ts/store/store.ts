
import { configureStore } from '@reduxjs/toolkit';
import guessSlice from '../reducers/guessSlice';
import answerSlice from '../reducers/answerSlice';

export const store = configureStore({
    reducer: {
        guesses: guessSlice,
        answer: answerSlice,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;