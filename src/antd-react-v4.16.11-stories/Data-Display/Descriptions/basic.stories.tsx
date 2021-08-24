import React from 'react';
import ReactDOM from 'react-dom';

import { Descriptions } from 'antd';

/**
 * 
 * 简单的展示。
 * 
 * 
 * 
 * Simplest Usage.
 * 
 * 
 */
export const basic = () => {
	return ReactDOM.render(
	  <Descriptions title="User Info">
	    <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
	    <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
	    <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
	    <Descriptions.Item label="Remark">empty</Descriptions.Item>
	    <Descriptions.Item label="Address">
	      No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
	    </Descriptions.Item>
	  </Descriptions>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Display/Descriptions',
	component: Descriptions,
}