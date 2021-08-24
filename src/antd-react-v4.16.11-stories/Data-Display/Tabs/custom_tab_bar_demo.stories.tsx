import React from 'react';
import ReactDOM from 'react-dom';
import './custom_tab_bar_demo.css';

import { Tabs } from 'antd';
import { StickyContainer, Sticky } from 'react-sticky';

const { TabPane } = Tabs;

const renderTabBar = (props, DefaultTabBar) => (
  <Sticky bottomOffset={80}>
    {({ style }) => (
      <DefaultTabBar {...props} className="site-custom-tab-bar" style={{ ...style }} />
    )}
  </Sticky>
);

/**
 * 
 * 使用 react-sticky 组件实现吸顶效果。
 * 
 * 
 * 
 * Use react-sticky.
 * 
 * 
 */
export const custom_tab_bar_demo = () => {
	return ReactDOM.render(
	  <StickyContainer>
	    <Tabs defaultActiveKey="1" renderTabBar={renderTabBar}>
	      <TabPane tab="Tab 1" key="1" style={{ height: 200 }}>
	        Content of Tab Pane 1
	      </TabPane>
	      <TabPane tab="Tab 2" key="2">
	        Content of Tab Pane 2
	      </TabPane>
	      <TabPane tab="Tab 3" key="3">
	        Content of Tab Pane 3
	      </TabPane>
	    </Tabs>
	  </StickyContainer>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Display/Tabs',
	component: Tabs,
}