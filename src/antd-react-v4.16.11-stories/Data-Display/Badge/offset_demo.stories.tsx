import React from 'react';
import ReactDOM from 'react-dom';

import { Badge, Avatar } from 'antd';

/**
 * 
 * 设置状态点的位置偏移，格式为 `[left, top]`，表示状态点距默认位置左侧、上方的偏移量。
 * 
 * 
 * 
 * Set offset of the badge dot, the format is `[left, top]`, which represents the offset of the status dot from the left and top of the default position.
 * 
 * 
 */
export const offset_demo = () => {
	return ReactDOM.render(
	  <Badge count={5} offset={[10, 10]}>
	    <Avatar shape="square" size="large" />
	  </Badge>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Display/Badge',
	component: Badge,
}