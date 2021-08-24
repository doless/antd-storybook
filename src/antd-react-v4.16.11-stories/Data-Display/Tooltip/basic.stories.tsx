import React from 'react';
import ReactDOM from 'react-dom';

import { Tooltip } from 'antd';

/**
 * 
 * 最简单的用法。
 * 
 * 
 * 
 * The simplest usage.
 * 
 * 
 */
export const basic = () => {
	return ReactDOM.render(
	  <Tooltip title="prompt text">
	    <span>Tooltip will show on mouse enter.</span>
	  </Tooltip>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Display/Tooltip',
	component: Tooltip,
}