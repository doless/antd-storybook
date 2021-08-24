import React from 'react';
import ReactDOM from 'react-dom';

import { Pagination } from 'antd';

function itemRender(current, type, originalElement) {
  if (type === 'prev') {
    return <a>Previous</a>;
  }
  if (type === 'next') {
    return <a>Next</a>;
  }
  return originalElement;
}

/**
 * 
 * 修改上一步和下一步为文字链接。
 * 
 * 
 * 
 * Use text link for prev and next button.
 * 
 * 
 */
export const itemRender_demo = () => {
	return ReactDOM.render(<Pagination total={500} itemRender={itemRender} />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Navigation/Pagination',
	component: Pagination,
}