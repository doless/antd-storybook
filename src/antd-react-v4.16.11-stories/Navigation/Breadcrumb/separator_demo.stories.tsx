import React from 'react';
import ReactDOM from 'react-dom';

import { Breadcrumb } from 'antd';

/**
 * 
 * 使用 `separator=">"` 可以自定义分隔符。
 * 
 * 
 * 
 * The separator can be customized by setting the separator property: `separator=">"`.
 * 
 * 
 */
export const separator_demo = () => {
	return ReactDOM.render(
	  <Breadcrumb separator=">">
	    <Breadcrumb.Item>Home</Breadcrumb.Item>
	    <Breadcrumb.Item href="">Application Center</Breadcrumb.Item>
	    <Breadcrumb.Item href="">Application List</Breadcrumb.Item>
	    <Breadcrumb.Item>An Application</Breadcrumb.Item>
	  </Breadcrumb>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Navigation/Breadcrumb',
	component: Breadcrumb,
}