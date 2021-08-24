import React from 'react';
import ReactDOM from 'react-dom';

import { Pagination } from 'antd';

function onChange(pageNumber) {
  console.log('Page: ', pageNumber);
}

/**
 * 
 * 快速跳转到某一页。
 * 
 * 
 * 
 * Jump to a page directly.
 * 
 * 
 */
export const jump = () => {
	return ReactDOM.render(
	  <>
	    <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
	    <br />
	    <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} disabled />
	  </>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Navigation/Pagination',
	component: Pagination,
}