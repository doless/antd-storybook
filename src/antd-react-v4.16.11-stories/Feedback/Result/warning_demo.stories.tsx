import React from 'react';
import ReactDOM from 'react-dom';

import { Result, Button } from 'antd';

/**
 * 
 * 警告类型的结果。
 * 
 * 
 * 
 * The result of the warning.
 * 
 * 
 */
export const warning_demo = () => {
	return ReactDOM.render(
	  <Result
	    status="warning"
	    title="There are some problems with your operation."
	    extra={
	      <Button type="primary" key="console">
	        Go Console
	      </Button>
	    }
	  />,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Feedback/Result',
	component: Result,
}