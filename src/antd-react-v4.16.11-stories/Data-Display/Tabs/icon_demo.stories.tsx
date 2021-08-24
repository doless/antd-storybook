import Icon from '@ant-design/icons';
import React from 'react';
import ReactDOM from 'react-dom';

import { Tabs } from 'antd';
import { AppleOutlined, AndroidOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;

/**
 * 
 * 有图标的标签。
 * 
 * 
 * 
 * The Tab with Icon.
 * 
 * 
 */
export const icon_demo = () => {
	return ReactDOM.render(
	  <Tabs defaultActiveKey="2">
	    <TabPane
	      tab={
	        <span>
	          <AppleOutlined />
	          Tab 1
	        </span>
	      }
	      key="1"
	    >
	      Tab 1
	    </TabPane>
	    <TabPane
	      tab={
	        <span>
	          <AndroidOutlined />
	          Tab 2
	        </span>
	      }
	      key="2"
	    >
	      Tab 2
	    </TabPane>
	  </Tabs>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Display/Tabs',
	component: Tabs,
}