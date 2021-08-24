import React from 'react';
import ReactDOM from 'react-dom';

import { List, Card } from 'antd';

const data = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
];

/**
 * 
 * 可以通过设置 `List` 的 `grid` 属性来实现栅格列表，`column` 可设置期望显示的列数。
 * 
 * 
 * 
 * Create a grid layout by setting the `grid` property of List.
 * 
 * 
 */
export const grid_demo = () => {
	return ReactDOM.render(
	  <List
	    grid={{ gutter: 16, column: 4 }}
	    dataSource={data}
	    renderItem={item => (
	      <List.Item>
	        <Card title={item.title}>Card content</Card>
	      </List.Item>
	    )}
	  />,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Display/List',
	component: List,
}