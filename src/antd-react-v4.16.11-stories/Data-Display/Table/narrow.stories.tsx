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

const data = [];

for (let i = 0; i < 200; i += 1) {
  data.push({
    key: i,
    name: 'Sample Name',
    age: 30 + (i % 5),
    address: `Sample Address ${i}`,
  });
}

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
export const narrow = () => {
	return ReactDOM.render(
	  <div style={{ width: 300 }}>
	    <Table columns={columns} dataSource={data} size="small" pagination={{ defaultCurrent: 13 }} />
	  </div>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Display/Table',
	component: Table,
}