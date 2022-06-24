import React, { useEffect } from "react";
// import { useDispatch } from "react-redux";
import { fetchComments, selectAllComments } from "../../store/commentSlice";
import { useSelector, useDispatch } from "react-redux";
import Card from "../../components/Card/Card";
import { toggleShowingComments } from "../../store/redditSlice";

// should toggleShowingComments be on the post slice?

export const Comments = ({ postId, permalink, showingComments }) => {
  const dispatch = useDispatch()
  let commentsArray = useSelector(selectAllComments);

  // let commentsArray = useSelector(state => state.comments.commentsArray);
  
  // loading etc stages?
  // console.log(state.comments.commentsArray)
  
  // useEffect(() => {
  //   if (showingComments) {
  //     dispatch(fetchComments(permalink))
  //     console.log(commentsArray)
  //   }
  // }, [showingComments, permalink, commentsArray, dispatch])


  /**
   *     {/* { showComments &&
      commentsArray.map(comment => (
        <Card className='comment'>
          <div>
        {comment.body}
        </div>
        </Card>
   */

  return (
  <>
    <button
    type="button"
    className="comments-button"
    onClick={() => 
      dispatch(toggleShowingComments({ postId: postId }))}>
      SHOW COMMENTS
    </button>   
  </>
  )
}