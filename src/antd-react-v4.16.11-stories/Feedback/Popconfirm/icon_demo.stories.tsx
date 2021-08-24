import Icon from '@ant-design/icons';
import React from 'react';
import ReactDOM from 'react-dom';

import { Popconfirm } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

/**
 * 
 * 自定义提示 `icon`。
 * 
 * 
 * 
 * Set `icon` props to customize the icon.
 * 
 * 
 */
export const icon_demo = () => {
	return ReactDOM.render(
	  <Popconfirm title="Are you sure？" icon={<QuestionCircleOutlined style={{ color: 'red' }} />}>
	    <a href="#">Delete</a>
	  </Popconfirm>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Feedback/Popconfirm',
	component: Popconfirm,
}