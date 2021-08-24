import ReactDOM from 'react-dom';

import React from 'react';
import { Image, Button, Space } from 'antd';

function ImageDemo() {
  const [random, setRandom] = React.useState();
  return (
    <Space size={12}>
      <Image
        width={200}
        src={`https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${random}`}
        placeholder={
          <Image
            preview={false}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
            width={200}
          />
        }
      />
      <Button
        type="primary"
        onClick={() => {
          setRandom(Date.now());
        }}
      >
        Reload
      </Button>
    </Space>
  );
}

/**
 * 
 * 大图使用 placeholder 渐进加载。
 * 
 * 
 * 
 * Progressive when large image loading.
 * 
 * 
 */
export const placeholder_demo = () => {
	return ReactDOM.render(<ImageDemo />, document.getElementById('root'));
}

export default {
	title: 'Ant Design/Data-Display/Image',
	component: Image,
}