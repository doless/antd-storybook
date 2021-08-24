import Icon from '@ant-design/icons';
import React from 'react';
import ReactDOM from 'react-dom';

import { Avatar, Image } from 'antd';
import { UserOutlined } from '@ant-design/icons';

/**
 * 
 * 支持三种类型：图片、Icon 以及字符，其中 Icon 和字符型可以自定义图标颜色及背景色。
 * 
 * 
 * 
 * Image, Icon and letter are supported, and the latter two kinds of avatar can have custom colors and background colors.
 * 
 * 
 */
export const type = () => {
	return ReactDOM.render(
	  <>
	    <Avatar icon={<UserOutlined />} />
	    <Avatar>U</Avatar>
	    <Avatar size={40}>USER</Avatar>
	    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
	    <Avatar
	      src={<Image src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
	    />
	    <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar>
	    <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
	  </>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Display/Avatar',
	component: Avatar,
}