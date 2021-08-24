import React from 'react';
import ReactDOM from 'react-dom';

import { Alert } from 'antd';

/**
 * 
 * 可以自定义关闭，自定义的文字会替换原先的关闭 `Icon`。
 * 
 * 
 * 
 * Replace the default icon with customized text.
 * 
 * 
 */
export const close_text = () => {
	return ReactDOM.render(<Alert message="Info Text" type="info" closeText="Close Now" />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Feedback/Alert',
	component: Alert,
}