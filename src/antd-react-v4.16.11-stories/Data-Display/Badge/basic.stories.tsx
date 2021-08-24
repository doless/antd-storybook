import Icon from '@ant-design/icons';
import React from 'react';
import ReactDOM from 'react-dom';

import { Badge, Avatar } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';

/**
 * 
 * 简单的徽章展示，当 `count` 为 `0` 时，默认不显示，但是可以使用 `showZero` 修改为显示。
 * 
 * 
 * 
 * Simplest Usage. Badge will be hidden when `count` is `0`, but we can use `showZero` to show it.
 * 
 * 
 */
export const basic = () => {
	return ReactDOM.render(
	  <>
	    <Badge count={5}>
	      <Avatar shape="square" size="large" />
	    </Badge>
	    <Badge count={0} showZero>
	      <Avatar shape="square" size="large" />
	    </Badge>
	    <Badge count={<ClockCircleOutlined style={{ color: '#f5222d' }} />}>
	      <Avatar shape="square" size="large" />
	    </Badge>
	  </>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Display/Badge',
	component: Badge,
}