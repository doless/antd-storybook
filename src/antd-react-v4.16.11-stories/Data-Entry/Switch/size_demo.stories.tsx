import React from 'react';
import ReactDOM from 'react-dom';

import { Switch } from 'antd';

/**
 * 
 * `size="small"` 表示小号开关。
 * 
 * 
 * 
 * `size="small"` represents a small sized switch.
 * 
 * 
 */
export const size_demo = () => {
	return ReactDOM.render(
	  <>
	    <Switch defaultChecked />
	    <br />
	    <Switch size="small" defaultChecked />
	  </>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Entry/Switch',
	component: Switch,
}