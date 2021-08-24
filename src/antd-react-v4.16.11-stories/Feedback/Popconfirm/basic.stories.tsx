import React from 'react';
import ReactDOM from 'react-dom';

import { Popconfirm, message } from 'antd';

function confirm(e) {
  console.log(e);
  message.success('Click on Yes');
}

function cancel(e) {
  console.log(e);
  message.error('Click on No');
}

/**
 * 
 * 最简单的用法。
 * 
 * 
 * 
 * The basic example.
 * 
 * 
 */
export const basic = () => {
	return ReactDOM.render(
	  <Popconfirm
	    title="Are you sure to delete this task?"
	    onConfirm={confirm}
	    onCancel={cancel}
	    okText="Yes"
	    cancelText="No"
	  >
	    <a href="#">Delete</a>
	  </Popconfirm>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Feedback/Popconfirm',
	component: Popconfirm,
}