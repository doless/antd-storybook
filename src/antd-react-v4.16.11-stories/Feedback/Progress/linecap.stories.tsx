import React from 'react';
import ReactDOM from 'react-dom';

import { Progress } from 'antd';

/**
 * 
 * 通过设定 `strokeLinecap="square|round"` 可以调整进度条边缘的形状。
 * 
 * 
 * 
 * By setting `strokeLinecap="square"`, you can change the linecaps from round to square.
 * 
 * 
 */
export const linecap = () => {
	return ReactDOM.render(
	  <>
	    <Progress strokeLinecap="square" percent={75} />
	    <Progress strokeLinecap="square" type="circle" percent={75} />
	    <Progress strokeLinecap="square" type="dashboard" percent={75} />
	  </>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Feedback/Progress',
	component: Progress,
}