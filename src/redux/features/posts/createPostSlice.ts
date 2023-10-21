import { createSlice } from '@reduxjs/toolkit'

export interface CreatePostState {
  isShowing: boolean;
}

const initialState: CreatePostState = {
  isShowing: false,
}

export const createPostSlice = createSlice({
  name: 'createPost',
  initialState,
  reducers: {
    toggleShowCreatePost: (state) => {
      state.isShowing = !state.isShowing;
    },
    showCreatePost: (state) => {
      state.isShowing = true;
    },
    hideCreatePost: (state) => {
      state.isShowing = false;
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { toggleShowCreatePost, showCreatePost, hideCreatePost } = createPostSlice.actions

export default createPostSlice.reducer