import React from 'react';
import ReactDOM from 'react-dom';

import { Alert } from 'antd';

/**
 * 
 * 页面顶部通告形式，默认有图标且 `type` 为 'warning'。
 * 
 * 
 * 
 * Display Alert as a banner at top of page.
 * 
 * 
 */
export const banner_demo = () => {
	return ReactDOM.render(
	  <>
	    <Alert message="Warning text" banner />
	    <br />
	    <Alert
	      message="Very long warning text warning text text text text text text text"
	      banner
	      closable
	    />
	    <br />
	    <Alert showIcon={false} message="Warning text without icon" banner />
	    <br />
	    <Alert type="error" message="Error text" banner />
	  </>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Feedback/Alert',
	component: Alert,
}