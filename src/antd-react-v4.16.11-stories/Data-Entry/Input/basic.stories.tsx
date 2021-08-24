import React from 'react';
import ReactDOM from 'react-dom';

import { Input } from 'antd';

/**
 * 
 * 基本使用。
 * 
 * 
 * 
 * Basic usage example.
 * 
 * 
 */
export const basic = () => {
	return ReactDOM.render(<Input placeholder="Basic usage" />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Data-Entry/Input',
	component: Input,
}