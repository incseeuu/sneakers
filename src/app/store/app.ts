import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type AppState = {
    isFetching: boolean
    isInitialized: boolean
}

const initialState: AppState = {
    isFetching: true,
    isInitialized: false
}

const app = createSlice({
    name: 'app',
    initialState,
    reducers: {
        changeFetching(state, action: PayloadAction<boolean>){
            state.isFetching = action.payload
        },
        changeInitialized(state, action: PayloadAction<boolean>){
            state.isInitialized = action.payload
        }
    }
})

export const appReducer = app.reducer
export const {changeFetching, changeInitialized} = app.actions