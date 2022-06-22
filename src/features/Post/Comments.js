import React from "react";
import { useDispatch } from "react-redux";
import { fetchComments } from "../../store/redditSlice";



export const Comments = ({ permalink }) => {
  const dispatch = useDispatch();

  const getComments = (permalink) => {
    dispatch(fetchComments(permalink))
  }

  // loading etc stages?

  console.log(getComments(permalink));

}