import React from 'react';
import ReactDOM from 'react-dom';

import { Skeleton } from 'antd';

/**
 * 
 * 显示动画效果。
 * 
 * 
 * 
 * Display active animation.
 * 
 * 
 */
export const active_demo = () => {
	return ReactDOM.render(<Skeleton active />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Feedback/Skeleton',
	component: Skeleton,
}