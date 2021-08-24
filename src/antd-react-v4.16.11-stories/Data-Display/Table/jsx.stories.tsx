import React from 'react';
import ReactDOM from 'react-dom';

import { Table, Tag, Space } from 'antd';

const { Column, ColumnGroup } = Table;

const data = [
  {
    key: '1',
    firstName: 'John',
    lastName: 'Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    firstName: 'Jim',
    lastName: 'Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    firstName: 'Joe',
    lastName: 'Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

/**
 * 
 * 使用 JSX 风格的 API（2.5.0 以后引入）
 * 
 * > 这个只是一个描述 `columns` 的语法糖，所以你不能用其他组件去包裹 `Column` 和 `ColumnGroup`。
 * 
 * 
 * 
 * Using JSX style API (introduced in 2.5.0)
 * 
 * > Since this is just a syntax sugar for the prop `columns`, you can't compose `Column` and `ColumnGroup` with other Components.
 * 
 * 
 */
export const jsx = () => {
	return ReactDOM.render(
	  <Table dataSource={data}>
	    <ColumnGroup title="Name">
	      <Column title="First Name" dataIndex="firstName" key="firstName" />
	      <Column title="Last Name" dataIndex="lastName" key="lastName" />
	    </ColumnGroup>
	    <Column title="Age" dataIndex="age" key="age" />
	    <Column title="Address" dataIndex="address" key="address" />
	    <Column
	      title="Tags"
	      dataIndex="tags"
	      key="tags"
	      render={tags => (
	        <>
	          {tags.map(tag => (
	            <Tag color="blue" key={tag}>
	              {tag}
	            </Tag>
	          ))}
	        </>
	      )}
	    />
	    <Column
	      title="Action"
	      key="action"
	      render={(text, record) => (
	        <Space size="middle">
	          <a>Invite {record.lastName}</a>
	          <a>Delete</a>
	        </Space>
	      )}
	    />
	  </Table>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Display/Table',
	component: Table,
}