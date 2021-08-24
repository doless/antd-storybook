import React from 'react';
import ReactDOM from 'react-dom';

import { Card } from 'antd';

/**
 * 
 * 包含标题、内容、操作区域。
 * 
 * 
 * 
 * A basic card containing a title, content and an extra corner content. Supports two sizes: `default` and `small`.
 * 
 * 
 */
export const basic = () => {
	return ReactDOM.render(
	  <>
	    <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
	      <p>Card content</p>
	      <p>Card content</p>
	      <p>Card content</p>
	    </Card>
	    <Card size="small" title="Small size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
	      <p>Card content</p>
	      <p>Card content</p>
	      <p>Card content</p>
	    </Card>
	  </>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Display/Card',
	component: Card,
}