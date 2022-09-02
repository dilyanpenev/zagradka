import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";

interface AnswerState {
    answerId: string | null
}

const initialState: AnswerState = {
    answerId: null
}

export const answerSlice = createSlice({
    name: 'answer',
    initialState,
    reducers: {
        setTodaysAnswer: (state, action: PayloadAction<string>) => {
            state.answerId = action.payload
        }
    }
})

export const { setTodaysAnswer } = answerSlice.actions;

export const selectAnswerId = (state: RootState) => state.answer.answerId;

export default answerSlice.reducer;