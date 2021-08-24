import React from 'react';
import ReactDOM from 'react-dom';

import { Space, Button } from 'antd';

const Demo = () => (
  <Space size={[8, 16]} wrap>
    {new Array(20).fill(null).map((_, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <Button key={index}>Button</Button>
    ))}
  </Space>
);

/**
 * 
 * 自动换行。
 * 
 * 
 * 
 * Auto wrap line.
 * 
 * 
 */
export const wrap_demo = () => {
	return ReactDOM.render(<Demo />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Layout/Space',
	component: Space,
}