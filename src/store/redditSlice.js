import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
// RENAME
import { getComments, getSubredditPosts, searchRedditPosts } from "../api/reddit";

const redditAdapter = createEntityAdapter();

const initialState = redditAdapter.getInitialState({
  // searchTerm: '',
  selectedSubreddit: '/r/pics/',
  status: 'idle',
  error: null
});

// adding extra state values to each post
const postsWithMetaData = (posts) => {
  return posts.map((post) => ({
    ...post,
    showingComments: false,
    comments: [],
    loadingComments: false,
    errorComments: false
  }));
}

// Redux Thunk to get posts from a subreddit
export const fetchPosts = createAsyncThunk('reddit/fetchPosts', async (subreddit) => {
    try {
      const response = await getSubredditPosts(subreddit);
      return postsWithMetaData(response);
    } catch (err) {
      console.log(err);
    }
})

// Redux Thunk to get posts from a search of the API
export const fetchSearchResults = createAsyncThunk('reddit/fetchSearchResults', async (searchTerm) => {
    try {
      const response = await searchRedditPosts(searchTerm);
      return postsWithMetaData(response);
    } catch (err) {
      console.log(err);
    }
})

// Redux Thunk to get comments on selected post
export const fetchComments = createAsyncThunk('reddit/fetchComments', async (permalink, id) => {
  try {
    const response = await getComments(permalink);
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
    setSelectedSubreddit(state, action) {
      state.selectedSubreddit = action.payload;
    },
    voteAdded(state, action) {
      const { postId, vote } = action.payload
      const existingPost = state.entities[postId]
      if (existingPost) {
        vote === 'upVote' ? existingPost.score++ : existingPost.score--
        }
    },
    toggleShowingComments(state, action) {
      state.posts[action.payload].showingComments = !state.posts[action.payload].showingComments
    }
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
      .addCase(fetchSearchResults.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchSearchResults.fulfilled, (state, action) => {
        state.status = 'succeeded'
        // add any fetched posts to the array
        redditAdapter.setAll(state, action.payload)
      })
      .addCase(fetchSearchResults.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(fetchComments.pending, (state, action) => {
        // state.status = 'loading'
        // Don't fetch comments if they're set as hidden
        // ******EXAMINE THIS*******
        state.posts[action.payload].showingComments = !state.posts[action.payload].showingComments;
        if (!state.posts[action.payload].showingComments) {
          return;
        }
        state.posts[action.payload.index].loadingComments = true;

      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        // state.status = 'succeeded'
        
        // add any fetched posts to the array
        redditAdapter.setAll(state.comments, action.payload)
      })
      .addCase(fetchComments.rejected, (state, action) => {
        // state.status = 'failed'
        state.error = action.error.message
      })
  }
})
  
// Action creators are generated for each case reducer function
export const { setSelectedSubreddit, voteAdded } = redditSlice.actions;
  
export default redditSlice.reducer;
  
// Export the customised selectors for this adapter using 'getSelectors'
export const {
    selectAll: selectAllRedditPosts,
    selectById: selectPostById,
    selectIds: selectPostIds
    // pass in a selector that returns the posts slice of state
  } = redditAdapter.getSelectors((state => state.reddit))
