import { createSlice } from '@reduxjs/toolkit'
import data from "../../../data.json"

const initialState = data;

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addtask: (state, action) => {
            state.boards[0].columns[0].tasks.push({title: action.payload.title, description: action.payload.description, subtasks: action.payload.subtasks})
          },
    }
})

export const { addtask } = taskSlice.actions

export default taskSlice.reducer;