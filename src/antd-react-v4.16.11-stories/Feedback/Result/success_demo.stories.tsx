import React from 'react';
import ReactDOM from 'react-dom';

import { Result, Button } from 'antd';

/**
 * 
 * 成功的结果。
 * 
 * 
 * 
 * Show successful results.
 * 
 * 
 */
export const success_demo = () => {
	return ReactDOM.render(
	  <Result
	    status="success"
	    title="Successfully Purchased Cloud Server ECS!"
	    subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
	    extra={[
	      <Button type="primary" key="console">
	        Go Console
	      </Button>,
	      <Button key="buy">Buy Again</Button>,
	    ]}
	  />,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Feedback/Result',
	component: Result,
}