import Icon from '@ant-design/icons';
import React from 'react';
import ReactDOM from 'react-dom';

import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const props = {
  action: '//jsonplaceholder.typicode.com/posts/',
  listType: 'picture',
  previewFile(file) {
    console.log('Your upload file:', file);
    // Your process logic. Here we just mock to the same file
    return fetch('https://next.json-generator.com/api/json/get/4ytyBoLK8', {
      method: 'POST',
      body: file,
    })
      .then(res => res.json())
      .then(({ thumbnail }) => thumbnail);
  },
};

/**
 * 
 * 自定义本地预览，用于处理非图片格式文件（例如视频文件）。
 * 
 * 
 * 
 * Customize local preview. Can handle with non-image format files such as video.
 * 
 * 
 */
export const preview_file = () => {
	return ReactDOM.render(
	  <Upload {...props}>
	    <Button icon={<UploadOutlined />}>Upload</Button>
	  </Upload>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Entry/Upload',
	component: Upload,
}