import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSubredditPosts } from "../api/reddit";

const initialState = {
  posts: [],
  searchTerm: '',
  selectedSubreddit: '/r/pics/',
  status: 'idle',
  error: null
};

export const redditSlice = createSlice({
  name: 'reddit',
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts.push(action.payload);
    },
    setSearchTerm: (state, action) => {
     state.searchTerm = action.payload;
    },
    setSelectedSubreddit: (state, action) => {
      state.selectedSubreddit = action.payload;
      state.status = 'idle';
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
        state.posts = action.payload
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

// Action creators are generated for each case reducer function
export const { setPosts, setSearchTerm, setSelectedSubreddit } = redditSlice.actions;

export default redditSlice.reducer;

// Redux Thunk to get posts from a subreddit
export const fetchPosts = createAsyncThunk('reddit/fetchPosts', async (subreddit) => {
    try {
      const response = await getSubredditPosts(subreddit);
      return response;
    } catch (err) {
      console.log(err);
  }
})


export const selectRedditState = state => state.reddit
