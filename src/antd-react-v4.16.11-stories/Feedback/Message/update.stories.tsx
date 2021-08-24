import React from 'react';
import ReactDOM from 'react-dom';

import { Button, message } from 'antd';

const key = 'updatable';

const openMessage = () => {
  message.loading({ content: 'Loading...', key });
  setTimeout(() => {
    message.success({ content: 'Loaded!', key, duration: 2 });
  }, 1000);
};

/**
 * 
 * 可以通过唯一的 `key` 来更新内容。
 * 
 * 
 * 
 * Update message content with unique `key`.
 * 
 * 
 */
export const update = () => {
	return ReactDOM.render(
	  <Button type="primary" onClick={openMessage}>
	    Open the message box
	  </Button>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Feedback/Message',
	component: Button,
}