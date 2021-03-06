import React from 'react';
import ReactDOM from 'react-dom';

import { Alert } from 'antd';
import TextLoop from 'react-text-loop';

/**
 * 
 * 配合 [react-text-loop](https://npmjs.com/package/react-text-loop) 实现消息轮播通知栏。
 * 
 * 
 * 
 * Show a loop banner by using with [react-text-loop](https://npmjs.com/package/react-text-loop).
 * 
 * 
 */
export const loop_banner = () => {
	return ReactDOM.render(
	  <Alert
	    banner
	    message={
	      <TextLoop mask>
	        <div>Notice message one</div>
	        <div>Notice message two</div>
	        <div>Notice message three</div>
	        <div>Notice message four</div>
	      </TextLoop>
	    }
	  />,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Feedback/Alert',
	component: Alert,
}