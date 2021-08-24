import Icon from '@ant-design/icons';
import React from 'react';
import ReactDOM from 'react-dom';

import { Timeline } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';

/**
 * 
 * 时间轴点可以在内容的右边。
 * 
 * 
 * 
 * Right alternate timeline.
 * 
 * 
 */
export const right_demo = () => {
	return ReactDOM.render(
	  <Timeline mode="right">
	    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
	    <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
	    <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />} color="red">
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