import React from 'react';
import ReactDOM from 'react-dom';

import { Skeleton } from 'antd';

/**
 * 
 * 最简单的占位效果。
 * 
 * 
 * 
 * Simplest Skeleton usage.
 * 
 * 
 */
export const basic = () => {
	return ReactDOM.render(<Skeleton />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Feedback/Skeleton',
	component: Skeleton,
}