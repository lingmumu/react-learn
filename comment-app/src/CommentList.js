import React from 'react';
import Comment from './Comment';
const CommentList = props => 
  (
    <div>
      {props.comments.map((comment, i) => <Comment key={i} comment={comment} onClick={props.onClick} id={i}/>)}
    </div>
  )
export default CommentList;