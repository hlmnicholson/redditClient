import React from "react";
import { useDispatch } from "react-redux";
import { voteAdded } from "../../store/redditSlice";

export const VoteButtons = ({ score, postId }) => {
  const dispatch = useDispatch();

  return (
    <>
      <button
        key="upVote"
        type="button"
        className="vote-buttons"
        onClick={() => 
          dispatch(voteAdded({ postId: postId, vote: "upVote" }))}>
          UP
      </button>
      {score}
      <button
      key="downVote"
      type="button"
      className="vote-buttons"
      onClick={() => 
        dispatch(voteAdded({ postId: postId, vote: "downVote" }))}>
        DOWN
      </button>
    </>
  )
}