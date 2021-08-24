import Icon from '@ant-design/icons';
import React from 'react';
import ReactDOM from 'react-dom';

import { Badge } from 'antd';
import { NotificationOutlined } from '@ant-design/icons';

/**
 * 
 * 没有具体的数字。
 * 
 * 
 * 
 * This will simply display a red badge, without a specific count. If count equals 0, it won't display the dot.
 * 
 * 
 */
export const dot_demo = () => {
	return ReactDOM.render(
	  <>
	    <Badge dot>
	      <NotificationOutlined style={{ fontSize: 16 }} />
	    </Badge>
	    <Badge dot>
	      <a href="#">Link something</a>
	    </Badge>
	  </>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Display/Badge',
	component: Badge,
}