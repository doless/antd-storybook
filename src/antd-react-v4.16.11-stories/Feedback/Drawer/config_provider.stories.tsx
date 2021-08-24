import ReactDOM from 'react-dom';

import React, { useState, useRef } from 'react';
import { Drawer, ConfigProvider, Button } from 'antd';

const App: React.FC = () => {
  const domRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <ConfigProvider getPopupContainer={() => domRef.current!}>
      <div ref={domRef} className="site-drawer-render-in-current-wrapper">
        <Button type="primary" onClick={showDrawer}>
          Open
        </Button>
        <Drawer
          style={{ position: 'absolute' }}
          title="ConfigProvider"
          placement="right"
          onClose={onClose}
          visible={visible}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </div>
    </ConfigProvider>
  );
};

/**
 * 
 * 支持 ConfigProvider 配置。
 * 
 * 
 * 
 * config by ConfigProvider.
 * 
 * 
 */
export const config_provider = () => {
	return ReactDOM.render(<App />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Feedback/Drawer',
	component: Drawer,
}