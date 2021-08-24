import React from 'react';
import ReactDOM from 'react-dom';

import { Rate } from 'antd';

/**
 * 
 * 最简单的用法。
 * 
 * 
 * 
 * The simplest usage.
 * 
 * 
 */
export const basic = () => {
	return ReactDOM.render(<Rate />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Data-Entry/Rate',
	component: Rate,
}