import React from 'react';
import ReactDOM from 'react-dom';

import { Popover, Button } from 'antd';

const content = (
  <>
    <p>Content</p>
    <p>Content</p>
  </>
);

/**
 * 
 * 设置了 `arrowPointAtCenter` 后，箭头将指向目标元素的中心。
 * 
 * 
 * 
 * The arrow points to the center of the target element, which set `arrowPointAtCenter`.
 * 
 * 
 */
export const arrow_point_at_center = () => {
	return ReactDOM.render(
	  <>
	    <Popover placement="topLeft" title="Title" content={content}>
	      <Button>Align edge / 边缘对齐</Button>
	    </Popover>
	    <Popover placement="topLeft" title="Title" content={content} arrowPointAtCenter>
	      <Button>Arrow points to center / 箭头指向中心</Button>
	    </Popover>
	  </>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Display/Popover',
	component: Popover,
}