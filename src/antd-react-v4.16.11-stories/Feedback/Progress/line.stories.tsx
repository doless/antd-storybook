import React from 'react';
import ReactDOM from 'react-dom';

import { Progress } from 'antd';

/**
 * 
 * 标准的进度条。
 * 
 * 
 * 
 * A standard progress bar.
 * 
 * 
 */
export const line = () => {
	return ReactDOM.render(
	  <>
	    <Progress percent={30} />
	    <Progress percent={50} status="active" />
	    <Progress percent={70} status="exception" />
	    <Progress percent={100} />
	    <Progress percent={50} showInfo={false} />
	  </>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Feedback/Progress',
	component: Progress,
}