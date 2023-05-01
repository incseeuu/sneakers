import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {stateType} from "../../shop/model/sneakers";

export type CartState = {
    totalPrice: number
    items: stateType[]
}

const initialState: CartState = {
    totalPrice: 0,
    items: [] as stateType[]
}

const slice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart: (state, action: PayloadAction<stateType>) => {
            const findItem = state.items.find(el => el.id === action.payload.id)

            if(findItem){
                findItem.count++
            } else {
                state.items.push({...action.payload, count: 1})
            }
            state.totalPrice = state.items.reduce((acc, val) => val.count * val.price + acc, 0)
        }
    },
    extraReducers: {}
})

export const cartReducer = slice.reducer
export const {addItemToCart} = slice.actions