import React from 'react';
import ReactDOM from 'react-dom';

import { Pagination } from 'antd';

function onShowSizeChange(current, pageSize) {
  console.log(current, pageSize);
}

/**
 * 
 * 改变每页显示条目数。
 * 
 * 
 * 
 * Change `pageSize`.
 * 
 * 
 */
export const changer = () => {
	return ReactDOM.render(
	  <>
	    <Pagination
	      showSizeChanger
	      onShowSizeChange={onShowSizeChange}
	      defaultCurrent={3}
	      total={500}
	    />
	    <br />
	    <Pagination
	      showSizeChanger
	      onShowSizeChange={onShowSizeChange}
	      defaultCurrent={3}
	      total={500}
	      disabled
	    />
	  </>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Navigation/Pagination',
	component: Pagination,
}