import React from 'react';
import ReactDOM from 'react-dom';
import './top.css';

import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

/**
 * 
 * 最基本的『上-中-下』布局。
 * 
 * 一般主导航放置于页面的顶端，从左自右依次为：logo、一级导航项、辅助菜单（用户、设置、通知等）。通常将内容放在固定尺寸（例如：1200px）内，整个页面排版稳定，不受用户终端显示器影响；上下级的结构符合用户上下浏览的习惯，也是较为经典的网站导航模式。页面上下切分的方式提高了主工作区域的信息展示效率，但在纵向空间上会有一些牺牲。此外，由于导航栏水平空间的限制，不适合那些一级导航项很多的信息结构。
 * 
 * 
 * 
 * The most basic "header-content-footer" layout.
 * 
 * Generally, the mainnav is placed at the top of the page, and includes the logo, the first level navigation, and the secondary menu (users, settings, notifications) from left to right in it. We always put contents in a fixed size navigation (eg: `1200px`), the layout of the whole page is stable, it's not affected by viewing area.
 * 
 * Top-bottom structure is conform with the top-bottom viewing habit, it's a classical navigation pattern of websites. This pattern demonstrates efficiency in the main workarea, while using some vertical space. And because the horizontal space of the navigation is limited, this pattern is not suitable for cases when the first level navigation contains many elements or links.
 * 
 * 
 */
export const top = () => {
	return ReactDOM.render(
	  <Layout className="layout">
	    <Header>
	      <div className="logo" />
	      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
	        {new Array(15).fill(null).map((_, index) => {
	          const key = index + 1;
	          return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
	        })}
	      </Menu>
	    </Header>
	    <Content style={{ padding: '0 50px' }}>
	      <Breadcrumb style={{ margin: '16px 0' }}>
	        <Breadcrumb.Item>Home</Breadcrumb.Item>
	        <Breadcrumb.Item>List</Breadcrumb.Item>
	        <Breadcrumb.Item>App</Breadcrumb.Item>
	      </Breadcrumb>
	      <div className="site-layout-content">Content</div>
	    </Content>
	    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
	  </Layout>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Layout/Layout',
	component: Layout,
}