import React from 'react';
import ReactDOM from 'react-dom';

import { Menu, Dropdown, Button, Space } from 'antd';

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);

/**
 * 
 * 支持 6 个弹出位置。
 * 
 * 
 * 
 * Support 6 placements.
 * 
 * 
 */
export const placement_demo = () => {
	return ReactDOM.render(
	  <Space direction="vertical">
	    <Space wrap>
	      <Dropdown overlay={menu} placement="bottomLeft">
	        <Button>bottomLeft</Button>
	      </Dropdown>
	      <Dropdown overlay={menu} placement="bottomCenter">
	        <Button>bottomCenter</Button>
	      </Dropdown>
	      <Dropdown overlay={menu} placement="bottomRight">
	        <Button>bottomRight</Button>
	      </Dropdown>
	    </Space>
	    <Space wrap>
	      <Dropdown overlay={menu} placement="topLeft">
	        <Button>topLeft</Button>
	      </Dropdown>
	      <Dropdown overlay={menu} placement="topCenter">
	        <Button>topCenter</Button>
	      </Dropdown>
	      <Dropdown overlay={menu} placement="topRight">
	        <Button>topRight</Button>
	      </Dropdown>
	    </Space>
	  </Space>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Navigation/Dropdown',
	component: Dropdown,
}