import React from 'react';
import ReactDOM from 'react-dom';

import { Progress } from 'antd';

/**
 * 
 * 适合放在较狭窄的区域内。
 * 
 * 
 * 
 * Appropriate for a narrow area.
 * 
 * 
 */
export const line_mini = () => {
	return ReactDOM.render(
	  <div style={{ width: 170 }}>
	    <Progress percent={30} size="small" />
	    <Progress percent={50} size="small" status="active" />
	    <Progress percent={70} size="small" status="exception" />
	    <Progress percent={100} size="small" />
	  </div>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Feedback/Progress',
	component: Progress,
}