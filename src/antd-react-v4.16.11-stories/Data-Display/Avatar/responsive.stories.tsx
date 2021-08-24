import Icon from '@ant-design/icons';
import React from 'react';
import ReactDOM from 'react-dom';

import { Avatar } from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';

/**
 * 
 * 头像大小可以根据屏幕大小自动调整。
 * 
 * 
 * 
 * Avatar size can be automatically adjusted based on the screen size.
 * 
 * 
 */
export const responsive = () => {
	return ReactDOM.render(
	  <Avatar
	    size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
	    icon={<AntDesignOutlined />}
	  />,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Display/Avatar',
	component: Avatar,
}