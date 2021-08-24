import React from 'react';
import ReactDOM from 'react-dom';

import { Button, notification, Space } from 'antd';

const openNotificationWithIcon = type => {
  notification[type]({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
  });
};

/**
 * 
 * 通知提醒框左侧有图标。
 * 
 * 
 * 
 * A notification box with a icon at the left side.
 * 
 * 
 */
export const with_icon = () => {
	return ReactDOM.render(
	  <Space>
	    <Button onClick={() => openNotificationWithIcon('success')}>Success</Button>
	    <Button onClick={() => openNotificationWithIcon('info')}>Info</Button>
	    <Button onClick={() => openNotificationWithIcon('warning')}>Warning</Button>
	    <Button onClick={() => openNotificationWithIcon('error')}>Error</Button>
	  </Space>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Feedback/Notification',
	component: Button,
}