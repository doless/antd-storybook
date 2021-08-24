import React from 'react';
import ReactDOM from 'react-dom';

import { Spin } from 'antd';

/**
 * 
 * 一个简单的 loading 状态。
 * 
 * 
 * 
 * A simple loading status.
 * 
 * 
 */
export const basic = () => {
	return ReactDOM.render(<Spin />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Feedback/Spin',
	component: Spin,
}