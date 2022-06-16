import React, { useEffect } from 'react';
import Post from '../Post/Post';
// import { children as posts } from '../../api/mockApi.js';
import { useSelector, useDispatch } from 'react-redux';
import { selectRedditState, fetchPosts } from '../../store/redditSlice';

//get posts in here, dynamically render to posts

const Home = () => {
  const dispatch = useDispatch();
  const { posts, searchTerm, selectedSubreddit, status, error } = useSelector(selectRedditState);
  const postStatus = useSelector(state => state.reddit.status)

  useEffect(() => {
      dispatch(fetchPosts(selectedSubreddit))
    }, [selectedSubreddit, dispatch])


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
          key={post.id}
          post={post} 
        />

      ))}
    </>
  );
}
 
export default Home;
