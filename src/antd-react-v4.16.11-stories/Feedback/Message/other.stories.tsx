import React from 'react';
import ReactDOM from 'react-dom';

import { message, Button, Space } from 'antd';

const success = () => {
  message.success('This is a success message');
};

const error = () => {
  message.error('This is an error message');
};

const warning = () => {
  message.warning('This is a warning message');
};

/**
 * 
 * 包括成功、失败、警告。
 * 
 * 
 * 
 * Messages of success, error and warning types.
 * 
 * 
 */
export const other = () => {
	return ReactDOM.render(
	  <Space>
	    <Button onClick={success}>Success</Button>
	    <Button onClick={error}>Error</Button>
	    <Button onClick={warning}>Warning</Button>
	  </Space>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Feedback/Message',
	component: message,
}