import React from 'react';
import ReactDOM from 'react-dom';

import { Checkbox } from 'antd';

/**
 * 
 * checkbox 不可用。
 * 
 * 
 * 
 * Disabled checkbox.
 * 
 * 
 */
export const disabled_demo = () => {
	return ReactDOM.render(
	  <>
	    <Checkbox defaultChecked={false} disabled />
	    <br />
	    <Checkbox defaultChecked disabled />
	  </>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Entry/Checkbox',
	component: Checkbox,
}