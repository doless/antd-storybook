import React from 'react';
import ReactDOM from 'react-dom';

import { Progress } from 'antd';

/**
 * 
 * 小一号的圈形进度。
 * 
 * 
 * 
 * A smaller circular progress bar.
 * 
 * 
 */
export const circle_mini = () => {
	return ReactDOM.render(
	  <>
	    <Progress type="circle" percent={30} width={80} />
	    <Progress type="circle" percent={70} width={80} status="exception" />
	    <Progress type="circle" percent={100} width={80} />
	  </>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Feedback/Progress',
	component: Progress,
}