import { configureStore } from '@reduxjs/toolkit'
import createPostReducer from "./features/posts/createPostSlice"

export const store = configureStore({
  reducer: {createPostReducer},
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch