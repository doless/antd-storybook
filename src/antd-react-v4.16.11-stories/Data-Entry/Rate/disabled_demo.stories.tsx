import React from 'react';
import ReactDOM from 'react-dom';

import { Rate } from 'antd';

/**
 * 
 * 只读，无法进行鼠标交互。
 * 
 * 
 * 
 * Read only, can't use mouse to interact.
 * 
 * 
 */
export const disabled_demo = () => {
	return ReactDOM.render(<Rate disabled defaultValue={2} />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Data-Entry/Rate',
	component: Rate,
}