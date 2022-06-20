import { createSlice, createAsyncThunk, createEntityAdapter, createSelector } from "@reduxjs/toolkit";
// import { createSelector } from 'react-redux';
// RENAME
import { getSubredditPosts, searchRedditPosts } from "../api/reddit";

const redditAdapter = createEntityAdapter();

const initialState = redditAdapter.getInitialState({
  // searchTerm: '',
  selectedSubreddit: '/r/pics/',
  status: 'idle',
  error: null
});

// Redux Thunk to get posts from a subreddit
export const fetchPosts = createAsyncThunk('reddit/fetchPosts', async (subreddit, { getState }) => {
    try {
      const response = await getSubredditPosts(subreddit);
      return response;
    } catch (err) {
      console.log(err);
    }
})

// Redux Thunk to get posts from a search
export const getSearchResults = createAsyncThunk('reddit/searchResults', async (searchTerm, { getState }) => {
    try {
      const response = await searchRedditPosts(searchTerm);
      return response;
    } catch (err) {
      console.log(err);
    }
})

export const redditSlice = createSlice({
  name: 'reddit',
  initialState,
  reducers: {
    // setSearchTerm: (state, action) => {
    //  state.searchTerm = action.payload;
    // },
    setSelectedSubreddit: (state, action) => {
      state.selectedSubreddit = action.payload;
    },
  
    // voteAdded (can use the logic of reactionAdded from redux tutorial)

  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        // add any fetched posts to the array
        redditAdapter.setAll(state, action.payload)
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })

      .addCase(getSearchResults.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(getSearchResults.fulfilled, (state, action) => {
        state.status = 'succeeded'
        // add any fetched posts to the array
        redditAdapter.setAll(state, action.payload)
      })
      .addCase(getSearchResults.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})
  
// Action creators are generated for each case reducer function
export const { setSearchTerm, setSelectedSubreddit } = redditSlice.actions;
  
export default redditSlice.reducer;
  
// Export the customised selectors for this adapter using 'getSelectors'
export const {
    selectAll: selectAllRedditPosts,
    selectById: selectPostById,
    selectIds: selectPostIds
    // pass in a selector that returns the posts slice of state
  } = redditAdapter.getSelectors((state => state.reddit))
