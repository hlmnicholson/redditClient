import React from 'react';
import Post from '../Post/Post';
// react-redux
// redditSlice
// import { children as posts } from '../../api/mockApi.js';
import { useSelector, useDispatch } from 'react-redux';
// import { fetchPosts } from '../../store/redditSlice';

//get posts in here, dynamically render to posts

const Home = () => {
  // useSelector to get state from Reddit
  //dispatch
  const dispatch = useDispatch();
  const reddit = useSelector(state => state.reddit);
  const { posts, searchTerm, selectedSubreddit, isLoading, error } = reddit;

  /**
   * useEffect to dispatch and fetchPosts for selected Subreddit
   * 
   * toggleComments
   * 
   * 
   * isLoading functionality?
   * 
   * if error?
   * 
   * if posts.length === 0
   */

  return (
    <>
      {posts.map((post, index) => (
        <Post 
          key={index}
          post={post}
        />

      ))}
    </>
  );
}
 
export default Home;
