import React from "react";
import { useDispatch } from "react-redux";
import { voteAdded } from "../../store/redditSlice";

export const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch();

  return (
    <>
      <button
        key="upVote"
        type="button"
        className="vote-buttons"
        onClick={() => 
          dispatch(voteAdded({ postId: post.id, reaction: "upVote" }))}>
          UP
      </button>
      {post.score}
      <button
      key="downVote"
      type="button"
      className="vote-buttons"
      onClick={() => 
        dispatch(voteAdded({ postId: post.id, reaction: "downVote" }))}>
        DOWN
      </button>
    </>
  )
}