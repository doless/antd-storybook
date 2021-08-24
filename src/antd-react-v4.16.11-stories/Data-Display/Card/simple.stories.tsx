import React from 'react';
import ReactDOM from 'react-dom';

import { Card } from 'antd';

/**
 * 
 * 只包含内容区域。
 * 
 * 
 * 
 * A simple card only containing a content area.
 * 
 * 
 */
export const simple = () => {
	return ReactDOM.render(
	  <Card style={{ width: 300 }}>
	    <p>Card content</p>
	    <p>Card content</p>
	    <p>Card content</p>
	  </Card>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Display/Card',
	component: Card,
}