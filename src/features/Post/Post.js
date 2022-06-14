
import React from 'react';
import Card from '../../components/Card/Card';
import './Post.css';

// posts are dynamically rendered by the Home component to here

// UPDATE THIS
const epochDateConverter = (epoch) => {
  const fullDate = new Date(epoch *100).toLocaleString();
  return fullDate
}

const Post = ({ post }) => {
  return (
    <Card>
      <div className="post-wrapper">
      Title: {post.data.title}
      Author: {post.data.author}
      <img src={post.data.url} alt="" />
      {post.data.score}
      {epochDateConverter(post.data.created)}
    </div>
    </Card>
  );
}
 
export default Post;

