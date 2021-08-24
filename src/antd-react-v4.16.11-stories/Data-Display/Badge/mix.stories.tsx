import React from 'react';
import ReactDOM from 'react-dom';

import { Badge, Avatar } from 'antd';

/**
 * 
 * 测试 `count` `stauts` `color` `dot` 共用的情况。
 * 
 * 
 * 
 * Using `count/dot` with custom `stauts/color`.
 * 
 * 
 */
export const mix = () => {
	return ReactDOM.render(
	  <>
	    <Badge count={5} status="success">
	      <Avatar shape="square" size="large" />
	    </Badge>
	    <Badge count={5} status="warning">
	      <Avatar shape="square" size="large" />
	    </Badge>
	    <Badge count={5} color="blue">
	      <Avatar shape="square" size="large" />
	    </Badge>
	    <Badge count={5} color="#fa541c">
	      <Avatar shape="square" size="large" />
	    </Badge>
	    <Badge dot status="success">
	      <Avatar shape="square" size="large" />
	    </Badge>
	    <Badge dot status="warning">
	      <Avatar shape="square" size="large" />
	    </Badge>
	    <Badge dot color="blue">
	      <Avatar shape="square" size="large" />
	    </Badge>
	    <Badge dot color="#fa541c">
	      <Avatar shape="square" size="large" />
	    </Badge>
	  </>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Display/Badge',
	component: Badge,
}