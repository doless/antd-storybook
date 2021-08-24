import React from 'react';
import ReactDOM from 'react-dom';

import { Progress } from 'antd';

/**
 * 
 * 圈形的进度。
 * 
 * 
 * 
 * A circular progress bar.
 * 
 * 
 */
export const circle_demo = () => {
	return ReactDOM.render(
	  <>
	    <Progress type="circle" percent={75} />
	    <Progress type="circle" percent={70} status="exception" />
	    <Progress type="circle" percent={100} />
	  </>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Feedback/Progress',
	component: Progress,
}