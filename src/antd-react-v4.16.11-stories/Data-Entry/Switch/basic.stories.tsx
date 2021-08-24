import React from 'react';
import ReactDOM from 'react-dom';

import { Switch } from 'antd';

function onChange(checked) {
  console.log(`switch to ${checked}`);
}

/**
 * 
 * 最简单的用法。
 * 
 * 
 * 
 * The most basic usage.
 * 
 * 
 */
export const basic = () => {
	return ReactDOM.render(<Switch defaultChecked onChange={onChange} />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Data-Entry/Switch',
	component: Switch,
}