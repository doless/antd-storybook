import Icon from '@ant-design/icons';
import React from 'react';
import ReactDOM from 'react-dom';

import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const props = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

/**
 * 
 * 经典款式，用户点击按钮弹出文件选择框。
 * 
 * 
 * 
 * Classic mode. File selection dialog pops up when upload button is clicked.
 * 
 * 
 */
export const basic = () => {
	return ReactDOM.render(
	  <Upload {...props}>
	    <Button icon={<UploadOutlined />}>Click to Upload</Button>
	  </Upload>,
	  document.getElementById('root'))
}

export default {
	title: 'Ant Design/Data-Entry/Upload',
	component: Upload,
}