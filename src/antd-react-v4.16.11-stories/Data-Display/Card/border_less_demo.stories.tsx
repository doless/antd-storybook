import React from 'react';
import ReactDOM from 'react-dom';
import './border_less_demo.css';

import { Card } from 'antd';

/**
 * 
 * 在灰色背景上使用无边框的卡片。
 * 
 * 
 * 
 * A borderless card on a gray background.
 * 
 * 
 */
export const border_less_demo = () => {
	return ReactDOM.render(
	  <div className="site-card-border-less-wrapper">
	    <Card title="Card title" bordered={false} style={{ width: 300 }}>
	      <p>Card content</p>
	      <p>Card content</p>
	      <p>Card content</p>
	    </Card>
	  </div>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Display/Card',
	component: Card,
}