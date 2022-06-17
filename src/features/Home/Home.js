import React, { useEffect } from 'react';
import Post from '../Post/Post';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts, selectPostIds } from '../../store/redditSlice';
import { Spinner } from '../../components/Spinner/Spinner';

const Home = () => {
  const dispatch = useDispatch();
  const postStatus = useSelector(state => state.reddit.status)
  const selectedSubreddit = useSelector(state => state.reddit.selectedSubreddit)
  const postIds = useSelector(selectPostIds)
  const error = useSelector(state => state.reddit.error)

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

  let content

  if (postStatus === 'loading') {
    content = <Spinner test="Loading..." />
  } else if (postStatus === 'succeeded') {
    content = postIds.map(postId => (
      <Post key={postId} postId={postId} />
      ))
    } else if (postStatus === 'error') {
      content = <div>{error}</div>
    }


  return (
    <section className="post-list">
    {content}
    </section>
  );
}
 
export default Home;
