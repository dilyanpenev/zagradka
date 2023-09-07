import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";
import type { ICityRecord } from '../types/general-interfaces';

interface AnswerState {
    answerCity: ICityRecord | null
}

const initialState: AnswerState = {
    answerCity: null
}

export const answerSlice = createSlice({
    name: 'answer',
    initialState,
    reducers: {
        setTodaysAnswer: (state, action: PayloadAction<ICityRecord>) => {
            state.answerCity = action.payload
        }
    }
})

export const { setTodaysAnswer } = answerSlice.actions;

export const selectAnswerId = (state: RootState) => state.answer.answerCity;

export default answerSlice.reducer;