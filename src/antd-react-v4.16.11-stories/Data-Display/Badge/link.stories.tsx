import React from 'react';
import ReactDOM from 'react-dom';

import { Badge, Avatar } from 'antd';

/**
 * 
 * 用 a 标签进行包裹即可。
 * 
 * 
 * 
 * The badge can be wrapped with `a` tag to make it linkable.
 * 
 * 
 */
export const link = () => {
	return ReactDOM.render(
	  <a href="#">
	    <Badge count={5}>
	      <Avatar shape="square" size="large" />
	    </Badge>
	  </a>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Display/Badge',
	component: Badge,
}