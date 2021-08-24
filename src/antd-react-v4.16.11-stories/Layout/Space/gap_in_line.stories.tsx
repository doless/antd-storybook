import React from 'react';
import ReactDOM from 'react-dom';

import { Space, Switch } from 'antd';

const style: React.CSSProperties = {
  width: 150,
  height: 100,
  background: 'red',
};

const Demo = () => {
  const [singleCol, setSingleCol] = React.useState(false);

  return (
    <>
      <Switch
        checked={singleCol}
        onChange={() => {
          setSingleCol(!singleCol);
        }}
      />
      <div style={{ boxShadow: '0 0 5px green' }}>
        <Space style={{ width: singleCol ? 307 : 310, background: 'blue' }} size={[8, 8]} wrap>
          <div style={style} />
          <div style={style} />
          <div style={style} />
          <div style={style} />
        </Space>
      </div>
    </>
  );
};

/**
 * 
 * Debug usage
 * 
 * 
 * 
 * Debug usage
 * 
 * 
 */
export const gap_in_line = () => {
	return ReactDOM.render(<Demo />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Layout/Space',
	component: Space,
}