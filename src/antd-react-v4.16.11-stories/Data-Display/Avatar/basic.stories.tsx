import Icon from '@ant-design/icons';
import React from 'react';
import ReactDOM from 'react-dom';

import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

/**
 * 
 * 头像有三种尺寸，两种形状可选。
 * 
 * 
 * 
 * Three sizes and two shapes are available.
 * 
 * 
 */
export const basic = () => {
	return ReactDOM.render(
	  <>
	    <div>
	      <Avatar size={64} icon={<UserOutlined />} />
	      <Avatar size="large" icon={<UserOutlined />} />
	      <Avatar icon={<UserOutlined />} />
	      <Avatar size="small" icon={<UserOutlined />} />
	    </div>
	    <div>
	      <Avatar shape="square" size={64} icon={<UserOutlined />} />
	      <Avatar shape="square" size="large" icon={<UserOutlined />} />
	      <Avatar shape="square" icon={<UserOutlined />} />
	      <Avatar shape="square" size="small" icon={<UserOutlined />} />
	    </div>
	  </>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Display/Avatar',
	component: Avatar,
}