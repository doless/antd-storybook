import Icon from '@ant-design/icons';
import React from 'react';
import ReactDOM from 'react-dom';

import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;

/**
 * 
 * 一种支持封面、头像、标题和描述信息的卡片。
 * 
 * 
 * 
 * A Card that supports `cover`, `avatar`, `title` and `description`.
 * 
 * 
 */
export const meta = () => {
	return ReactDOM.render(
	  <Card
	    style={{ width: 300 }}
	    cover={
	      <img
	        alt="example"
	        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
	      />
	    }
	    actions={[
	      <SettingOutlined key="setting" />,
	      <EditOutlined key="edit" />,
	      <EllipsisOutlined key="ellipsis" />,
	    ]}
	  >
	    <Meta
	      avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
	      title="Card title"
	      description="This is the description"
	    />
	  </Card>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Display/Card',
	component: Card,
}