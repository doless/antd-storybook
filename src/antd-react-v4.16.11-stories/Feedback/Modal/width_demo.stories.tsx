import ReactDOM from 'react-dom';

import React, { useState } from 'react';
import { Modal, Button } from 'antd';

const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button type="primary" onClick={() => setVisible(true)}>
        Open Modal of 1000px width
      </Button>
      <Modal
        title="Modal 1000px width"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </>
  );
};

/**
 * 
 * 使用 `width` 来设置模态对话框的宽度。
 * 
 * 
 * 
 * Use `width` to set the width of the modal dialog.
 * 
 * 
 */
export const width_demo = () => {
	return ReactDOM.render(<App />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Feedback/Modal',
	component: Modal,
}