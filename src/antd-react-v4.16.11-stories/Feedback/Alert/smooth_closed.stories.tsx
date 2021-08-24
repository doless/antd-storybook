import ReactDOM from 'react-dom';

import React, { useState } from 'react';
import { Alert } from 'antd';

const App: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const handleClose = () => {
    setVisible(false);
  };
  return (
    <div>
      {visible ? (
        <Alert message="Alert Message Text" type="success" closable afterClose={handleClose} />
      ) : null}
      <p>placeholder text here</p>
    </div>
  );
};

/**
 * 
 * 平滑、自然的卸载提示。
 * 
 * 
 * 
 * Smoothly unmount Alert upon close.
 * 
 * 
 */
export const smooth_closed = () => {
	return ReactDOM.render(<App />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Feedback/Alert',
	component: Alert,
}