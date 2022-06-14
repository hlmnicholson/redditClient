import { createSlice } from "@reduxjs/toolkit";
// import { getSubredditPosts } from "../api/reddit";
import { children } from "../api/mockApi";

const initialState = {
  posts: children,
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
      state.posts = action.payload;
    },
    setSearchTerm: (state, action) => {
     state.searchTerm = action.payload;
    },
    setSelectedSubreddit: (state, action) => {
      state.selectedSubreddit = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setPosts, setSearchTerm, setSelectedSubreddit } = redditSlice.actions;

export default redditSlice.reducer;

// Redux Thunk to get posts from a subreddit

/**
 * 1. A "start" action is dispatched before the request, to indicate that the request is in progress.
 * This may be used to track loading state to allow skipping duplicate requests or show loading indicators in the UI.
 */
// export const getPostsFromSubreddit = () => {
//   return async (dispatch, getState) => {
//     try {
//       const posts = await getSubredditPosts(getState.selectedSubreddit);
//       dispatch(setPosts(posts));
//     } catch (err) {
//       console.log(err);
//     }
//   }
// }