import React from 'react';
import ReactDOM from 'react-dom';

import { Timeline } from 'antd';

/**
 * 
 * 圆圈颜色，绿色用于已完成、成功状态，红色表示告警或错误状态，蓝色可表示正在进行或其他默认状态，灰色表示未完成或失效状态。
 * 
 * 
 * 
 * Set the color of circles. `green` means completed or success status, `red` means warning or error, and `blue` means ongoing or other default status, `gray` for unfinished or disabled status.
 * 
 * 
 */
export const color_demo = () => {
	return ReactDOM.render(
	  <Timeline>
	    <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
	    <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
	    <Timeline.Item color="red">
	      <p>Solve initial network problems 1</p>
	      <p>Solve initial network problems 2</p>
	      <p>Solve initial network problems 3 2015-09-01</p>
	    </Timeline.Item>
	    <Timeline.Item>
	      <p>Technical testing 1</p>
	      <p>Technical testing 2</p>
	      <p>Technical testing 3 2015-09-01</p>
	    </Timeline.Item>
	    <Timeline.Item color="gray">
	      <p>Technical testing 1</p>
	      <p>Technical testing 2</p>
	      <p>Technical testing 3 2015-09-01</p>
	    </Timeline.Item>
	    <Timeline.Item color="gray">
	      <p>Technical testing 1</p>
	      <p>Technical testing 2</p>
	      <p>Technical testing 3 2015-09-01</p>
	    </Timeline.Item>
	  </Timeline>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Display/Timeline',
	component: Timeline,
}