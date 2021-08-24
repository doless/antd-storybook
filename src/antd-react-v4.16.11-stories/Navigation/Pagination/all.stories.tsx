import React from 'react';
import ReactDOM from 'react-dom';

import { Pagination } from 'antd';

/**
 * 
 * 展示所有配置选项。
 * 
 * 
 * 
 * Show all configured prop.
 * 
 * 
 */
export const all = () => {
	return ReactDOM.render(
	  <>
	    <Pagination
	      total={85}
	      showSizeChanger
	      showQuickJumper
	      showTotal={total => `Total ${total} items`}
	    />
	  </>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Navigation/Pagination',
	component: Pagination,
}