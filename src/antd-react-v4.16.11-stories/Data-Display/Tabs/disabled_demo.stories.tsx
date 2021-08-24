import React from 'react';
import ReactDOM from 'react-dom';

import { Tabs } from 'antd';

const { TabPane } = Tabs;

/**
 * 
 * 禁用某一项。
 * 
 * 
 * 
 * Disabled a tab.
 * 
 * 
 */
export const disabled_demo = () => {
	return ReactDOM.render(
	  <Tabs defaultActiveKey="1">
	    <TabPane tab="Tab 1" key="1">
	      Tab 1
	    </TabPane>
	    <TabPane tab="Tab 2" disabled key="2">
	      Tab 2
	    </TabPane>
	    <TabPane tab="Tab 3" key="3">
	      Tab 3
	    </TabPane>
	  </Tabs>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Display/Tabs',
	component: Tabs,
}