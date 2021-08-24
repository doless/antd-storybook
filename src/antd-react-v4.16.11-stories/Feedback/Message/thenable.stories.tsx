import React from 'react';
import ReactDOM from 'react-dom';

import { message, Button } from 'antd';

const success = () => {
  message
    .loading('Action in progress..', 2.5)
    .then(() => message.success('Loading finished', 2.5))
    .then(() => message.info('Loading finished is finished', 2.5));
};

/**
 * 
 * 可以通过 then 接口在关闭后运行 callback 。以上用例将在每个 message 将要结束时通过 then 显示新的 message 。
 * 
 * 
 * 
 * `message` provides a promise interface for `onClose`. The above example will display a new message when the old message is about to close.
 * 
 * 
 */
export const thenable = () => {
	return ReactDOM.render(<Button onClick={success}>Display sequential messages</Button>, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Feedback/Message',
	component: message,
}