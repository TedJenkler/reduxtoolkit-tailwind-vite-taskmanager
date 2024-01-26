import { createSlice } from '@reduxjs/toolkit'
import data from "../../../data.json"

const initialState = data;

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        test: (state) => {
            return state
          },
    }
})

export const { test } = taskSlice.actions

export default taskSlice.reducer;