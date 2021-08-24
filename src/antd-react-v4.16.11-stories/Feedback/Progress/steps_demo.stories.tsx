import React from 'react';
import ReactDOM from 'react-dom';

import { Progress } from 'antd';

/**
 * 
 * 带步骤的进度条。
 * 
 * 
 * 
 * A progress bar with steps.
 * 
 * 
 */
export const steps_demo = () => {
	return ReactDOM.render(
	  <>
	    <Progress percent={50} steps={3} />
	    <br />
	    <Progress percent={30} steps={5} />
	    <br />
	    <Progress percent={100} steps={5} size="small" strokeColor="#52c41a" />
	  </>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Feedback/Progress',
	component: Progress,
}