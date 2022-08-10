import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IGuessItem } from "../types/general-interfaces";
import type { RootState } from "../store/store";

interface GuessState {
    isCorrect: boolean,
    guessList: IGuessItem[]
}

const initialState: GuessState = {
    isCorrect: false,
    guessList: []
}

export const guessSlice = createSlice({
    name: 'guesses',
    initialState,
    reducers: {
        markSuccess: (state) => {
            state.isCorrect = true
        },
        addNewGuess: (state, action: PayloadAction<IGuessItem>) => {
            state.guessList.push(action.payload)
        }
    }
})

export const { markSuccess, addNewGuess } = guessSlice.actions;

export const selectCount = (state: RootState) => state.guesses.guessList.length;
export const selectGuessList = (state: RootState) => state.guesses.guessList;
export const selectIsCorrect = (state: RootState) => state.guesses.isCorrect;

export default guessSlice.reducer;