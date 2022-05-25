import { configureStore } from "@reduxjs/toolkit";
import redditReducer from './redditSlice';
import subRedditReducer from './subRedditSlice';

export default configureStore({
  reducer: {
    reddit: redditReducer,
    subReddit: subRedditReducer
  }
})
