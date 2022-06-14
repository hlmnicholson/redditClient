import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSubreddits } from "../api/reddit";

const initialState = {
  subreddits: [],
  status: 'idle',
  error: null
}

export const subredditSlice = createSlice({
  name: 'subreddits',
  initialState,
  reducers: {
    setSubreddits: (state, action) => {
      state.subreddits.push(action.payload);
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchSubreddits.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchSubreddits.fulfilled, (state, action) => {
        state.status = 'suceeded'
        // add any fetched subreddits to the array
        state.subreddits = state.subreddits.concat(action.payload)
      })
      .addCase(fetchSubreddits.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

// Action creators are generated for each case reducer function
export const { setSubreddits } = subredditSlice.actions;

export default subredditSlice.reducer;

// Redux thunk to get list of subreddits
export const fetchSubreddits = createAsyncThunk('subreddit/fetchSubreddits', async () => {
  try {
    const response = await getSubreddits();
    return response;
  } catch (err) {
    console.log(err)
  }
})

export const selectSubredditState = state => state.subreddits