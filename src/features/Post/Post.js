
import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import Card from '../../components/Card/Card';
import { selectPostById } from '../../store/redditSlice';
import { TimeAgo } from './TimeAgo';
import { VoteButtons } from './VoteButtons';
import './Post.css';


const Post = ({ postId }) => {
  const post = useSelector(state => selectPostById(state, postId))
  return (
    <article className="post-wrapper" key={post.id}>
      <Card>
        <div className="post-container">
          <VoteButtons score={post.score} postId={post.id} />
          <div className="content">
            Title: {post.title}
            Author: {post.author}
            <img src={post.url} alt="" />
            <TimeAgo timestamp={post.created_utc} />
          </div>
        </div>
      </Card>
    </article>
  );
}
 
export default Post;

