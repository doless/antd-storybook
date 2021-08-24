import React from 'react';
import ReactDOM from 'react-dom';

import { Result, Button } from 'antd';

/**
 * 
 * 此页面未找到。
 * 
 * 
 * 
 * The page you visited does not exist.
 * 
 * 
 */
export const Demo_404 = () => {
	return ReactDOM.render(
	  <Result
	    status="404"
	    title="404"
	    subTitle="Sorry, the page you visited does not exist."
	    extra={<Button type="primary">Back Home</Button>}
	  />,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Feedback/Result',
	component: Result,
}