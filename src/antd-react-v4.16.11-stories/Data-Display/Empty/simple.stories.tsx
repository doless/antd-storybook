import React from 'react';
import ReactDOM from 'react-dom';

import { Empty } from 'antd';

/**
 * 
 * 可以通过设置 `image` 为 `Empty.PRESENTED_IMAGE_SIMPLE` 选择另一种风格的图片。
 * 
 * 
 * 
 * You can choose another style of `image` by setting image to `Empty.PRESENTED_IMAGE_SIMPLE`.
 * 
 * 
 */
export const simple = () => {
	return ReactDOM.render(<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Data-Display/Empty',
	component: Empty,
}