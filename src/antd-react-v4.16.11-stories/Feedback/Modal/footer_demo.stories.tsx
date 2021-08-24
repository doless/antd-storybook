import React from 'react';
import ReactDOM from 'react-dom';

import { Modal, Button } from 'antd';

class App extends React.Component {
  state = {
    loading: false,
    visible: false,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  render() {
    const { visible, loading } = this.state;
    return (
      <>
        <Button type="primary" onClick={this.showModal}>
          Open Modal with customized footer
        </Button>
        <Modal
          visible={visible}
          title="Title"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              Return
            </Button>,
            <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
              Submit
            </Button>,
            <Button
              key="link"
              href="https://google.com"
              type="primary"
              loading={loading}
              onClick={this.handleOk}
            >
              Search on Google
            </Button>,
          ]}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </>
    );
  }
}

/**
 * 
 * 更复杂的例子，自定义了页脚的按钮，点击提交后进入 loading 状态，完成后关闭。
 * 
 * 不需要默认确定取消按钮时，你可以把 `footer` 设为 `null`。
 * 
 * 
 * 
 * A more complex example which define a customized footer button bar. The dialog will change to loading state after clicking the submit button, and when the loading is done, the modal dialog will be closed.
 * 
 * You could set `footer` to `null` if you don't need default footer buttons.
 * 
 * 
 */
export const footer_demo = () => {
	return ReactDOM.render(<App />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Feedback/Modal',
	component: Modal,
}