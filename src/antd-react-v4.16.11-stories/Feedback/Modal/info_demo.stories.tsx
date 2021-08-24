import React from 'react';
import ReactDOM from 'react-dom';

import { Modal, Button, Space } from 'antd';

function info() {
  Modal.info({
    title: 'This is a notification message',
    content: (
      <div>
        <p>some messages...some messages...</p>
        <p>some messages...some messages...</p>
      </div>
    ),
    onOk() {},
  });
}

function success() {
  Modal.success({
    content: 'some messages...some messages...',
  });
}

function error() {
  Modal.error({
    title: 'This is an error message',
    content: 'some messages...some messages...',
  });
}

function warning() {
  Modal.warning({
    title: 'This is a warning message',
    content: 'some messages...some messages...',
  });
}

/**
 * 
 * 各种类型的信息提示，只提供一个按钮用于关闭。
 * 
 * 
 * 
 * In the various types of information modal dialog, only one button to close dialog is provided.
 * 
 * 
 */
export const info_demo = () => {
	return ReactDOM.render(
	  <Space>
	    <Button onClick={info}>Info</Button>
	    <Button onClick={success}>Success</Button>
	    <Button onClick={error}>Error</Button>
	    <Button onClick={warning}>Warning</Button>
	  </Space>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Feedback/Modal',
	component: Modal,
}