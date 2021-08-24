import React from 'react';
import ReactDOM from 'react-dom';

import { Pagination } from 'antd';

/**
 * 
 * 基础分页。
 * 
 * 
 * 
 * Basic pagination.
 * 
 * 
 */
export const basic = () => {
	return ReactDOM.render(<Pagination defaultCurrent={1} total={50} />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Navigation/Pagination',
	component: Pagination,
}