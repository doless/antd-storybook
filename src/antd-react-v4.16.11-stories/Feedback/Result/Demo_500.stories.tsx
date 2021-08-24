import React from 'react';
import ReactDOM from 'react-dom';

import { Result, Button } from 'antd';

/**
 * 
 * 服务器发生了错误。
 * 
 * 
 * 
 * Something went wrong on server.
 * 
 * 
 */
export const Demo_500 = () => {
	return ReactDOM.render(
	  <Result
	    status="500"
	    title="500"
	    subTitle="Sorry, something went wrong."
	    extra={<Button type="primary">Back Home</Button>}
	  />,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Feedback/Result',
	component: Result,
}