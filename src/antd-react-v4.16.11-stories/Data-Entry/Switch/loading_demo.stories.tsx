import React from 'react';
import ReactDOM from 'react-dom';

import { Switch } from 'antd';

/**
 * 
 * 标识开关操作仍在执行中。
 * 
 * 
 * 
 * Mark a pending state of switch.
 * 
 * 
 */
export const loading_demo = () => {
	return ReactDOM.render(
	  <>
	    <Switch loading defaultChecked />
	    <br />
	    <Switch size="small" loading />
	  </>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Entry/Switch',
	component: Switch,
}