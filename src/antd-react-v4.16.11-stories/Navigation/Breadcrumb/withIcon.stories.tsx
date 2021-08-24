import Icon from '@ant-design/icons';
import React from 'react';
import ReactDOM from 'react-dom';

import { Breadcrumb } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';

/**
 * 
 * 图标放在文字前面。
 * 
 * 
 * 
 * The icon should be placed in front of the text.
 * 
 * 
 */
export const withIcon = () => {
	return ReactDOM.render(
	  <Breadcrumb>
	    <Breadcrumb.Item href="">
	      <HomeOutlined />
	    </Breadcrumb.Item>
	    <Breadcrumb.Item href="">
	      <UserOutlined />
	      <span>Application List</span>
	    </Breadcrumb.Item>
	    <Breadcrumb.Item>Application</Breadcrumb.Item>
	  </Breadcrumb>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Navigation/Breadcrumb',
	component: Breadcrumb,
}