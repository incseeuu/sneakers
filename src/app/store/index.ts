import { configureStore } from '@reduxjs/toolkit'
import {sneakersReducer} from "../../entities/shop/model/sneakers";
import {cartReducer} from "../../entities/cart/model/cart";
import {appReducer} from "./app";
import {filterReducer} from "../../entities/shop/model/filters";

export const store = configureStore({
    reducer: {sneakersReducer, cartReducer, appReducer, filterReducer}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch