import Icon from '@ant-design/icons';
import React from 'react';
import ReactDOM from 'react-dom';
import './custom.css';

import { Timeline } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';

/**
 * 
 * 可以设置为图标或其他自定义元素。
 * 
 * 
 * 
 * Set a node as an icon or other custom element.
 * 
 * 
 */
export const custom = () => {
	return ReactDOM.render(
	  <Timeline>
	    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
	    <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
	    <Timeline.Item dot={<ClockCircleOutlined className="timeline-clock-icon" />} color="red">
	      Technical testing 2015-09-01
	    </Timeline.Item>
	    <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
	  </Timeline>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Display/Timeline',
	component: Timeline,
}