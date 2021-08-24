import React from 'react';
import ReactDOM from 'react-dom';

import { Button, notification } from 'antd';

const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    className: 'custom-class',
    style: {
      width: 600,
    },
  });
};

/**
 * 
 * 使用 style 和 className 来定义样式。
 * 
 * 
 * 
 * The style and className are available to customize Notification.
 * 
 * 
 */
export const custom_style = () => {
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