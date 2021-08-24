import React from 'react';
import ReactDOM from 'react-dom';

import { Divider } from 'antd';

/**
 * 
 * 使用 `type="vertical"` 设置为行内的垂直分割线。
 * 
 * 
 * 
 * Use `type="vertical"` make it vertical.
 * 
 * 
 */
export const vertical_demo = () => {
	return ReactDOM.render(
	  <>
	    Text
	    <Divider type="vertical" />
	    <a href="#">Link</a>
	    <Divider type="vertical" />
	    <a href="#">Link</a>
	  </>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Layout/Divider',
	component: Divider,
}