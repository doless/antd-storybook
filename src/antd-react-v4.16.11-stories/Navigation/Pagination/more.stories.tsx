import React from 'react';
import ReactDOM from 'react-dom';

import { Pagination } from 'antd';

/**
 * 
 * 更多分页。
 * 
 * 
 * 
 * More pages.
 * 
 * 
 */
export const more = () => {
	return ReactDOM.render(<Pagination defaultCurrent={6} total={500} />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Navigation/Pagination',
	component: Pagination,
}