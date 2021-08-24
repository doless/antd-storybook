import Icon from '@ant-design/icons';
import React from 'react';
import ReactDOM from 'react-dom';
import './badge.css';

import { Avatar, Badge } from 'antd';
import { UserOutlined } from '@ant-design/icons';

/**
 * 
 * 通常用于消息提示。
 * 
 * 
 * 
 * Usually used for reminders and notifications.
 * 
 * 
 */
export const badge = () => {
	return ReactDOM.render(
	  <>
	    <span className="avatar-item">
	      <Badge count={1}>
	        <Avatar shape="square" icon={<UserOutlined />} />
	      </Badge>
	    </span>
	    <span>
	      <Badge dot>
	        <Avatar shape="square" icon={<UserOutlined />} />
	      </Badge>
	    </span>
	  </>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Display/Avatar',
	component: Avatar,
}