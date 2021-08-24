import React from 'react';
import ReactDOM from 'react-dom';

import { Empty } from 'antd';

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
	return ReactDOM.render(<Empty />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Data-Display/Empty',
	component: Empty,
}