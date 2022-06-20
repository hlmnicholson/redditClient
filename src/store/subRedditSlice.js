import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import { getSubreddits } from "../api/reddit";

const subredditAdapter = createEntityAdapter();

const initialState = subredditAdapter.getInitialState({
  status: 'idle',
  error: null
});

// Redux thunk to get list of subreddits
export const fetchSubreddits = createAsyncThunk('subreddit/fetchSubreddits', async () => {
  try {
    const response = await getSubreddits();
    return response;
  } catch (err) {
    console.log(err)
  }
})

export const subredditSlice = createSlice({
  name: 'subreddit',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchSubreddits.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchSubreddits.fulfilled, (state, action) => {
        state.status = 'succeeded'
        // add any fetched subreddits to the array
        subredditAdapter.upsertMany(state, action.payload)
      })
      .addCase(fetchSubreddits.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export default subredditSlice.reducer;

// Export the customised selectors for this adapter using 'getSelectors'
export const {
  selectAll: selectAllSubreddits,
  selectById: selectSubredditById,
  selectIds: selectSubredditIds
  // pass in a selector that returns the posts slice of state
} = subredditAdapter.getSelectors((state => state.subreddit))