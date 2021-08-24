import Icon from '@ant-design/icons';
import React from 'react';
import ReactDOM from 'react-dom';

import { Result, Button } from 'antd';
import { SmileOutlined } from '@ant-design/icons';

/**
 * 
 * 自定义 icon。
 * 
 * 
 * 
 * Custom icon.
 * 
 * 
 */
export const customIcon = () => {
	return ReactDOM.render(
	  <Result
	    icon={<SmileOutlined />}
	    title="Great, we have done all the operations!"
	    extra={<Button type="primary">Next</Button>}
	  />,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Feedback/Result',
	component: Result,
}