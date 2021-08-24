import Icon from '@ant-design/icons';
import React from 'react';
import ReactDOM from 'react-dom';

import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const props = {
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange({ file, fileList }) {
    if (file.status !== 'uploading') {
      console.log(file, fileList);
    }
  },
  defaultFileList: [
    {
      uid: '1',
      name: 'xxx.png',
      status: 'done',
      response: 'Server Error 500', // custom error message to show
      url: 'http://www.baidu.com/xxx.png',
    },
    {
      uid: '2',
      name: 'yyy.png',
      status: 'done',
      url: 'http://www.baidu.com/yyy.png',
    },
    {
      uid: '3',
      name: 'zzz.png',
      status: 'error',
      response: 'Server Error 500', // custom error message to show
      url: 'http://www.baidu.com/zzz.png',
    },
  ],
};

/**
 * 
 * 使用 `defaultFileList` 设置已上传的内容。
 * 
 * 
 * 
 * Use `defaultFileList` for uploaded files when page init.
 * 
 * 
 */
export const defaultFileList_demo = () => {
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