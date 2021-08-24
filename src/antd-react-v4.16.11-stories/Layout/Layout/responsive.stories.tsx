import Icon from '@ant-design/icons';
import React from 'react';
import ReactDOM from 'react-dom';
import './responsive.css';

import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;

/**
 * 
 * Layout.Sider 支持响应式布局。
 * 
 * > 说明：配置 `breakpoint` 属性即生效，视窗宽度小于 `breakpoint` 时 Sider 缩小为 `collapsedWidth` 宽度，若将 `collapsedWidth` 设置为 0，会出现特殊 trigger。
 * 
 * 
 * 
 * Layout.Sider supports responsive layout.
 * 
 * > Note: You can get a responsive layout by setting `breakpoint`, the Sider will collapse to the width of `collapsedWidth` when window width is below the `breakpoint`. And a special trigger will appear if the `collapsedWidth` is set to 0.
 * 
 * 
 */
export const responsive = () => {
	return ReactDOM.render(
	  <Layout>
	    <Sider
	      breakpoint="lg"
	      collapsedWidth="0"
	      onBreakpoint={broken => {
	        console.log(broken);
	      }}
	      onCollapse={(collapsed, type) => {
	        console.log(collapsed, type);
	      }}
	    >
	      <div className="logo" />
	      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
	        <Menu.Item key="1" icon={<UserOutlined />}>
	          nav 1
	        </Menu.Item>
	        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
	          nav 2
	        </Menu.Item>
	        <Menu.Item key="3" icon={<UploadOutlined />}>
	          nav 3
	        </Menu.Item>
	        <Menu.Item key="4" icon={<UserOutlined />}>
	          nav 4
	        </Menu.Item>
	      </Menu>
	    </Sider>
	    <Layout>
	      <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
	      <Content style={{ margin: '24px 16px 0' }}>
	        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
	          content
	        </div>
	      </Content>
	      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
	    </Layout>
	  </Layout>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Layout/Layout',
	component: Layout,
}