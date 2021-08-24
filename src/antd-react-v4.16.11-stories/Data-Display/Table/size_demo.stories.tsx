import React from 'react';
import ReactDOM from 'react-dom';

import { Table } from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
];

/**
 * 
 * 两种紧凑型的列表，小型列表只用于对话框内。
 * 
 * 
 * 
 * There are two compacted table sizes: `middle` and `small`. The `small` size is used in Modals only.
 * 
 * 
 */
export const size_demo = () => {
	return ReactDOM.render(
	  <div>
	    <h4>Middle size table</h4>
	    <Table columns={columns} dataSource={data} size="middle" />
	    <h4>Small size table</h4>
	    <Table columns={columns} dataSource={data} size="small" />
	  </div>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Display/Table',
	component: Table,
}