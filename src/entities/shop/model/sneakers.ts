import {createAppAsyncThunk} from "../../../shared/lib/create-async-app-thunk";
import {createSlice} from "@reduxjs/toolkit";
import axios, {AxiosResponse} from "axios";



export const fetchSneakers = createAppAsyncThunk<responseSneakersType[], void>(
    'sneakers', async (_, {rejectWithValue}) => {
        try {
            const res: AxiosResponse<responseSneakersType[]> = await axios.get('https://64577bed0c15cb148209b464.mockapi.io/products')
            const data = res.data

            return data as responseSneakersType[]
        } catch (e) {
            console.error(e)
            return rejectWithValue(null)
        }
    }
)

export type responseSneakersType = {
    id: number
    brand: string
    photo: string[]
    model: string
    price: number
}

export type stateType = responseSneakersType & {
    count: number
}

const initialState: stateType[] = []

const slice = createSlice({
    name: 'sneakers',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSneakers.fulfilled, (state, action) => {
                return action.payload.map(el => ({...el, count: 0}))
            })
    }
})

export const sneakersReducer = slice.reducer