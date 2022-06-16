import React, { useEffect } from 'react';
import Card from '../../components/Card/Card';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSubreddits, selectSubredditState } from '../../store/subRedditSlice';
import './Subreddits.css';

const Subreddits = () => {
  const dispatch = useDispatch();
  const { subreddits } = useSelector(selectSubredditState);
  const subredditStatus = useSelector(state => state.subreddits.status)


  useEffect(() => {
    if (subredditStatus === 'idle') {
      dispatch(fetchSubreddits())
    }
  }, [subredditStatus, dispatch])

// the selected button needs to dispatch an action to the reddit reducer
  console.log(subreddits.map(sub => [sub.display_name, sub.id]))

  return (
    <div>
        <Card className="subreddit-card">
          <h2>Subreddits</h2>
          <ul className="subreddit-list">
          {subreddits.map((subreddit) => (
            // add className dynamically to allow for routing
            <li key={subreddit.id}>
              <button>
                <img 
                  className="icon" 
                  src={subreddit.icon_img || `https://api.adorable.io/avatars/25/${subreddit.display_name}`} 
                  alt={`${subreddit.display_name}`} 
                />
                {subreddit.display_name}
              </button>
            </li>
            ))}
          </ul>
        </Card>
    </div>
  );
}
 
export default Subreddits;