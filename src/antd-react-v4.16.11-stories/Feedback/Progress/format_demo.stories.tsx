import React from 'react';
import ReactDOM from 'react-dom';

import { Progress } from 'antd';

/**
 * 
 * `format` 属性指定格式。
 * 
 * 
 * 
 * You can set a custom text by setting the `format` prop.
 * 
 * 
 */
export const format_demo = () => {
	return ReactDOM.render(
	  <>
	    <Progress type="circle" percent={75} format={percent => `${percent} Days`} />
	    <Progress type="circle" percent={100} format={() => 'Done'} />
	  </>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Feedback/Progress',
	component: Progress,
}