import React from 'react';
import ReactDOM from 'react-dom';

import { Breadcrumb, Menu } from 'antd';

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        General
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        Layout
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        Navigation
      </a>
    </Menu.Item>
  </Menu>
);

/**
 * 
 * 面包屑支持下拉菜单。
 * 
 * 
 * 
 * Breadcrumbs support drop down menu.
 * 
 * 
 */
export const overlay_demo = () => {
	return ReactDOM.render(
	  <Breadcrumb>
	    <Breadcrumb.Item>Ant Design</Breadcrumb.Item>
	    <Breadcrumb.Item>
	      <a href="">Component</a>
	    </Breadcrumb.Item>
	    <Breadcrumb.Item overlay={menu}>
	      <a href="">General</a>
	    </Breadcrumb.Item>
	    <Breadcrumb.Item>Button</Breadcrumb.Item>
	  </Breadcrumb>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Navigation/Breadcrumb',
	component: Breadcrumb,
}