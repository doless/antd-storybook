import Icon from '@ant-design/icons';
import React from 'react';
import ReactDOM from 'react-dom';

import { Button, notification } from 'antd';
import { SmileOutlined } from '@ant-design/icons';

const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    icon: <SmileOutlined style={{ color: '#108ee9' }} />,
  });
};

/**
 * 
 * 图标可以被自定义。
 * 
 * 
 * 
 * The icon can be customized to any react node.
 * 
 * 
 */
export const custom_icon = () => {
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