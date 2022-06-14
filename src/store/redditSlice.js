import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSubredditPosts } from "../api/reddit";
// import { children } from "../api/mockApi";

const initialState = {
  posts: [],
  searchTerm: '',
  selectedSubreddit: '/r/pics/',
  status: 'idle',
  error: null
};

export const redditSlice = createSlice({
  name: 'redditPosts',
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
    },
    // voteAdded (can use the logic of reactionAdded from redux tutorial)
  },
  extraReducers(builder) {
    builder
      .addCase(getPostsFromSubreddit.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(getPostsFromSubreddit.fulfilled, (state, action) => {
        state.status = 'suceeded'
        // add any fetched posts to the array
        state.posts = state.posts.concat(action.payload)
      })
      .addCase(getPostsFromSubreddit.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

// Action creators are generated for each case reducer function
export const { setPosts, setSearchTerm, setSelectedSubreddit } = redditSlice.actions;

export default redditSlice.reducer;

// Redux Thunk to get posts from a subreddit

/**
 * 1. A "start" action is dispatched before the request, to indicate that the request is in progress.
 * This may be used to track loading state to allow skipping duplicate requests or show loading indicators in the UI.
 */
export const getPostsFromSubreddit = createAsyncThunk('reddit/getPostsFromSubreddit', async (subreddit) => {
    try {
      const response = await getSubredditPosts(subreddit);
      console.log(response)
      return response.data.children
    } catch (err) {
      console.log(err);
  }
})


export const selectRedditState = state => state.reddit
