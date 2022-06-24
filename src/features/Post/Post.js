
import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../../components/Card/Card';
import { selectPostById } from '../../store/redditSlice';
import { fetchComments, toggleShowingComments } from '../../store/commentSlice';
import { TimeAgo } from './TimeAgo';
import { VoteButtons } from './VoteButtons';
import { Comments } from './Comments';
import './Post.css';


const Post = ({ postId, onToggleComments }) => {
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
            <Comments permalink={post.permalink} postId={post.id} showingComments={post.showingComments} />
          </div>
        </div>
      </Card>
    </article>
  );
}
 
export default Post;

