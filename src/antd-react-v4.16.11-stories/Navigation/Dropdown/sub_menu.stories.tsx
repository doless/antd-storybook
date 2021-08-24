import Icon from '@ant-design/icons';
import React from 'react';
import ReactDOM from 'react-dom';

import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

const menu = (
  <Menu>
    <Menu.ItemGroup title="Group title">
      <Menu.Item>1st menu item</Menu.Item>
      <Menu.Item>2nd menu item</Menu.Item>
    </Menu.ItemGroup>
    <SubMenu title="sub menu">
      <Menu.Item>3rd menu item</Menu.Item>
      <Menu.Item>4th menu item</Menu.Item>
    </SubMenu>
    <SubMenu title="disabled sub menu" disabled>
      <Menu.Item>5d menu item</Menu.Item>
      <Menu.Item>6th menu item</Menu.Item>
    </SubMenu>
  </Menu>
);

/**
 * 
 * 传入的菜单里有多个层级。
 * 
 * 
 * 
 * The menu has multiple levels.
 * 
 * 
 */
export const sub_menu = () => {
	return ReactDOM.render(
	  <Dropdown overlay={menu}>
	    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
	      Cascading menu <DownOutlined />
	    </a>
	  </Dropdown>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Navigation/Dropdown',
	component: Dropdown,
}