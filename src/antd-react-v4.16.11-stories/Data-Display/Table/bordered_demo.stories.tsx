import React from 'react';
import ReactDOM from 'react-dom';

import { Table } from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Cash Assets',
    className: 'column-money',
    dataIndex: 'money',
    align: 'right',
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
    money: '￥300,000.00',
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    money: '￥1,256,000.00',
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    money: '￥120,000.00',
    address: 'Sidney No. 1 Lake Park',
  },
];

/**
 * 
 * 添加表格边框线，页头和页脚。
 * 
 * 
 * 
 * Add border, title and footer for table.
 * 
 * 
 */
export const bordered_demo = () => {
	return ReactDOM.render(
	  <Table
	    columns={columns}
	    dataSource={data}
	    bordered
	    title={() => 'Header'}
	    footer={() => 'Footer'}
	  />,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Display/Table',
	component: Table,
}