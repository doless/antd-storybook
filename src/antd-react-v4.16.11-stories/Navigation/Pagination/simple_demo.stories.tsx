import React from 'react';
import ReactDOM from 'react-dom';

import { Pagination } from 'antd';

/**
 * 
 * 简单的翻页。
 * 
 * 
 * 
 * Simple mode.
 * 
 * 
 */
export const simple_demo = () => {
	return ReactDOM.render(
	  <>
	    <Pagination simple defaultCurrent={2} total={50} />
	    <br />
	    <Pagination disabled simple defaultCurrent={2} total={50} />
	  </>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Navigation/Pagination',
	component: Pagination,
}