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
 * 最简单的用法，浮层的大小由内容区域决定。
 * 
 * 
 * 
 * The most basic example. The size of the floating layer depends on the contents region.
 * 
 * 
 */
export const basic = () => {
	return ReactDOM.render(
	  <Popover content={content} title="Title">
	    <Button type="primary">Hover me</Button>
	  </Popover>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Display/Popover',
	component: Popover,
}