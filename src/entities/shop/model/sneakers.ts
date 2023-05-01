import {collection, getDocs} from "firebase/firestore";
import {db} from "../../../firebase";
import {createAppAsyncThunk} from "../../../shared/lib/create-async-app-thunk";
import {createSlice} from "@reduxjs/toolkit";


const sneackersCollectionRef = collection(db, 'sneackers')

export const fetchSneakers = createAppAsyncThunk<responseSneakersType[], void>(
    'sneakers', async (_, {rejectWithValue}) => {
        try {
            const data = await getDocs(sneackersCollectionRef)
            const filteredData = data.docs
                .map((doc) => ({...doc.data(), id: doc.id}))
            return (filteredData as responseSneakersType[])
        } catch (e) {
            console.error(e)
            return rejectWithValue(null)
        }
    }
)

type responseSneakersType = {
    id: string
    model: string
    photo: string
    title: string
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