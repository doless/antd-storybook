import React from 'react';
import ReactDOM from 'react-dom';

import { Empty, Button } from 'antd';

/**
 * 
 * 自定义图片链接、图片大小、描述、附属内容。
 * 
 * 
 * 
 * Customize image source, image size, description and extra content.
 * 
 * 
 */
export const customize = () => {
	return ReactDOM.render(
	  <Empty
	    image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
	    imageStyle={{
	      height: 60,
	    }}
	    description={
	      <span>
	        Customize <a href="#API">Description</a>
	      </span>
	    }
	  >
	    <Button type="primary">Create Now</Button>
	  </Empty>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Display/Empty',
	component: Empty,
}