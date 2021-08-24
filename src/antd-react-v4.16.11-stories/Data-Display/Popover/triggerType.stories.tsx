import React from 'react';
import ReactDOM from 'react-dom';

import { Popover, Button } from 'antd';

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

/**
 * 
 * 鼠标移入、聚集、点击。
 * 
 * 
 * 
 * Mouse to click, focus and move in.
 * 
 * 
 */
export const triggerType = () => {
	return ReactDOM.render(
	  <div>
	    <Popover content={content} title="Title" trigger="hover">
	      <Button>Hover me</Button>
	    </Popover>
	    <Popover content={content} title="Title" trigger="focus">
	      <Button>Focus me</Button>
	    </Popover>
	    <Popover content={content} title="Title" trigger="click">
	      <Button>Click me</Button>
	    </Popover>
	  </div>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Display/Popover',
	component: Popover,
}