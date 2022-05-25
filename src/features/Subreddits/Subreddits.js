import React from 'react';
import Card from '../../components/Card/Card';

let test = 'I am a subreddit';

const Subreddits = () => {
  return (
    <div>
      <Card data={test} />
    </div>
  );
}
 
export default Subreddits;