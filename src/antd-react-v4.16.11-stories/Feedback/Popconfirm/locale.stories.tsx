import React from 'react';
import ReactDOM from 'react-dom';

import { Popconfirm } from 'antd';

/**
 * 
 * 使用 `okText` 和 `cancelText` 自定义按钮文字。
 * 
 * 
 * 
 * Set `okText` and `cancelText` props to customize the button's labels.
 * 
 * 
 */
export const locale = () => {
	return ReactDOM.render(
	  <Popconfirm title="Are you sure？" okText="Yes" cancelText="No">
	    <a href="#">Delete</a>
	  </Popconfirm>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Feedback/Popconfirm',
	component: Popconfirm,
}