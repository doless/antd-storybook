import React from 'react';
import ReactDOM from 'react-dom';

import { Table } from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: i % 2 === 0 ? `Edward King ${i}` : 'Another Row',
  });
}

const App = () => {
  const rowSelection = {
    renderCell: (checked, record, index, node) => ({
      props: { rowSpan: index % 2 === 0 ? 2 : 0 },
      children: (
        <>
          {String(checked)}: {node}
        </>
      ),
    }),
  };
  return <Table rowSelection={rowSelection} columns={columns} dataSource={data} />;
};

/**
 * 
 * 自定义选项分组。
 * 
 * 
 * 
 * Customize selection group.
 * 
 * 
 */
export const row_selection_custom_debug = () => {
	return ReactDOM.render(<App />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Data-Display/Table',
	component: Table,
}