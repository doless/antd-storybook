import Icon from '@ant-design/icons';
import React from 'react';
import ReactDOM from 'react-dom';

import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item icon={<DownOutlined />} disabled>
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item (disabled)
      </a>
    </Menu.Item>
    <Menu.Item disabled>
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item (disabled)
      </a>
    </Menu.Item>
    <Menu.Item danger>a danger item</Menu.Item>
  </Menu>
);

/**
 * 
 * 最简单的下拉菜单。
 * 
 * 
 * 
 * The most basic dropdown menu.
 * 
 * 
 */
export const basic = () => {
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