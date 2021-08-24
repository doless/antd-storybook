import Icon from '@ant-design/icons';
import React from 'react';
import ReactDOM from 'react-dom';

import { Modal, Button, Space } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

class LocalizedModal extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  hideModal = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <>
        <Button type="primary" onClick={this.showModal}>
          Modal
        </Button>
        <Modal
          title="Modal"
          visible={this.state.visible}
          onOk={this.hideModal}
          onCancel={this.hideModal}
          okText="确认"
          cancelText="取消"
        >
          <p>Bla bla ...</p>
          <p>Bla bla ...</p>
          <p>Bla bla ...</p>
        </Modal>
      </>
    );
  }
}

function confirm() {
  Modal.confirm({
    title: 'Confirm',
    icon: <ExclamationCircleOutlined />,
    content: 'Bla bla ...',
    okText: '确认',
    cancelText: '取消',
  });
}

/**
 * 
 * 设置 `okText` 与 `cancelText` 以自定义按钮文字。
 * 
 * 
 * 
 * To customize the text of the buttons, you need to set `okText` and `cancelText` props.
 * 
 * 
 */
export const locale = () => {
	return ReactDOM.render(
	  <Space>
	    <LocalizedModal />
	    <Button onClick={confirm}>Confirm</Button>
	  </Space>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Feedback/Modal',
	component: Modal,
}