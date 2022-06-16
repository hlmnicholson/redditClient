
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
    <article key={post.id}>
      <div className="post-wrapper">
      <Card>
        <div className="post-container">
          <div className="score">
            {post.score}
          </div>
          <div className="content">
            Title: {post.title}
            Author: {post.author}
            <img src={post.url} alt="" />
            {epochDateConverter(post.created)}
          </div>
        </div>
      </Card>
      </div>
    </article>
  );
}
 
export default Post;

