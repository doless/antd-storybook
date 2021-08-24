import React from 'react';
import ReactDOM from 'react-dom';

import { message, Button } from 'antd';

const success = () => {
  message.success('This is a prompt message for success, and it will disappear in 10 seconds', 10);
};

/**
 * 
 * 自定义时长 `10s`，默认时长为 `3s`。
 * 
 * 
 * 
 * Customize message display duration from default `3s` to `10s`.
 * 
 * 
 */
export const duration_demo = () => {
	return ReactDOM.render(<Button onClick={success}>Customized display duration</Button>, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Feedback/Message',
	component: message,
}