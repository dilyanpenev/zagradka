import { createSlice } from "@reduxjs/toolkit";
import { Views } from "../constants/reducer-enums";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";

interface ViewState {
    currentView: number
}

const initialState: ViewState = {
    currentView: Views.LOADING,
}

export const viewSlice = createSlice({
    name: 'views',
    initialState,
    reducers: {
        changeView: (state, action: PayloadAction<number>) => {
            state.currentView = action.payload;
        }
    }
})

export const { changeView } = viewSlice.actions;

export const getCurrentView = (state: RootState) => state.view.currentView

export default viewSlice.reducer;