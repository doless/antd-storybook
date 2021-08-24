import React from 'react';
import ReactDOM from 'react-dom';

import { Tabs } from 'antd';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

/**
 * 
 * 另一种样式的页签，不提供对应的垂直样式。
 * 
 * 
 * 
 * Another type of Tabs, which doesn't support vertical mode.
 * 
 * 
 */
export const card_demo = () => {
	return ReactDOM.render(
	  <Tabs onChange={callback} type="card">
	    <TabPane tab="Tab 1" key="1">
	      Content of Tab Pane 1
	    </TabPane>
	    <TabPane tab="Tab 2" key="2">
	      Content of Tab Pane 2
	    </TabPane>
	    <TabPane tab="Tab 3" key="3">
	      Content of Tab Pane 3
	    </TabPane>
	  </Tabs>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Display/Tabs',
	component: Tabs,
}