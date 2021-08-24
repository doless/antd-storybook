import React from 'react';
import ReactDOM from 'react-dom';
import './inside.css';

import { Spin } from 'antd';

/**
 * 
 * 放入一个容器中。
 * 
 * 
 * 
 * Spin in a container.
 * 
 * 
 */
export const inside = () => {
	return ReactDOM.render(
	  <div className="example">
	    <Spin />
	  </div>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Feedback/Spin',
	component: Spin,
}