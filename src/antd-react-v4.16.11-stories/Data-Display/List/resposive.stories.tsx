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
  {
    title: 'Title 5',
  },
  {
    title: 'Title 6',
  },
];

/**
 * 
 * 响应式的栅格列表。尺寸与 [Layout Grid](/components/grid/#Col) 保持一致。
 * 
 * 
 * 
 * Responsive grid list. The size property the is as same as [Layout Grid](/components/grid/#Col).
 * 
 * 
 */
export const resposive = () => {
	return ReactDOM.render(
	  <List
	    grid={{
	      gutter: 16,
	      xs: 1,
	      sm: 2,
	      md: 4,
	      lg: 4,
	      xl: 6,
	      xxl: 3,
	    }}
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