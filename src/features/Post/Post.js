import React from 'react';
import Card from '../../components/Card/Card';

// posts are dynamically rendered by the Home component to here
let test = 'I am a Post'

const Post = () => {
  return (
    <Card data={test} />
  );
}
 
export default Post;

