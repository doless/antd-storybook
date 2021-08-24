import React from 'react';
import ReactDOM from 'react-dom';

import { Result, Button } from 'antd';

/**
 * 
 * 你没有此页面的访问权限。
 * 
 * 
 * 
 * you are not authorized to access this page.
 * 
 * 
 */
export const Demo_403 = () => {
	return ReactDOM.render(
	  <Result
	    status="403"
	    title="403"
	    subTitle="Sorry, you are not authorized to access this page."
	    extra={<Button type="primary">Back Home</Button>}
	  />,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Feedback/Result',
	component: Result,
}