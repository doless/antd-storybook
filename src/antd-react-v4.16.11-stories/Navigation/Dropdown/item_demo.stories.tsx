import Icon from '@ant-design/icons';
import React from 'react';
import ReactDOM from 'react-dom';

import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item key="1">
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3" disabled>
      3rd menu item（disabled）
    </Menu.Item>
  </Menu>
);

/**
 * 
 * 分割线和不可用菜单项。
 * 
 * 
 * 
 * Divider and disabled menu item.
 * 
 * 
 */
export const item_demo = () => {
	return ReactDOM.render(
	  <Dropdown overlay={menu}>
	    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
	      Hover me <DownOutlined />
	    </a>
	  </Dropdown>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Navigation/Dropdown',
	component: Dropdown,
}