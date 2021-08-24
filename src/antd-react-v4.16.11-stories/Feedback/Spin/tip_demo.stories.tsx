import React from 'react';
import ReactDOM from 'react-dom';

import { Spin, Alert } from 'antd';

/**
 * 
 * 自定义描述文案。
 * 
 * 
 * 
 * Customized description content.
 * 
 * 
 */
export const tip_demo = () => {
	return ReactDOM.render(
	  <Spin tip="Loading...">
	    <Alert
	      message="Alert message title"
	      description="Further details about the context of this alert."
	      type="info"
	    />
	  </Spin>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Feedback/Spin',
	component: Spin,
}