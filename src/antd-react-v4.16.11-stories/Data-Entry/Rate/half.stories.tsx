import React from 'react';
import ReactDOM from 'react-dom';

import { Rate } from 'antd';

/**
 * 
 * 支持选中半星。
 * 
 * 
 * 
 * Support select half star.
 * 
 * 
 */
export const half = () => {
	return ReactDOM.render(<Rate allowHalf defaultValue={2.5} />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Data-Entry/Rate',
	component: Rate,
}