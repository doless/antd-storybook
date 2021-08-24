import Icon from '@ant-design/icons';
import React from 'react';
import ReactDOM from 'react-dom';

import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="https://www.antgroup.com">1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="https://www.aliyun.com">2nd menu item</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

/**
 * 
 * 默认是移入触发菜单，可以点击触发。
 * 
 * 
 * 
 * The default trigger mode is `hover`, you can change it to `click`.
 * 
 * 
 */
export const trigger_demo = () => {
	return ReactDOM.render(
	  <Dropdown overlay={menu} trigger={['click']}>
	    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
	      Click me <DownOutlined />
	    </a>
	  </Dropdown>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Navigation/Dropdown',
	component: Dropdown,
}