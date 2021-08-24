import React from 'react';
import ReactDOM from 'react-dom';

import { Tabs } from 'antd';

const { TabPane } = Tabs;

const Demo = () => (
  <Tabs defaultActiveKey="1" centered>
    <TabPane tab="Tab 1" key="1">
      Content of Tab Pane 1
    </TabPane>
    <TabPane tab="Tab 2" key="2">
      Content of Tab Pane 2
    </TabPane>
    <TabPane tab="Tab 3" key="3">
      Content of Tab Pane 3
    </TabPane>
  </Tabs>
);

/**
 * 
 * 标签居中展示。
 * 
 * 
 * 
 * Centered tabs.
 * 
 * 
 */
export const centered_demo = () => {
	return ReactDOM.render(<Demo />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Data-Display/Tabs',
	component: Tabs,
}