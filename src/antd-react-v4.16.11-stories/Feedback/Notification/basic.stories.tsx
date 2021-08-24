import React from 'react';
import ReactDOM from 'react-dom';

import { Button, notification } from 'antd';

const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    onClick: () => {
      console.log('Notification Clicked!');
    },
  });
};

/**
 * 
 * 最简单的用法，4.5 秒后自动关闭。
 * 
 * 
 * 
 * The simplest usage that close the notification box after 4.5s.
 * 
 * 
 */
export const basic = () => {
	return ReactDOM.render(
	  <Button type="primary" onClick={openNotification}>
	    Open the notification box
	  </Button>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Feedback/Notification',
	component: Button,
}