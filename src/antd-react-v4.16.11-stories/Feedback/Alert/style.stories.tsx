import React from 'react';
import ReactDOM from 'react-dom';

import { Alert } from 'antd';

/**
 * 
 * 共有四种样式 `success`、`info`、`warning`、`error`。
 * 
 * 
 * 
 * There are 4 types of Alert: `success`, `info`, `warning`, `error`.
 * 
 * 
 */
export const style = () => {
	return ReactDOM.render(
	  <>
	    <Alert message="Success Text" type="success" />
	    <Alert message="Info Text" type="info" />
	    <Alert message="Warning Text" type="warning" />
	    <Alert message="Error Text" type="error" />
	  </>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Feedback/Alert',
	component: Alert,
}