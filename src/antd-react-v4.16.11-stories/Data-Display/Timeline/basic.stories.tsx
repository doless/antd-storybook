import React from 'react';
import ReactDOM from 'react-dom';

import { Timeline } from 'antd';

/**
 * 
 * 基本的时间轴。
 * 
 * 
 * 
 * Basic timeline.
 * 
 * 
 */
export const basic = () => {
	return ReactDOM.render(
	  <Timeline>
	    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
	    <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
	    <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
	    <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
	  </Timeline>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Display/Timeline',
	component: Timeline,
}