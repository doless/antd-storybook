import React from 'react';
import ReactDOM from 'react-dom';

import { Calendar } from 'antd';

function onPanelChange(value, mode) {
  console.log(value.format('YYYY-MM-DD'), mode);
}

/**
 * 
 * 一个通用的日历面板，支持年/月切换。
 * 
 * 
 * 
 * A basic calendar component with Year/Month switch.
 * 
 * 
 */
export const basic = () => {
	return ReactDOM.render(<Calendar onPanelChange={onPanelChange} />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Data-Display/Calendar',
	component: Calendar,
}