import React from 'react';
import ReactDOM from 'react-dom';

import { Checkbox } from 'antd';

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

/**
 * 
 * 简单的 checkbox。
 * 
 * 
 * 
 * Basic usage of checkbox.
 * 
 * 
 */
export const basic = () => {
	return ReactDOM.render(<Checkbox onChange={onChange}>Checkbox</Checkbox>, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Data-Entry/Checkbox',
	component: Checkbox,
}