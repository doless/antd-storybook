import React from 'react';
import ReactDOM from 'react-dom';

import { Tooltip, Progress } from 'antd';

/**
 * 
 * 标准的进度条。`type="circle|dashboard"` 时不支持分段颜色。
 * 
 * 
 * 
 * A standard progress bar. Doesn't support trail color when `type="circle|dashboard"`.
 * 
 * 
 */
export const segment = () => {
	return ReactDOM.render(
	  <>
	    <Tooltip title="3 done / 3 in progress / 4 to do">
	      <Progress percent={60} success={{ percent: 30 }} />
	    </Tooltip>
	
	    <Tooltip title="3 done / 3 in progress / 4 to do">
	      <Progress percent={60} success={{ percent: 30 }} type="circle" />
	    </Tooltip>
	
	    <Tooltip title="3 done / 3 in progress / 4 to do">
	      <Progress percent={60} success={{ percent: 30 }} type="dashboard" />
	    </Tooltip>
	  </>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Feedback/Progress',
	component: Progress,
}