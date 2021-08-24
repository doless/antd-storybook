import React from 'react';
import ReactDOM from 'react-dom';

import { Empty } from 'antd';

/**
 * 
 * 无描述展示。
 * 
 * 
 * 
 * Simplest Usage with no description.
 * 
 * 
 */
export const description_demo = () => {
	return ReactDOM.render(<Empty description={false} />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Data-Display/Empty',
	component: Empty,
}