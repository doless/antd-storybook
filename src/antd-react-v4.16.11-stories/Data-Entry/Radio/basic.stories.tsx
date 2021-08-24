import React from 'react';
import ReactDOM from 'react-dom';

import { Radio } from 'antd';

/**
 * 
 * 最简单的用法。
 * 
 * 
 * 
 * The simplest use.
 * 
 * 
 */
export const basic = () => {
	return ReactDOM.render(<Radio>Radio</Radio>, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Data-Entry/Radio',
	component: Radio,
}