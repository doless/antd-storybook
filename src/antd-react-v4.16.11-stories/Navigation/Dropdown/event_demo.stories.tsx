import Icon from '@ant-design/icons';
import React from 'react';
import ReactDOM from 'react-dom';

import { Menu, Dropdown, message } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const onClick = ({ key }) => {
  message.info(`Click on item ${key}`);
};

const menu = (
  <Menu onClick={onClick}>
    <Menu.Item key="1">1st menu item</Menu.Item>
    <Menu.Item key="2">2nd menu item</Menu.Item>
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

/**
 * 
 * 点击菜单项后会触发事件，用户可以通过相应的菜单项 key 进行不同的操作。
 * 
 * 
 * 
 * An event will be triggered when you click menu items, in which you can make different operations according to item's key.
 * 
 * 
 */
export const event_demo = () => {
	return ReactDOM.render(
	  <Dropdown overlay={menu}>
	    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
	      Hover me, Click menu item <DownOutlined />
	    </a>
	  </Dropdown>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Navigation/Dropdown',
	component: Dropdown,
}