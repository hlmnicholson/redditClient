import React, { useEffect } from 'react';
import Card from '../../components/Card/Card';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSubreddits, selectSubredditState } from '../../store/subRedditSlice';

const Subreddits = () => {
  const dispatch = useDispatch();
  const { subreddits } = useSelector(selectSubredditState);

  const subredditStatus = useSelector(state => state.subreddits.status)


  useEffect(() => {
    if (subredditStatus === 'idle') {
      dispatch(fetchSubreddits())
    }
  }, [subredditStatus, dispatch])

  console.log(subredditStatus)
// the selected button needs to dispatch an action to the reddit reducer

  return (
    <div>
      {subreddits.map((subreddit, index) => (
        <Card key={index}>
          <div className="subreddit-wrapper">
            <img src={subreddit.data.icon_img} alt={subreddit.data.title} />
            {subreddit.data.title}
          </div>
        </Card>
      ))}
    </div>
  );
}
 
export default Subreddits;