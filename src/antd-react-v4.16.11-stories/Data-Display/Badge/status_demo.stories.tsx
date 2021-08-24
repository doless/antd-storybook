import React from 'react';
import ReactDOM from 'react-dom';

import { Badge } from 'antd';

/**
 * 
 * 用于表示状态的小圆点。
 * 
 * 
 * 
 * Standalone badge with status.
 * 
 * 
 */
export const status_demo = () => {
	return ReactDOM.render(
	  <>
	    <Badge status="success" />
	    <Badge status="error" />
	    <Badge status="default" />
	    <Badge status="processing" />
	    <Badge status="warning" />
	    <br />
	    <Badge status="success" text="Success" />
	    <br />
	    <Badge status="error" text="Error" />
	    <br />
	    <Badge status="default" text="Default" />
	    <br />
	    <Badge status="processing" text="Processing" />
	    <br />
	    <Badge status="warning" text="Warning" />
	  </>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Display/Badge',
	component: Badge,
}