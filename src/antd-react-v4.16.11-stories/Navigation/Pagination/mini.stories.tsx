import React from 'react';
import ReactDOM from 'react-dom';

import { Pagination } from 'antd';

function showTotal(total) {
  return `Total ${total} items`;
}

/**
 * 
 * 迷你版本。
 * 
 * 
 * 
 * Mini size pagination.
 * 
 * 
 */
export const mini = () => {
	return ReactDOM.render(
	  <>
	    <Pagination size="small" total={50} />
	    <Pagination size="small" total={50} showSizeChanger showQuickJumper />
	    <Pagination size="small" total={50} showTotal={showTotal} />
	    <Pagination
	      size="small"
	      total={50}
	      disabled
	      showTotal={showTotal}
	      showSizeChanger
	      showQuickJumper
	    />
	  </>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Navigation/Pagination',
	component: Pagination,
}