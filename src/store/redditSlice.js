import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import { getSubredditPosts } from "../api/reddit";

const redditAdapter = createEntityAdapter();

const initialState = redditAdapter.getInitialState({
  searchTerm: '',
  selectedSubreddit: '/r/pics/',
  status: 'idle',
  error: null
});


// Redux Thunk to get posts from a subreddit
export const fetchPosts = createAsyncThunk('reddit/fetchPosts', async (subreddit) => {
  try {
    const response = await getSubredditPosts(subreddit);
    return response;
  } catch (err) {
    console.log(err);
  }
})

export const redditSlice = createSlice({
  name: 'reddit',
  initialState,
  reducers: {
    // setPosts: (state, action) => {
    //   state.posts.push(action.payload);
    // },
    setSearchTerm: (state, action) => {
     state.searchTerm = action.payload;
    },
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
        state.status = 'suceeded'
        // add any fetched posts to the array
        redditAdapter.upsertMany(state, action.payload)
      })
      .addCase(fetchPosts.rejected, (state, action) => {
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
    selectAll: selectAllReddit,
    selectById: selectPostById,
    selectIds: selectPostIds
    // pass in a selector that returns the posts slice of state
  } = redditAdapter.getSelectors((state => state.reddit))

