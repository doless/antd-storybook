import React from 'react';
import ReactDOM from 'react-dom';

import { Rate } from 'antd';

/**
 * 
 * 支持允许或者禁用清除。
 * 
 * 
 * 
 * Support set allow to clear star when click again.
 * 
 * 
 */
export const clear = () => {
	return ReactDOM.render(
	  <>
	    <Rate defaultValue={3} />
	    <span className="ant-rate-text">allowClear: true</span>
	    <br />
	    <Rate allowClear={false} defaultValue={3} />
	    <span className="ant-rate-text">allowClear: false</span>
	  </>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Entry/Rate',
	component: Rate,
}