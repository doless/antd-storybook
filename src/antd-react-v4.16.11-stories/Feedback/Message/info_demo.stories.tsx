import React from 'react';
import ReactDOM from 'react-dom';

import { message, Button } from 'antd';

const info = () => {
  message.info('This is a normal message');
};

/**
 * 
 * 信息提醒反馈。
 * 
 * 
 * 
 * Normal message for information.
 * 
 * 
 */
export const info_demo = () => {
	return ReactDOM.render(
	  <Button type="primary" onClick={info}>
	    Display normal message
	  </Button>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Feedback/Message',
	component: message,
}