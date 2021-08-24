import React from 'react';
import ReactDOM from 'react-dom';

import { Descriptions } from 'antd';

/**
 * 
 * 垂直的列表。
 * 
 * 
 * 
 * Simplest Usage.
 * 
 * 
 */
export const vertical_demo = () => {
	return ReactDOM.render(
	  <Descriptions title="User Info" layout="vertical">
	    <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
	    <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
	    <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
	    <Descriptions.Item label="Address" span={2}>
	      No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
	    </Descriptions.Item>
	    <Descriptions.Item label="Remark">empty</Descriptions.Item>
	  </Descriptions>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Display/Descriptions',
	component: Descriptions,
}