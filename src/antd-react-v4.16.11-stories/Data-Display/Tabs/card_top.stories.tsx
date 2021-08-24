import React from 'react';
import ReactDOM from 'react-dom';
import './card_top.css';

import { Tabs } from 'antd';

const { TabPane } = Tabs;

/**
 * 
 * 用于容器顶部，需要一点额外的样式覆盖。
 * 
 * 
 * 
 * Should be used at the top of container, needs to override styles.
 * 
 * 
 */
export const card_top = () => {
	return ReactDOM.render(
	  <div className="card-container">
	    <Tabs type="card">
	      <TabPane tab="Tab Title 1" key="1">
	        <p>Content of Tab Pane 1</p>
	        <p>Content of Tab Pane 1</p>
	        <p>Content of Tab Pane 1</p>
	      </TabPane>
	      <TabPane tab="Tab Title 2" key="2">
	        <p>Content of Tab Pane 2</p>
	        <p>Content of Tab Pane 2</p>
	        <p>Content of Tab Pane 2</p>
	      </TabPane>
	      <TabPane tab="Tab Title 3" key="3">
	        <p>Content of Tab Pane 3</p>
	        <p>Content of Tab Pane 3</p>
	        <p>Content of Tab Pane 3</p>
	      </TabPane>
	    </Tabs>
	  </div>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Display/Tabs',
	component: Tabs,
}