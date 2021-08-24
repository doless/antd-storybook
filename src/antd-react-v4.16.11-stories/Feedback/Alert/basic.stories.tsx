import React from 'react';
import ReactDOM from 'react-dom';

import { Alert } from 'antd';

/**
 * 
 * 最简单的用法，适用于简短的警告提示。
 * 
 * 
 * 
 * The simplest usage for short messages.
 * 
 * 
 */
export const basic = () => {
	return ReactDOM.render(<Alert message="Success Text" type="success" />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Feedback/Alert',
	component: Alert,
}