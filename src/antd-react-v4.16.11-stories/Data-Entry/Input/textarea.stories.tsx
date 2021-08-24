import React from 'react';
import ReactDOM from 'react-dom';

import { Input } from 'antd';

const { TextArea } = Input;

/**
 * 
 * 用于多行输入。
 * 
 * 
 * 
 * For multi-line input.
 * 
 * 
 */
export const textarea = () => {
	return ReactDOM.render(<TextArea rows={4} />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Data-Entry/Input',
	component: Input,
}