import React from 'react';
import ReactDOM from 'react-dom';

import { Breadcrumb } from 'antd';

/**
 * 
 * 使用 `Breadcrumb.Separator` 可以自定义分隔符。
 * 
 * 
 * 
 * The separator can be customized by setting the separator property: `Breadcrumb.Separator`.
 * 
 * 
 */
export const separator_component = () => {
	return ReactDOM.render(
	  <Breadcrumb separator="">
	    <Breadcrumb.Item>Location</Breadcrumb.Item>
	    <Breadcrumb.Separator>:</Breadcrumb.Separator>
	    <Breadcrumb.Item href="">Application Center</Breadcrumb.Item>
	    <Breadcrumb.Separator />
	    <Breadcrumb.Item href="">Application List</Breadcrumb.Item>
	    <Breadcrumb.Separator />
	    <Breadcrumb.Item>An Application</Breadcrumb.Item>
	  </Breadcrumb>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Navigation/Breadcrumb',
	component: Breadcrumb,
}