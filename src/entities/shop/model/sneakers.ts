import {createAppAsyncThunk} from "../../../shared/lib/create-async-app-thunk";
import {createSlice} from "@reduxjs/toolkit";
import axios, {AxiosResponse} from "axios";
import {changeFetching} from "../../../app/store/app";



export const fetchSneakers = createAppAsyncThunk<responseSneakersType[], void>(
    'sneakers', async (_, {rejectWithValue, dispatch}) => {
        try {
            const res: AxiosResponse<responseSneakersType[]> = await axios.get('https://64577bed0c15cb148209b464.mockapi.io/products')
            const data = res.data

            return data as responseSneakersType[]
        } catch (e) {
            console.error(e)
            return rejectWithValue(null)
        } finally {
            setTimeout(() => {
                dispatch(changeFetching(false))
            }, 1000)
        }
    }
)

export type responseSneakersType = {
    id: number
    brand: string
    photo: string[]
    model: string
    other: boolean
    gender: string
    price: number
}

export type SneakersStateType = responseSneakersType & {
    count: number
}

const initialState: SneakersStateType[] = []

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