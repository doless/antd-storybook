import React from 'react';
import ReactDOM from 'react-dom';

import { Modal, Button } from 'antd';

function countDown() {
  let secondsToGo = 5;
  const modal = Modal.success({
    title: 'This is a notification message',
    content: `This modal will be destroyed after ${secondsToGo} second.`,
  });
  const timer = setInterval(() => {
    secondsToGo -= 1;
    modal.update({
      content: `This modal will be destroyed after ${secondsToGo} second.`,
    });
  }, 1000);
  setTimeout(() => {
    clearInterval(timer);
    modal.destroy();
  }, secondsToGo * 1000);
}

/**
 * 
 * 手动更新和关闭 `Modal.method` 方式创建的对话框。
 * 
 * 
 * 
 * Manually updating and destroying a modal from `Modal.method`.
 * 
 * 
 */
export const manual = () => {
	return ReactDOM.render(<Button onClick={countDown}>Open modal to close in 5s</Button>, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Feedback/Modal',
	component: Modal,
}