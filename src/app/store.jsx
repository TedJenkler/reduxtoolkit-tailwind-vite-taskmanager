import { configureStore } from '@reduxjs/toolkit'
import taskReducer from "../features/task/addTask"

export const store = configureStore({
  reducer: {
    test: taskReducer,
  },
})