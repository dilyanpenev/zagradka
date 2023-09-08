
import { configureStore } from '@reduxjs/toolkit';
import guessSlice from '../reducers/guessSlice';
import answerSlice from '../reducers/answerSlice';
import viewSlice from '../reducers/viewSlice';

export const store = configureStore({
    reducer: {
        guesses: guessSlice,
        answer: answerSlice,
        view: viewSlice,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;