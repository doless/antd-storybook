import React from 'react';
import ReactDOM from 'react-dom';

import { Spin, Space } from 'antd';

/**
 * 
 * 小的用于文本加载，默认用于卡片容器级加载，大的用于**页面级**加载。
 * 
 * 
 * 
 * A small `Spin` is used for loading text, default sized `Spin` for loading a card-level block, and large `Spin` used for loading a **page**.
 * 
 * 
 */
export const size_demo = () => {
	return ReactDOM.render(
	  <Space size="middle">
	    <Spin size="small" />
	    <Spin />
	    <Spin size="large" />
	  </Space>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Feedback/Spin',
	component: Spin,
}