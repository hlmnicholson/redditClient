import { createSlice } from "@reduxjs/toolkit";

export const subRedditSlice = createSlice({
  name: 'subReddit',
  initialState: {
    value: 0
  },
  reducers: {
    incremenet: state => {
      state.value += 1
    },
    decremenet: state => {
      state.value += 1
    }
  }
})

// Action creators are generated for each case reducer function
export const { incremenet, decrement } = subRedditSlice.actions;

export default subRedditSlice.reducer;