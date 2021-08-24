import Icon from '@ant-design/icons';
import ReactDOM from 'react-dom';
import './preview_mask.css';

import React from 'react';
import { Image, Space } from 'antd';
import { ZoomInOutlined } from '@ant-design/icons';

function ImageDemo() {
  return (
    <Image
      width={96}
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      preview={{
        maskClassName: 'customize-mask',
        mask: (
          <Space direction="vertical" align="center">
            <ZoomInOutlined />
            示例
          </Space>
        ),
      }}
    />
  );
}

/**
 * 
 * 自定义预览文本。
 * 
 * 
 * 
 * Custom preview mask.
 * 
 * 
 */
export const preview_mask = () => {
	return ReactDOM.render(<ImageDemo />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Data-Display/Image',
	component: Image,
}