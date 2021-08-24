import React from 'react';
import ReactDOM from 'react-dom';

import { Skeleton } from 'antd';

/**
 * 
 * 更复杂的组合。
 * 
 * 
 * 
 * Complex combination with avatar and multiple paragraphs.
 * 
 * 
 */
export const complex = () => {
	return ReactDOM.render(<Skeleton avatar paragraph={{ rows: 4 }} />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Feedback/Skeleton',
	component: Skeleton,
}