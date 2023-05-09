import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type FilterState = {
    mainFilters: string[]
    price: number[]
}

const initialState: FilterState = {
    mainFilters: ['male', 'female', 'nike', 'adidas', 'new balance', 'puma', 'other'],
    price: [0, 99999]
}

const slice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        changeMainFilters(state, action: PayloadAction<string>){
            const currentIndex = state.mainFilters.indexOf(action.payload);
            // const newChecked = [...checked];

            if (currentIndex === -1) {
                state.mainFilters.push(action.payload)
                // newChecked.push(value);
            } else {
                state.mainFilters.splice(currentIndex,1)
                // newChecked.splice(currentIndex, 1);
            }
        },
        changePrice(state, action: PayloadAction<number[]>){
            state.price = action.payload
        }
    }
})

export const filterReducer = slice.reducer
export const { changeMainFilters, changePrice} = slice.actions

