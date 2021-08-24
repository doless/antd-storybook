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

const Context = React.createContext({ name: 'Default' });

const Demo = () => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = placement => {
    api.info({
      message: `Notification ${placement}`,
      description: <Context.Consumer>{({ name }) => `Hello, ${name}!`}</Context.Consumer>,
      placement,
    });
  };

  return (
    <Context.Provider value={{ name: 'Ant Design' }}>
      {contextHolder}
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
    </Context.Provider>
  );
};

/**
 * 
 * 通过 `notification.useNotification` 创建支持读取 context 的 `contextHolder`。
 * 
 * 
 * 
 * Use `notification.useNotification` to get `contextHolder` with context accessible issue.
 * 
 * 
 */
export const hooks = () => {
	return ReactDOM.render(<Demo />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Feedback/Notification',
	component: Button,
}