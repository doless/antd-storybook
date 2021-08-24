import React from 'react';
import ReactDOM from 'react-dom';

import { Image } from 'antd';

function ImageDemo() {
  return (
    <Image
      width={200}
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    />
  );
}

/**
 * 
 * 单击图像可以放大显示。
 * 
 * 
 * 
 * Click the image to zoom in.
 * 
 * 
 */
export const basic = () => {
	return ReactDOM.render(<ImageDemo />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Data-Display/Image',
	component: Image,
}