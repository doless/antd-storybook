import React from 'react';
import ReactDOM from 'react-dom';

import { Avatar } from 'antd';

/**
 * 
 * 图片不存在时，会回退到 `src`。
 * 
 * 
 * 
 * 图片不存在时，会回退到 `src`。
 * 
 * 
 */
export const fallback = () => {
	return ReactDOM.render(
	  <>
	    <Avatar shape="circle" src="http://abc.com/not-exist.jpg">
	      A
	    </Avatar>
	    <Avatar shape="circle" src="http://abc.com/not-exist.jpg">
	      ABC
	    </Avatar>
	  </>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Display/Avatar',
	component: Avatar,
}