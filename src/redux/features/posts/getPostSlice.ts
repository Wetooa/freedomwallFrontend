

import { DataProps } from '@/types/interfaces';
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface GetPostState extends DataProps {
  isShowing: boolean;
  data: DataProps[];
  isLoadingData: boolean;
}

const initialState: GetPostState = {
  isShowing: false,
  _id: undefined,
  createdAt: '',
  updatedAt: '',
  codeName: '',
  message: '',
  data: [],
  isLoadingData: true,
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
    setData: (state, action: PayloadAction<DataProps[]>) => {
      state.data = action.payload;
      state.isLoadingData = false;
    },
  },
})

// Action creators are generated for each case reducer function
export const { showPost, hidePost, setData} = getPostSlice.actions
export default getPostSlice.reducer