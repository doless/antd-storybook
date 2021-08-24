import React from 'react';
import ReactDOM from 'react-dom';

import { Alert } from 'antd';

/**
 * 
 * 含有辅助性文字介绍的警告提示。
 * 
 * 
 * 
 * Additional description for alert message.
 * 
 * 
 */
export const description_demo = () => {
	return ReactDOM.render(
	  <>
	    <Alert
	      message="Success Text"
	      description="Success Description Success Description Success Description"
	      type="success"
	    />
	    <Alert
	      message="Info Text"
	      description="Info Description Info Description Info Description Info Description"
	      type="info"
	    />
	    <Alert
	      message="Warning Text"
	      description="Warning Description Warning Description Warning Description Warning Description"
	      type="warning"
	    />
	    <Alert
	      message="Error Text"
	      description="Error Description Error Description Error Description Error Description"
	      type="error"
	    />
	  </>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Feedback/Alert',
	component: Alert,
}