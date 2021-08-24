import React from 'react';
import ReactDOM from 'react-dom';

import { Alert } from 'antd';

/**
 * 
 * 可口的图标让信息类型更加醒目。
 * 
 * 
 * 
 * A relevant icon will make information clearer and more friendly.
 * 
 * 
 */
export const icon = () => {
	return ReactDOM.render(
	  <>
	    <Alert message="Success Tips" type="success" showIcon />
	    <Alert message="Informational Notes" type="info" showIcon />
	    <Alert message="Warning" type="warning" showIcon closable />
	    <Alert message="Error" type="error" showIcon />
	    <Alert
	      message="Success Tips"
	      description="Detailed description and advice about successful copywriting."
	      type="success"
	      showIcon
	    />
	    <Alert
	      message="Informational Notes"
	      description="Additional description and information about copywriting."
	      type="info"
	      showIcon
	    />
	    <Alert
	      message="Warning"
	      description="This is a warning notice about copywriting."
	      type="warning"
	      showIcon
	      closable
	    />
	    <Alert
	      message="Error"
	      description="This is an error message about copywriting."
	      type="error"
	      showIcon
	    />
	  </>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Feedback/Alert',
	component: Alert,
}