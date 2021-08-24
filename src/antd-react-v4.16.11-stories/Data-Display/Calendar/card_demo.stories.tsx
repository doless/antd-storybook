import React from 'react';
import ReactDOM from 'react-dom';
import './card_demo.css';

import { Calendar } from 'antd';

function onPanelChange(value, mode) {
  console.log(value, mode);
}

/**
 * 
 * 用于嵌套在空间有限的容器中。
 * 
 * 
 * 
 * Nested inside a container element for rendering in limited space.
 * 
 * 
 */
export const card_demo = () => {
	return ReactDOM.render(
	  <div className="site-calendar-demo-card">
	    <Calendar fullscreen={false} onPanelChange={onPanelChange} />
	  </div>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Display/Calendar',
	component: Calendar,
}