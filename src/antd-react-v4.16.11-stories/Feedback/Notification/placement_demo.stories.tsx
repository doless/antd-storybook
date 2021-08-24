import Icon from '@ant-design/icons';
import React from 'react';
import ReactDOM from 'react-dom';

import { Button, notification, Divider, Space } from 'antd';
import {
  RadiusUpleftOutlined,
  RadiusUprightOutlined,
  RadiusBottomleftOutlined,
  RadiusBottomrightOutlined,
} from '@ant-design/icons';

const openNotification = placement => {
  notification.info({
    message: `Notification ${placement}`,
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    placement,
  });
};

/**
 * 
 * 通知从右上角、右下角、左下角、左上角弹出。
 * 
 * 
 * 
 * A notification box can appear from the `topRight`, `bottomRight`, `bottomLeft` or `topLeft` of the viewport.
 * 
 * 
 */
export const placement_demo = () => {
	return ReactDOM.render(
	  <div>
	    <Space>
	      <Button type="primary" onClick={() => openNotification('topLeft')}>
	        <RadiusUpleftOutlined />
	        topLeft
	      </Button>
	      <Button type="primary" onClick={() => openNotification('topRight')}>
	        <RadiusUprightOutlined />
	        topRight
	      </Button>
	    </Space>
	    <Divider />
	    <Space>
	      <Button type="primary" onClick={() => openNotification('bottomLeft')}>
	        <RadiusBottomleftOutlined />
	        bottomLeft
	      </Button>
	      <Button type="primary" onClick={() => openNotification('bottomRight')}>
	        <RadiusBottomrightOutlined />
	        bottomRight
	      </Button>
	    </Space>
	  </div>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Feedback/Notification',
	component: Button,
}