import { configureStore } from '@reduxjs/toolkit'
import taskReducer from "../features/boards/boards"

export const store = configureStore({
  reducer: {
    board: taskReducer,
  },
})