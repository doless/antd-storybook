import React from 'react';
import ReactDOM from 'react-dom';

import { Comment, Avatar } from 'antd';

const ExampleComment = ({ children }) => (
  <Comment
    actions={[<span key="comment-nested-reply-to">Reply to</span>]}
    author={<a>Han Solo</a>}
    avatar={
      <Avatar
        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        alt="Han Solo"
      />
    }
    content={
      <p>
        We supply a series of design principles, practical patterns and high quality design
        resources (Sketch and Axure).
      </p>
    }
  >
    {children}
  </Comment>
);

/**
 * 
 * 评论可以嵌套。
 * 
 * 
 * 
 * Comments can be nested.
 * 
 * 
 */
export const nested_demo = () => {
	return ReactDOM.render(
	  <ExampleComment>
	    <ExampleComment>
	      <ExampleComment />
	      <ExampleComment />
	    </ExampleComment>
	  </ExampleComment>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Display/Comment',
	component: Comment,
}