import { configureStore } from '@reduxjs/toolkit'
import createPostReducer from "./features/posts/createPostSlice"
import getPostReducer from "./features/posts/getPostSlice"

export const store = configureStore({
  reducer: {createPostReducer, getPostReducer},
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch