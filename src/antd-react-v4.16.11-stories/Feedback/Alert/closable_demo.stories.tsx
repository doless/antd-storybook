import React from 'react';
import ReactDOM from 'react-dom';

import { Alert } from 'antd';

const onClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  console.log(e, 'I was closed.');
};

/**
 * 
 * 显示关闭按钮，点击可关闭警告提示。
 * 
 * 
 * 
 * To show close button.
 * 
 * 
 */
export const closable_demo = () => {
	return ReactDOM.render(
	  <>
	    <Alert
	      message="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"
	      type="warning"
	      closable
	      onClose={onClose}
	    />
	    <Alert
	      message="Error Text"
	      description="Error Description Error Description Error Description Error Description Error Description Error Description"
	      type="error"
	      closable
	      onClose={onClose}
	    />
	  </>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Feedback/Alert',
	component: Alert,
}