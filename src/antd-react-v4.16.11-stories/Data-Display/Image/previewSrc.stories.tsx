import ReactDOM from 'react-dom';

import React from 'react';
import { Image } from 'antd';

function ImageDemo() {
  return (
    <Image
      width={200}
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
      preview={{
        src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      }}
    />
  );
}

/**
 * 
 * 可以设置不同的预览图片。
 * 
 * 
 * 
 * You can set different preview image.
 * 
 * 
 */
export const previewSrc = () => {
	return ReactDOM.render(<ImageDemo />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Data-Display/Image',
	component: Image,
}