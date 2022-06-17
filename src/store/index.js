import { configureStore } from "@reduxjs/toolkit";
import redditReducer from './redditSlice';
import subredditReducer from './subRedditSlice';

export default configureStore({
  reducer: {
    reddit: redditReducer,
    subreddit: subredditReducer
  }
})
