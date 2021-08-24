import React from 'react';
import ReactDOM from 'react-dom';

import { Pagination } from 'antd';

/**
 * 
 * 通过设置 `showTotal` 展示总共有多少数据。
 * 
 * 
 * 
 * You can show the total number of data by setting `showTotal`.
 * 
 * 
 */
export const total_demo = () => {
	return ReactDOM.render(
	  <>
	    <Pagination
	      total={85}
	      showTotal={total => `Total ${total} items`}
	      defaultPageSize={20}
	      defaultCurrent={1}
	    />
	    <br />
	    <Pagination
	      total={85}
	      showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
	      defaultPageSize={20}
	      defaultCurrent={1}
	    />
	  </>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Navigation/Pagination',
	component: Pagination,
}