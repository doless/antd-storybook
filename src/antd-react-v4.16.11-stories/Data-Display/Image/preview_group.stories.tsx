import React from 'react';
import ReactDOM from 'react-dom';

import { Image } from 'antd';

const App = () => (
  <Image.PreviewGroup>
    <Image width={200} src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
    <Image
      width={200}
      src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
    />
  </Image.PreviewGroup>
);

/**
 * 
 * 点击左右切换按钮可以预览多张图片。
 * 
 * 
 * 
 * Click the left and right switch buttons to preview multiple images.
 * 
 * 
 */
export const preview_group = () => {
	return ReactDOM.render(<App />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Data-Display/Image',
	component: Image,
}