import React, { useEffect } from 'react';
import Card from '../../components/Card/Card';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSubreddits, selectSubredditState } from '../../store/subRedditSlice';
import { setSelectedSubreddit } from '../../store/redditSlice';
import './Subreddits.css';

const Subreddits = () => {
  const dispatch = useDispatch();
  const { subreddits } = useSelector(selectSubredditState);
  const subredditStatus = useSelector(state => state.subreddits.status)
  const selectedSubreddit = useSelector(setSelectedSubreddit);

  useEffect(() => {
    if (subredditStatus === 'idle') {
      dispatch(fetchSubreddits())
    }
  }, [subredditStatus, dispatch])


  // console.log(subreddits.map(sub => [sub.display_name_prefixed, sub.id]))


  return (
    <div>
        <Card className="subreddit-card">
          <h2>Subreddits</h2>
          <ul className="subreddit-list">
          {subreddits.map((subreddit) => (
            // add className dynamically to allow for routing
            <li 
              key={subreddit.id}
              className={`${
                selectedSubreddit === subreddit.url && `selected-subreddit`
              }`}>
              <button 
                onClick={() => dispatch(setSelectedSubreddit(subreddit.url))}
                type="button"
              >
                <img 
                  className="subreddit-icon" 
                  src={subreddit.icon_img || `https://img.icons8.com/flat-round/344/link--v1.png`} 
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