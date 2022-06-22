
import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../../components/Card/Card';
import { selectPostById } from '../../store/redditSlice';
import { TimeAgo } from './TimeAgo';
import { VoteButtons } from './VoteButtons';
import { Comments } from './Comments';
import './Post.css';


const Post = ({ postId }) => {
  const post = useSelector(state => selectPostById(state, postId))

  const handleClick = (post) => post.showingComments === false ? true : false;

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
            <button
              type="button"
              className="comments-button"
              onClick={(post) => handleClick(post)}>
                SHOW COMMENTS
            </button>
            {post.showingComments &&
            <Comments permalink={post.permalink} />
            }
          </div>
        </div>
      </Card>
    </article>
  );
}
 
export default Post;

