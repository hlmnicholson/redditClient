import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
// RENAME
import { getComments } from "../api/reddit";

const commentsAdapter = createEntityAdapter();

const initialState = commentsAdapter.getInitialState({
  loadingComments: false,
  error: false
});

console.log(initialState.entities)

// Redux Thunk to get comments on selected post
export const fetchComments = createAsyncThunk('comments/fetchComments', async (permalink) => {
  try {
    const comments = await getComments(permalink);
    return comments;
  } catch (err) {
    console.log(err);
  }
})

export const commentSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
    .addCase(fetchComments.pending, (state, action) => {
      // state.status = 'loading'
      // Don't fetch comments if they're set as hidden
      // ******EXAMINE THIS*******
      state.showingComments = !state.showingComments;
      if (!state.showingComments) {
        return;
      }
      state.loadingComments = true;
      state.error = false;
      console.log(state.entities)
      console.log(state.showingComments)
        
        // if (state.showingComments) {
        //   state.loadingComments = true;
        // }        
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        // state.status = 'succeeded'
        state.loadingComments = false;
        // state.commentsArray = action.payload.comments;
        console.log(action.payload)
        commentsAdapter.setAll(state, action.payload)

        // add any fetched posts to the array
        // redditAdapter.setAll(state.comments, action.payload)
      })
      .addCase(fetchComments.rejected, (state, action) => {
        // state.status = 'failed'
        state.loadingComments = false;
        state.error = action.error.message;
      })
  }
})
  
// Action creators are generated for each case reducer function
export const { toggleShowingComments } = commentSlice.actions;
  
export default commentSlice.reducer;
  
// Export the customised selectors for this adapter using 'getSelectors'
export const {
    selectAll: selectAllComments,
    selectById: selectCommentById,
    selectIds: selectCommentsIds
    // pass in a selector that returns the posts slice of state
  } = commentsAdapter.getSelectors((state => state.comments))
