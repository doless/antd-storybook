import React from 'react';
import ReactDOM from 'react-dom';

import { Table } from 'antd';

const columns = [
  {
    title: 'Name (all screens)',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Age (medium screen or bigger)',
    dataIndex: 'age',
    key: 'age',
    responsive: ['md'],
  },
  {
    title: 'Address (large screen or bigger)',
    dataIndex: 'address',
    key: 'address',
    responsive: ['lg'],
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
];

/**
 * 
 * 响应式配置列的展示。
 * 
 * 
 * 
 * Responsive columns.
 * 
 * 
 */
export const responsive_demo = () => {
	return ReactDOM.render(<Table columns={columns} dataSource={data} />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Data-Display/Table',
	component: Table,
}