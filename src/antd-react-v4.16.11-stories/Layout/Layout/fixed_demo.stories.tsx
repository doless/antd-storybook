import React from 'react';
import ReactDOM from 'react-dom';
import './fixed_demo.css';

import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

/**
 * 
 * 一般用于固定顶部导航，方便页面切换。
 * 
 * 
 * 
 * Fixed Header is generally used to fix the top navigation to facilitate page switching.
 * 
 * 
 */
export const fixed_demo = () => {
	return ReactDOM.render(
	  <Layout>
	    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
	      <div className="logo" />
	      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
	        <Menu.Item key="1">nav 1</Menu.Item>
	        <Menu.Item key="2">nav 2</Menu.Item>
	        <Menu.Item key="3">nav 3</Menu.Item>
	      </Menu>
	    </Header>
	    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
	      <Breadcrumb style={{ margin: '16px 0' }}>
	        <Breadcrumb.Item>Home</Breadcrumb.Item>
	        <Breadcrumb.Item>List</Breadcrumb.Item>
	        <Breadcrumb.Item>App</Breadcrumb.Item>
	      </Breadcrumb>
	      <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
	        Content
	      </div>
	    </Content>
	    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
	  </Layout>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Layout/Layout',
	component: Layout,
}