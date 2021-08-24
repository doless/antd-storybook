import React from 'react';
import ReactDOM from 'react-dom';

import { Badge, Avatar } from 'antd';

/**
 * 
 * 可以设置有数字徽标的大小。
 * 
 * 
 * 
 * Set size of numeral Badge.
 * 
 * 
 */
export const size_demo = () => {
	return ReactDOM.render(
	  <>
	    <Badge size="default" count={5}>
	      <Avatar shape="square" size="large" />
	    </Badge>
	    <Badge size="small" count={5}>
	      <Avatar shape="square" size="large" />
	    </Badge>
	  </>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Display/Badge',
	component: Badge,
}