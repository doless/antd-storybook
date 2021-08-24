import React from 'react';
import ReactDOM from 'react-dom';

import { Button, notification } from 'antd';

const openNotification = () => {
  const args = {
    message: 'Notification Title',
    description:
      'I will never close automatically. This is a purposely very very long description that has many many characters and words.',
    duration: 0,
  };
  notification.open(args);
};

/**
 * 
 * 自定义通知框自动关闭的延时，默认 `4.5s`，取消自动关闭只要将该值设为 `0` 即可。
 * 
 * 
 * 
 * `Duration` can be used to specify how long the notification stays open. After the duration time elapses, the notification closes automatically. If not specified, default value is 4.5 seconds. If you set the value to 0, the notification box will never close automatically.
 * 
 * 
 */
export const duration_demo = () => {
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