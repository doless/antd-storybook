import React from 'react';
import ReactDOM from 'react-dom';

import { message, Button } from 'antd';

const success = () => {
  const hide = message.loading('Action in progress..', 0);
  // Dismiss manually and asynchronously
  setTimeout(hide, 2500);
};

/**
 * 
 * 进行全局 loading，异步自行移除。
 * 
 * 
 * 
 * Display a global loading indicator, which is dismissed by itself asynchronously.
 * 
 * 
 */
export const loading_demo = () => {
	return ReactDOM.render(<Button onClick={success}>Display a loading indicator</Button>, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Feedback/Message',
	component: message,
}