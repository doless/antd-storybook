import React from 'react';
import ReactDOM from 'react-dom';

import { Progress } from 'antd';

/**
 * 
 * 通过设置 `type=dashboard`，可以很方便地实现仪表盘样式的进度条。若想要修改缺口的角度，可以设置 `gapDegree` 为你想要的值。
 * 
 * 
 * 
 * By setting `type=dashboard`, you can get a dashboard style of progress easily. Modify `gapDegree` to set the degree of gap.
 * 
 * 
 */
export const dashboard_demo = () => {
	return ReactDOM.render(
	  <>
	    <Progress type="dashboard" percent={75} />
	    <Progress type="dashboard" percent={75} gapDegree={30} />
	  </>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Feedback/Progress',
	component: Progress,
}