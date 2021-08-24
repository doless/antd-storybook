import React from 'react';
import ReactDOM from 'react-dom';

import { Input } from 'antd';

/**
 * 
 * 没有边框。
 * 
 * 
 * 
 * No border.
 * 
 * 
 */
export const borderless = () => {
	return ReactDOM.render(<Input placeholder="Borderless" bordered={false} />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Data-Entry/Input',
	component: Input,
}