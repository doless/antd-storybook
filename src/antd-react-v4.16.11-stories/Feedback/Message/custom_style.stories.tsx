import React from 'react';
import ReactDOM from 'react-dom';

import { message, Button } from 'antd';

const success = () => {
  message.success({
    content: 'This is a prompt message with custom className and style',
    className: 'custom-class',
    style: {
      marginTop: '20vh',
    },
  });
};

/**
 * 
 * 使用 `style` 和 `className` 来定义样式。
 * 
 * 
 * 
 * The `style` and `className` are available to customize Message.
 * 
 * 
 */
export const custom_style = () => {
	return ReactDOM.render(<Button onClick={success}>Customized style</Button>, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Feedback/Message',
	component: message,
}