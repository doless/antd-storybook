import React from 'react';
import ReactDOM from 'react-dom';

import { Space, Card } from 'antd';

function SpaceVertical() {
  return (
    <Space direction="vertical">
      <Card title="Card" style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
      <Card title="Card" style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </Space>
  );
}

/**
 * 
 * 相邻组件垂直间距。
 * 
 * 可以设置 `width: 100%` 独占一行。
 * 
 * 
 * 
 * Crowded components vertical spacing.
 * 
 * Can set `width: 100%` to fill a row.
 * 
 * 
 */
export const vertical_demo = () => {
	return ReactDOM.render(<SpaceVertical />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Layout/Space',
	component: Space,
}