import React from 'react';
import ReactDOM from 'react-dom';

import { Result, Button } from 'antd';

/**
 * 
 * 展示处理结果。
 * 
 * 
 * 
 * Show processing results.
 * 
 * 
 */
export const info = () => {
	return ReactDOM.render(
	  <Result
	    title="Your operation has been executed"
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