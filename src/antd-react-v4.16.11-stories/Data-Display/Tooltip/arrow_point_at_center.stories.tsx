import React from 'react';
import ReactDOM from 'react-dom';

import { Tooltip, Button } from 'antd';

/**
 * 
 * 设置了 `arrowPointAtCenter` 后，箭头将指向目标元素的中心。
 * 
 * 
 * 
 * By specifying `arrowPointAtCenter` prop, the arrow will point to the center of the target element.
 * 
 * 
 */
export const arrow_point_at_center = () => {
	return ReactDOM.render(
	  <>
	    <Tooltip placement="topLeft" title="Prompt Text">
	      <Button>Align edge / 边缘对齐</Button>
	    </Tooltip>
	    <Tooltip placement="topLeft" title="Prompt Text" arrowPointAtCenter>
	      <Button>Arrow points to center / 箭头指向中心</Button>
	    </Tooltip>
	  </>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Display/Tooltip',
	component: Tooltip,
}