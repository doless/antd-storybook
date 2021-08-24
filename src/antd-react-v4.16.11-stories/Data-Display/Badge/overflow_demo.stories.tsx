import React from 'react';
import ReactDOM from 'react-dom';

import { Badge, Avatar } from 'antd';

/**
 * 
 * 超过 `overflowCount` 的会显示为 `${overflowCount}+`，默认的 `overflowCount` 为 `99`。
 * 
 * 
 * 
 * `${overflowCount}+` is displayed when count is larger than `overflowCount`. The default value of `overflowCount` is `99`.
 * 
 * 
 */
export const overflow_demo = () => {
	return ReactDOM.render(
	  <>
	    <Badge count={99}>
	      <Avatar shape="square" size="large" />
	    </Badge>
	    <Badge count={100}>
	      <Avatar shape="square" size="large" />
	    </Badge>
	    <Badge count={99} overflowCount={10}>
	      <Avatar shape="square" size="large" />
	    </Badge>
	    <Badge count={1000} overflowCount={999}>
	      <Avatar shape="square" size="large" />
	    </Badge>
	  </>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Display/Badge',
	component: Badge,
}