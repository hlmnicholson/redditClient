import React, { useEffect } from 'react';
import Card from '../../components/Card/Card';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSubreddits, selectAllSubreddits } from '../../store/subRedditSlice';
import { setSelectedSubreddit } from '../../store/redditSlice';
// import { Spinner } from '../../components/Spinner/Spinner';
import './Subreddits.css';

export const Subreddits = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchSubreddits())
  }, [dispatch])
  
  const subreddits = useSelector(selectAllSubreddits)
  
  return (
    <div>
      <Card className="subreddit-card">
        <h2>Subreddits</h2>
          <ul className="subreddit-list">
            {subreddits.map((subreddit) => (
              <li 
                key={subreddit.id}>
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
