

import { DataProps } from '@/types/interfaces';
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface ShowPostState extends DataProps {
  isShowing: boolean;
}

const initialState: ShowPostState= {
  isShowing: false,
  _id: undefined,
  createdAt: '',
  updatedAt: '',
  codeName: '',
  message: ''
}

export const getPostSlice = createSlice({
  name: 'getPost',
  initialState,
  reducers: {
    showPost: (state, action: PayloadAction<DataProps>) => {
      state.isShowing = true;
      for (const key in action.payload) {
        (state as any)[key] = (action.payload as any)[key];
      }
    },
    hidePost: (state) => {
      state.isShowing = false;
    },
  },
})

// Action creators are generated for each case reducer function
export const { showPost, hidePost} = getPostSlice.actions
export default getPostSlice.reducer