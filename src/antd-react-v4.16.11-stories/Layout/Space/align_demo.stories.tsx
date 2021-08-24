import React from 'react';
import ReactDOM from 'react-dom';
import './align_demo.css';

import { Space, Button } from 'antd';

/**
 * 
 * 设置对齐模式。
 * 
 * 
 * 
 * Config item align.
 * 
 * 
 */
export const align_demo = () => {
	return ReactDOM.render(
	  <div className="space-align-container">
	    <div className="space-align-block">
	      <Space align="center">
	        center
	        <Button type="primary">Primary</Button>
	        <span className="mock-block">Block</span>
	      </Space>
	    </div>
	    <div className="space-align-block">
	      <Space align="start">
	        start
	        <Button type="primary">Primary</Button>
	        <span className="mock-block">Block</span>
	      </Space>
	    </div>
	    <div className="space-align-block">
	      <Space align="end">
	        end
	        <Button type="primary">Primary</Button>
	        <span className="mock-block">Block</span>
	      </Space>
	    </div>
	    <div className="space-align-block">
	      <Space align="baseline">
	        baseline
	        <Button type="primary">Primary</Button>
	        <span className="mock-block">Block</span>
	      </Space>
	    </div>
	  </div>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Layout/Space',
	component: Space,
}