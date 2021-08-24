import React from 'react';
import ReactDOM from 'react-dom';
import './context_menu_demo.css';

import { Menu, Dropdown } from 'antd';

const menu = (
  <Menu>
    <Menu.Item key="1">1st menu item</Menu.Item>
    <Menu.Item key="2">2nd menu item</Menu.Item>
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

/**
 * 
 * 默认是移入触发菜单，可以点击鼠标右键触发。
 * 
 * 
 * 
 * The default trigger mode is `hover`, you can change it to `contextMenu`.
 * 
 * 
 */
export const context_menu_demo = () => {
	return ReactDOM.render(
	  <Dropdown overlay={menu} trigger={['contextMenu']}>
	    <div
	      className="site-dropdown-context-menu"
	      style={{
	        textAlign: 'center',
	        height: 200,
	        lineHeight: '200px',
	      }}
	    >
	      Right Click on here
	    </div>
	  </Dropdown>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Navigation/Dropdown',
	component: Dropdown,
}