import ReactDOM from 'react-dom';

import React, { useState } from 'react';
import { Drawer, Button } from 'antd';

const App: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer
        title="Drawer without mask"
        placement="right"
        mask={false}
        onClose={onClose}
        visible={visible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

/**
 * 
 * 通过 `mask={false}` 去掉遮罩。
 * 
 * 
 * 
 * Remove mask.
 * 
 * 
 */
export const no_mask = () => {
	return ReactDOM.render(<App />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Feedback/Drawer',
	component: Drawer,
}