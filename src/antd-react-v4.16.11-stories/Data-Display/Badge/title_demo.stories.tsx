import React from 'react';
import ReactDOM from 'react-dom';

import { Badge, Avatar } from 'antd';

/**
 * 
 * 设置鼠标放在状态点上时显示的文字。
 * 
 * 
 * 
 * The badge will display `title` when hovered over, instead of `count`.
 * 
 * 
 */
export const title_demo = () => {
	return ReactDOM.render(
	  <>
	    <Badge count={5} title="Custom hover text">
	      <Avatar shape="square" size="large" />
	    </Badge>
	    <Badge count={-5} title="Negative">
	      <Avatar shape="square" size="large" />
	    </Badge>
	  </>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Display/Badge',
	component: Badge,
}