import React from 'react';
import ReactDOM from 'react-dom';

import { Breadcrumb } from 'antd';

/**
 * 
 * 最简单的用法。
 * 
 * 
 * 
 * The simplest use.
 * 
 * 
 */
export const basic = () => {
	return ReactDOM.render(
	  <Breadcrumb>
	    <Breadcrumb.Item>Home</Breadcrumb.Item>
	    <Breadcrumb.Item>
	      <a href="">Application Center</a>
	    </Breadcrumb.Item>
	    <Breadcrumb.Item>
	      <a href="">Application List</a>
	    </Breadcrumb.Item>
	    <Breadcrumb.Item>An Application</Breadcrumb.Item>
	  </Breadcrumb>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Navigation/Breadcrumb',
	component: Breadcrumb,
}