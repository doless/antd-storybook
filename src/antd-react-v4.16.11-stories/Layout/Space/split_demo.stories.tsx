import React from 'react';
import ReactDOM from 'react-dom';

import { Space, Typography, Divider } from 'antd';

function SpaceSplit() {
  return (
    <Space split={<Divider type="vertical" />}>
      <Typography.Link>Link</Typography.Link>
      <Typography.Link>Link</Typography.Link>
      <Typography.Link>Link</Typography.Link>
    </Space>
  );
}

/**
 * 
 * 相邻组件分隔符。
 * 
 * 
 * 
 * Crowded components split.
 * 
 * 
 */
export const split_demo = () => {
	return ReactDOM.render(<SpaceSplit />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Layout/Space',
	component: Space,
}