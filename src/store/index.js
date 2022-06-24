import { configureStore } from "@reduxjs/toolkit";
import redditReducer from './redditSlice';
import subredditReducer from './subRedditSlice';
import commentReducer from './commentSlice';

export default configureStore({
  reducer: {
    reddit: redditReducer,
    subreddit: subredditReducer,
    comments: commentReducer
  }
})
