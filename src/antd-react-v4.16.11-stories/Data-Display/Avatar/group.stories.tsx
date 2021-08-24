import Icon from '@ant-design/icons';
import React from 'react';
import ReactDOM from 'react-dom';

import { Avatar, Divider, Tooltip } from 'antd';
import { UserOutlined, AntDesignOutlined } from '@ant-design/icons';

const Demo = () => (
  <>
    <Avatar.Group>
      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
      <Tooltip title="Ant User" placement="top">
        <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
      </Tooltip>
      <Avatar style={{ backgroundColor: '#1890ff' }} icon={<AntDesignOutlined />} />
    </Avatar.Group>
    <Divider />
    <Avatar.Group maxCount={2} maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
      <Tooltip title="Ant User" placement="top">
        <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
      </Tooltip>
      <Avatar style={{ backgroundColor: '#1890ff' }} icon={<AntDesignOutlined />} />
    </Avatar.Group>
    <Divider />
    <Avatar.Group
      maxCount={2}
      size="large"
      maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}
    >
      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
      <Tooltip title="Ant User" placement="top">
        <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
      </Tooltip>
      <Avatar style={{ backgroundColor: '#1890ff' }} icon={<AntDesignOutlined />} />
    </Avatar.Group>
  </>
);

/**
 * 
 * 头像组合展现。
 * 
 * 
 * 
 * Avatar group display.
 * 
 * 
 */
export const group = () => {
	return ReactDOM.render(<Demo />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Data-Display/Avatar',
	component: Avatar,
}