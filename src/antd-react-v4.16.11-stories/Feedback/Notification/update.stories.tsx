import React from 'react';
import ReactDOM from 'react-dom';

import { Button, notification } from 'antd';

const key = 'updatable';

const openNotification = () => {
  notification.open({
    key,
    message: 'Notification Title',
    description: 'description.',
  });
  setTimeout(() => {
    notification.open({
      key,
      message: 'New Title',
      description: 'New description.',
    });
  }, 1000);
};

/**
 * 
 * 可以通过唯一的 key 来更新内容。
 * 
 * 
 * 
 * Update content with unique key.
 * 
 * 
 */
export const update = () => {
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