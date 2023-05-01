import { configureStore } from '@reduxjs/toolkit'
import {sneakersReducer} from "../../entities/shop/model/sneakers";
import {cartReducer} from "../../entities/cart/model/cart";

export const store = configureStore({
    reducer: {sneakersReducer, cartReducer},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch