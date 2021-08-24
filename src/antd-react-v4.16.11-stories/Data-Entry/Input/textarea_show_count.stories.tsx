import React from 'react';
import ReactDOM from 'react-dom';

import { Input } from 'antd';

const { TextArea } = Input;

const onChange = e => {
  console.log('Change:', e.target.value);
};

/**
 * 
 * 展示字数提示。
 * 
 * 
 * 
 * Show character counting.
 * 
 * 
 */
export const textarea_show_count = () => {
	return ReactDOM.render(<TextArea showCount maxLength={100} onChange={onChange} />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Data-Entry/Input',
	component: Input,
}