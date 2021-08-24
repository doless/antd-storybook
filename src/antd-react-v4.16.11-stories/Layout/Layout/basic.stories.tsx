import React from 'react';
import ReactDOM from 'react-dom';

import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

/**
 * 
 * 典型的页面布局。
 * 
 * 
 * 
 * Classic page layouts.
 * 
 * 
 */
export const basic = () => {
	return ReactDOM.render(
	  <>
	    <Layout>
	      <Header>Header</Header>
	      <Content>Content</Content>
	      <Footer>Footer</Footer>
	    </Layout>
	
	    <Layout>
	      <Header>Header</Header>
	      <Layout>
	        <Sider>Sider</Sider>
	        <Content>Content</Content>
	      </Layout>
	      <Footer>Footer</Footer>
	    </Layout>
	
	    <Layout>
	      <Header>Header</Header>
	      <Layout>
	        <Content>Content</Content>
	        <Sider>Sider</Sider>
	      </Layout>
	      <Footer>Footer</Footer>
	    </Layout>
	
	    <Layout>
	      <Sider>Sider</Sider>
	      <Layout>
	        <Header>Header</Header>
	        <Content>Content</Content>
	        <Footer>Footer</Footer>
	      </Layout>
	    </Layout>
	  </>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Layout/Layout',
	component: Layout,
}