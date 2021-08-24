import React from 'react';
import ReactDOM from 'react-dom';

import { Popconfirm, Button } from 'antd';

const App = () => {
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);

  const showPopconfirm = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setVisible(false);
  };

  return (
    <>
      <Popconfirm
        title="Title"
        visible={visible}
        onConfirm={handleOk}
        okButtonProps={{ loading: confirmLoading }}
        onCancel={handleCancel}
      >
        <Button type="primary" onClick={showPopconfirm}>
          Open Popconfirm with async logic
        </Button>
      </Popconfirm>
    </>
  );
};

/**
 * 
 * 点击确定后异步关闭气泡确认框，例如提交表单。
 * 
 * 
 * 
 * Asynchronously close a popconfirm when a the OK button is pressed. For example, you can use this pattern when you submit a form.
 * 
 * 
 */
export const async_demo = () => {
	return ReactDOM.render(<App />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Feedback/Popconfirm',
	component: Popconfirm,
}