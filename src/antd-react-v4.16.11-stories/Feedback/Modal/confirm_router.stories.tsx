import Icon from '@ant-design/icons';
import React from 'react';
import ReactDOM from 'react-dom';

import { Modal, Button } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

function destroyAll() {
  Modal.destroyAll();
}

const { confirm } = Modal;

function showConfirm() {
  for (let i = 0; i < 3; i += 1) {
    setTimeout(() => {
      confirm({
        icon: <ExclamationCircleOutlined />,
        content: <Button onClick={destroyAll}>Click to destroy all</Button>,
        onOk() {
          console.log('OK');
        },
        onCancel() {
          console.log('Cancel');
        },
      });
    }, i * 500);
  }
}

/**
 * 
 * 使用 `Modal.destroyAll()` 可以销毁弹出的确认窗。通常用于路由监听当中，处理路由前进、后退不能销毁确认对话框的问题。
 * 
 * 
 * 
 * `Modal.destroyAll()` will destroy all confirmation modal dialogs. Usually, you can use it in router change event to destroy confirm modal dialog automatically.
 * 
 * 
 */
export const confirm_router = () => {
	return ReactDOM.render(<Button onClick={showConfirm}>Confirm</Button>, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Feedback/Modal',
	component: Modal,
}